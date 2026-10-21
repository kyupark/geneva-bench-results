"""Add navigable chapter markers, then validate the exported MP4."""
from pathlib import Path
import os,runpy,subprocess

root=Path(__file__).resolve().parents[1]
video=root/'output'/'geneva-aerial-3d-1080p.mp4'
master=root/'output'/'geneva-aerial-3d-master.mp4'
chaptered=root/'output'/'geneva-aerial-3d-1080p-chaptered.mp4'
if not master.exists():os.replace(video,master)
command=['ffmpeg','-y','-hide_banner','-loglevel','error','-stats_period','10','-progress','pipe:1','-i',str(master),'-i',str(root/'output'/'original-score.wav'),'-f','ffmetadata','-i',str(root/'output'/'chapters.ffmetadata'),'-map','0:v:0','-map','1:a:0','-map_metadata','2','-map_chapters','2','-vf','scale=in_color_matrix=bt601:out_color_matrix=bt709:in_range=full:out_range=tv,format=yuv420p','-c:v','libx264','-preset','fast','-crf','20','-pix_fmt','yuv420p','-color_range','tv','-colorspace','bt709','-color_primaries','bt709','-color_trc','bt709','-c:a','aac','-b:a','192k','-af','loudnorm=I=-18:TP=-1.5:LRA=10','-ar','48000','-t','84','-movflags','+faststart',str(chaptered)]
process=subprocess.Popen(command,stdout=subprocess.PIPE,text=True)
for line in process.stdout:
    if line.startswith('out_time='):print('COMPATIBLE EXPORT',line.strip().split('=',1)[1],flush=True)
if process.wait()!=0:raise RuntimeError('Final export failed')
os.replace(chaptered,video)
runpy.run_path(str(root/'src'/'validate.py'),run_name='__main__')
