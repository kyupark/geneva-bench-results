"""Original procedural ambient score: felt piano, warm pads and a quiet airy bed."""
import numpy as np
from scipy.signal import butter, sosfilt
from scipy.io.wavfile import write
from pathlib import Path

SR=48000; DUR=100; N=SR*DUR
rng=np.random.default_rng(6019)
mix=np.zeros((N,2),np.float32)
def freq(m):return 440*2**((m-69)/12)
def add(signal,start,amp=.1,pan=0):
    offset=int(start*SR)
    if offset>=N:return
    end=min(N,offset+len(signal));s=signal[:end-offset]*amp
    mix[offset:end,0]+=s*np.sqrt((1-pan)/2)
    mix[offset:end,1]+=s*np.sqrt((1+pan)/2)
def piano(note,start,amp=.07,pan=0,length=5):
    t=np.arange(int(SR*length))/SR;f=freq(note)
    attack=1-np.exp(-t*140)
    s=np.zeros_like(t)
    for k,vol in enumerate([1,.32,.14,.07,.028],1):
        s+=vol*np.sin(2*np.pi*f*k*(1+.00012*k*k)*t)*np.exp(-t*(.66+k*.22))
    s+=rng.standard_normal(len(t))*.012*np.exp(-t*45)
    add(s*attack,start,amp,pan)
def pad(notes,start,length):
    t=np.arange(int(SR*length))/SR
    env=np.minimum(1,t/2.0)*np.minimum(1,(length-t)/3.0)
    for i,note in enumerate(notes):
        f=freq(note);s=(np.sin(2*np.pi*f*t+.15*np.sin(t*.8))+np.sin(2*np.pi*f*1.0014*t))*.5
        s+=.13*np.sin(2*np.pi*f*2*t)
        add(s*env,start,.026,(-1)**i*.35)
chords=[[50,57,61,66,69],[45,52,59,61,64],[47,54,57,62,66],[43,50,57,59,62]]
phrase=20/3
for bar in range(15):
    chord=chords[bar%4] if bar<14 else chords[0]
    start=bar*phrase
    pad(chord[1:],start,phrase+3)
    piano(chord[0]-12,start,.12,0,7)
    pattern=[0,2,3,1,2,4,3,2]
    for j,k in enumerate(pattern):
        note=chord[k]+12
        piano(note,start+j*phrase/8,.065 if j%2==0 else .045,np.sin(j*1.7)*.42)
    if bar in [2,4,6,8,10,12,14]:
        for j,degree in enumerate([4,3,2]):piano(chord[degree]+24,start+1.25+j*1.67,.025,(-1)**j*.25,6)
# Stereo reflections. No external recordings or music samples are used.
dry=mix.copy()
for seconds,gain in [(.19,.15),(.37,.13),(.61,.10),(.89,.075),(1.27,.055)]:
    delay=int(seconds*SR);mix[delay:]+=dry[:-delay,::-1]*gain
air=sosfilt(butter(2,[160,1100],btype='band',fs=SR,output='sos'),rng.standard_normal(N))
slow=.5+.5*np.sin(np.arange(N)/SR*.15)
mix+=((air*.0035*slow)[:,None]).astype(np.float32)
fade=np.minimum(1,np.arange(N)/(SR*3))*np.minimum(1,(N-np.arange(N))/(SR*5))
mix*=fade[:,None]
mix=np.tanh(mix*1.4);mix*=.83/max(np.max(np.abs(mix)),.001)
out=Path(__file__).resolve().parents[1]/'output/geneva-original-score.wav'
out.parent.mkdir(exist_ok=True)
write(out,SR,(mix*32767).astype(np.int16))
print('Original stereo score:',out.name,'peak',float(np.max(np.abs(mix))),flush=True)
