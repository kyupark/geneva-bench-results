from pathlib import Path
import subprocess
root=Path(__file__).resolve().parents[1]
(root/'previews').mkdir(exist_ok=True)
movie=root/'output/geneva-3d-drone-tour.mp4'
def ff(args):subprocess.run(['ffmpeg','-y','-hide_banner','-loglevel','error',*args],check=True)
ff(['-ss','4','-i',str(movie),'-frames:v','1','-q:v','2',str(root/'output/geneva-poster.jpg')])
times=[11,24,35,52,70,89]
for i,t in enumerate(times):ff(['-ss',str(t),'-i',str(movie),'-frames:v','1','-q:v','2',str(root/f'previews/final-{i+1:02d}.jpg')])
ff(['-framerate','1','-i',str(root/'previews/final-%02d.jpg'),'-vf','scale=640:360,tile=3x2:padding=12:margin=20:color=0x101d23','-frames:v','1','-q:v','2',str(root/'output/geneva-contact-sheet.jpg')])
print('Poster and six-scene contact sheet saved',flush=True)
