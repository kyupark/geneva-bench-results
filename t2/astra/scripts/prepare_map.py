import json, math, random
from pathlib import Path
from shapely.geometry import Polygon, LineString, Point, box
from shapely.ops import polygonize, unary_union, triangulate

root=Path(__file__).resolve().parents[1]
raw=json.loads((root/'data/osm.json').read_text())['elements']
SX=111320*math.cos(math.radians(46.208)); SY=111320
def point(g):return ((g['lon']-6.148)*SX,(g['lat']-46.208)*SY)
def coords(geom):return [[round(x,2),round(y,2)] for x,y in geom]
bounds=box(-7500,-6500,15500,18500)
def pieces(p):
    if p.is_empty:return []
    if p.geom_type=='Polygon':return [p]
    return [q for q in getattr(p,'geoms',[]) if q.geom_type=='Polygon']
def pack(p):return {'p':coords(p.exterior.coords),'holes':[coords(r.coords) for r in p.interiors if Polygon(r).area>12]}
water=[]
for e in raw:
    tags=e.get('tags',{})
    if e['type']=='relation' and tags.get('natural')=='water':
        if tags.get('type')=='site':continue
        lines=[]
        for m in e.get('members',[]):
            pts=[point(g) for g in m.get('geometry',[]) if g and 'lat' in g]
            if len(pts)>=2 and m.get('role')!='inner':lines.append(LineString(pts))
        polys=list(polygonize(lines))
        if e['id'] in [332617,660056]:
            clipped=[line.intersection(bounds) for line in lines]
            candidates=list(polygonize(unary_union(clipped+[bounds.boundary])))
            probes=[Point(point({'lon':lo,'lat':la})) for lo,la in ([(6.16,46.216),(6.175,46.23)] if e['id']==332617 else [(6.14,46.2052),(6.125,46.2018)])]
            polys=[p for p in candidates if any(p.contains(probe) for probe in probes)]
        print('relation',e['id'],len(lines),'polys',len(polys),'areas',[round(p.intersection(bounds).area) for p in polys],flush=True)
        for p in polys:water.extend(pieces(p.intersection(bounds).simplify(.8)))
    elif e['type']=='way' and tags.get('natural')=='water':
        pts=[point(g) for g in e.get('geometry',[]) if g and 'lat' in g]
        if len(pts)>3 and pts[0]==pts[-1]:water.extend(pieces(Polygon(pts).buffer(0).intersection(bounds)))
water=unary_union(water)
water_polys=pieces(water)
print('Water polygons',len(water_polys),'area',round(water.area),flush=True)
terrain=[]
def mesh_grid(x0,y0,x1,y1,step):
    for x in range(x0,x1,step):
        for y in range(y0,y1,step):
            tile=box(x,y,min(x+step,x1),min(y+step,y1))
            if water.contains(tile):continue
            clipped=tile.difference(water) if water.intersects(tile) else tile
            for poly in pieces(clipped):
                for tri in triangulate(poly):
                    if poly.covers(tri.representative_point()):terrain.extend(coords(list(tri.exterior.coords)[:3]))
mesh_grid(-1600,-1800,2000,3000,40)
mesh_grid(-7500,-6500,15500,-1800,300)
mesh_grid(-7500,3000,15500,18500,300)
mesh_grid(-7500,-1800,-1600,3000,300)
mesh_grid(2000,-1800,15500,3000,300)
(root/'data/terrain.json').write_text(json.dumps(terrain,separators=(',',':')))
print('Terrain triangles',len(terrain)//3,flush=True)
result={'origin':[6.148,46.208],'scale':[SX,SY],'buildings':[],'roads':[],'parks':[],'trees':[],'water':[pack(p) for p in water_polys]}
for e in raw:
    tags=e.get('tags',{})
    if e['type']=='node':
        result['trees'].append([*coords([point(e)])[0],8+(e['id']%60)/10]);continue
    if e['type']!='way':continue
    pts=[point(g) for g in e.get('geometry',[]) if g and 'lat' in g]
    if len(pts)<2:continue
    if 'building' in tags and len(pts)>3 and tags['building'] not in ['no','roof']:
        p=Polygon(pts).buffer(0)
        if p.geom_type!='Polygon' or p.area<12:continue
        p=p.simplify(.45)
        if not p.intersects(bounds):continue
        cx,cy=p.centroid.coords[0]
        height=tags.get('height','').replace(' m','')
        try:height=float(height)
        except:
            try:height=float(tags.get('building:levels',0))*3.2
            except:height=0
        if height<=0:
            height=4 if p.area<50 else 7 if p.area<150 else 15+(e['id']%6)*2.4
        height=min(height,90)
        if water.contains(Point(cx,cy)):height=min(height,4.5)
        result['buildings'].append({**pack(p),'c':coords([(cx,cy)])[0],'h':round(height,1),'id':e['id'],'name':tags.get('name',''),'type':tags.get('building',''),'roof':tags.get('roof:shape',''),'area':round(p.area)})
    elif 'highway' in tags or tags.get('railway')=='rail':
        if tags.get('tunnel') in ['yes','building_passage']:continue
        typ=tags.get('highway','rail')
        if typ in ['steps','corridor','elevator','proposed','construction']:continue
        width={'motorway':16,'trunk':14,'primary':13,'secondary':11,'tertiary':9,'residential':6,'service':3.5,'living_street':5,'pedestrian':7,'footway':1.8,'path':1.7,'cycleway':2,'rail':1.5}.get(typ,4)
        if tags.get('area')=='yes' and len(pts)>3:
            p=Polygon(pts).buffer(0)
            if p.geom_type=='Polygon':result['parks'].append({**pack(p),'type':'plaza'})
        else:result['roads'].append({'p':coords(LineString(pts).simplify(.6).coords),'w':width,'type':typ,'bridge':tags.get('bridge')=='yes'})
    elif any(k in tags for k in ['leisure','landuse']) or tags.get('natural')=='wood':
        if len(pts)<4:continue
        p=Polygon(pts).buffer(0)
        for q in pieces(p):
            if q.area>25:result['parks'].append({**pack(q.simplify(.5)),'type':'wood' if tags.get('natural')=='wood' or tags.get('landuse')=='forest' else 'park','name':tags.get('name','')})
(root/'data/city.json').write_text(json.dumps(result,separators=(',',':'),ensure_ascii=False))
print({k:len(v) for k,v in result.items() if isinstance(v,list)},flush=True)
