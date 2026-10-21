import json, re, subprocess
import numpy as np
from pathlib import Path
from PIL import Image,ImageStat

ROOT=Path(__file__).resolve().parents[1]
VIDEO=ROOT/'output'/'geneva-aerial-3d-1080p.mp4'
def run(*cmd):return subprocess.run(cmd,check=True,capture_output=True,text=True).stdout
probe=json.loads(run('ffprobe','-v','error','-show_streams','-show_format','-of','json',str(VIDEO)))
v=next(s for s in probe['streams'] if s['codec_type']=='video')
a=next(s for s in probe['streams'] if s['codec_type']=='audio')
assert (v['width'],v['height'])==(1920,1080)
assert v['avg_frame_rate']=='24/1'
assert int(v['nb_frames'])==2016
assert abs(float(probe['format']['duration'])-84)<.1
assert v['codec_name']=='h264' and v['pix_fmt']=='yuv420p'
assert a['codec_name']=='aac' and a['channels']==2
assert a['sample_rate']=='48000'
assert v['color_space']=='bt709' and v['color_range']=='tv'
decode=subprocess.run(['ffmpeg','-hide_banner','-v','error','-progress','pipe:1','-nostats','-i',str(VIDEO),'-f','null','-'],capture_output=True,text=True,check=True)
assert not decode.stderr.strip(),decode.stderr
decoded_frames=int(re.findall(r'^frame=(\d+)',decode.stdout,re.M)[-1])
assert decoded_frames==2016
audio_run=subprocess.run(['ffmpeg','-v','error','-i',str(VIDEO),'-vn','-f','f32le','-acodec','pcm_f32le','-'],capture_output=True,check=True)
samples=np.frombuffer(audio_run.stdout,dtype=np.float32)
audio_peak=float(np.max(np.abs(samples)))
audio_rms=float(20*np.log10(np.sqrt(np.mean(samples.astype(np.float64)**2))+1e-12))
assert -40<audio_rms<-7,(audio_rms,'Unexpected audio level')
assert 0<audio_peak<.99,(audio_peak,'Audio clipping')
times=[4,8,15,23,29,36,41,49,56,63,68,74,80]
sheet=Image.new('RGB',(1920,1080),(12,23,29))
inspection=Image.new('RGB',(1920,1080),(12,23,29))
for i,t in enumerate(times):
    target=ROOT/'previews'/f'final-{t:02}.jpg'
    run('ffmpeg','-hide_banner','-loglevel','error','-y','-ss',str(t),'-i',str(VIDEO),'-frames:v','1','-q:v','2',str(target))
    im=Image.open(target)
    inspection.paste(im.resize((480,270)),((i%4)*480,(i//4)*270))
    if t==4:im.save(ROOT/'output'/'poster.jpg',quality=95)
    if t in [8,23,36,49,63,74]:
        index=[8,23,36,49,63,74].index(t)
        # Compact 3×2 contact sheet of frames extracted from the encoded final.
        sheet.paste(im.resize((640,360)),((index%3)*640,(index//3)*540+90))
sheet.save(ROOT/'output'/'six-places-preview.jpg',quality=94)
inspection.save(ROOT/'previews'/'final-inspection.jpg',quality=94)
report=json.loads((ROOT/'output'/'render-report.json').read_text())
assert report['errors']==[],report['errors']
assert report['notSettled']==[],report['notSettled']
result={'passed':True,'file':VIDEO.name,'duration':float(probe['format']['duration']),'width':v['width'],'height':v['height'],'fps':v['avg_frame_rate'],'decodedFrames':decoded_frames,'videoCodec':v['codec_name'],'pixelFormat':v['pix_fmt'],'colorSpace':v['color_space'],'colorRange':v['color_range'],'audioCodec':a['codec_name'],'audioChannels':a['channels'],'audioSampleRate':a['sample_rate'],'audioRmsDbfs':audio_rms,'audioPeak':audio_peak,'fileBytes':VIDEO.stat().st_size,'decodeErrors':decode.stderr.strip(),'renderErrors':report['errors'],'unsettledFrames':report['notSettled'],'visuallyReviewedSampleTimes':times}
(ROOT/'output'/'validation.json').write_text(json.dumps(result,ensure_ascii=False,indent=2))
print(json.dumps(result,ensure_ascii=False,indent=2))
