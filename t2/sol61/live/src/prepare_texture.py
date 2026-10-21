import concurrent.futures, io, json, math, time
from pathlib import Path
import requests
from PIL import Image

ROOT=Path(__file__).resolve().parents[1]
Z=17
def xy(lon,lat):
    return (lon+180)/360*2**Z,(1-math.asinh(math.tan(math.radians(lat)))/math.pi)/2*2**Z
x0,y1=xy(6.120,46.190)
x1,y0=xy(6.180,46.237)
x0,y0,x1,y1=math.floor(x0),math.floor(y0),math.ceil(x1),math.ceil(y1)
image=Image.new('RGB',((x1-x0)*256,(y1-y0)*256))
out=ROOT/'cache'/'satellite';out.mkdir(exist_ok=True)
def fetch(item):
    x,y=item;p=out/f'{Z}-{x}-{y}.jpg'
    if p.exists():return x,y,Image.open(p).convert('RGB')
    url=f'https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.swissimage/default/current/3857/{Z}/{x}/{y}.jpeg'
    for i in range(4):
        try:
            r=requests.get(url,timeout=30);r.raise_for_status()
            im=Image.open(io.BytesIO(r.content)).convert('RGB');p.write_bytes(r.content)
            return x,y,im
        except Exception:
            if i==3:raise
            time.sleep(.5)
items=[(x,y) for y in range(y0,y1) for x in range(x0,x1)]
with concurrent.futures.ThreadPoolExecutor(max_workers=16) as ex:
    for i,(x,y,im) in enumerate(ex.map(fetch,items)):
        image.paste(im,((x-x0)*256,(y-y0)*256))
        if i%100==0:print(f'Texture {i+1}/{len(items)}',flush=True)
image.save(ROOT/'cache'/'geneva-roofs.jpg',quality=95,subsampling=0)
(ROOT/'cache'/'texture-bounds.json').write_text(json.dumps({'minX':x0/2**Z,'minY':y0/2**Z,'spanX':(x1-x0)/2**Z,'spanY':(y1-y0)/2**Z,'width':image.width,'height':image.height}))
print('Texture complete',image.size,flush=True)
