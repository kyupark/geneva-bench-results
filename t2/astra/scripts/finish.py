import subprocess
from pathlib import Path
root=Path(__file__).resolve().parents[1]
chapters=[(0,18,'01 · 올드타운 / Vieille-Ville'),(18,29,'02 · 플라스 드 뇌브 / Place de Neuve'),(29,44,'03 · 바스티옹 / Parc des Bastions'),(44,63,'04 · 호숫가 / Le Léman'),(63,78,'05 · 중앙역 / Gare Cornavin'),(78,100,'06 · UN / Palais des Nations')]
meta=';FFMETADATA1\ntitle=GENÈVE — 제네바, 하늘을 걷다\nartist=Geneva City in Flight\ncomment=Original 3D animation. Map data © OpenStreetMap contributors, ODbL.\n'
for start,end,title in chapters:meta+=f'[CHAPTER]\nTIMEBASE=1/1000\nSTART={start*1000}\nEND={end*1000}\ntitle={title}\n'
(root/'data/chapters.ffmeta').write_text(meta)
subprocess.run(['ffmpeg','-y','-hide_banner','-loglevel','warning','-r','30','-i',str(root/'output/geneva-flight.h264'),'-i',str(root/'output/geneva-original-score.wav'),'-i',str(root/'data/chapters.ffmeta'),'-map','0:v:0','-map','1:a:0','-map_metadata','2','-map_chapters','2','-c:v','copy','-c:a','aac','-b:a','192k','-af','loudnorm=I=-18:TP=-1.5:LRA=9','-ar','48000','-video_track_timescale','30000','-movflags','+faststart','-t','100',str(root/'output/geneva-3d-drone-tour.mp4')],check=True)
print('Final MP4 ready',flush=True)
