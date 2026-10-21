"""Original synthesized score: piano, airy pad and a quiet lakeside texture."""
from pathlib import Path
import numpy as np
from scipy.io import wavfile
from scipy.signal import butter,sosfilt

ROOT=Path(__file__).resolve().parents[1]
SR=44100;DURATION=84
rng=np.random.default_rng(731)
audio=np.zeros((SR*DURATION,2),np.float64)
def freq(m):return 440*2**((m-69)/12)
def place(w,start,pan=0):
    idx=int(start*SR); n=min(len(w),len(audio)-idx)
    if n<=0:return
    audio[idx:idx+n,0]+=w[:n]*np.sqrt((1-pan)/2)
    audio[idx:idx+n,1]+=w[:n]*np.sqrt((1+pan)/2)
def piano(m,start,volume=.13,pan=0,dur=5):
    t=np.arange(int(dur*SR))/SR; f=freq(m)
    w=np.zeros_like(t)
    for h,a in [(1,1),(2,.37),(3,.16),(4,.08),(5,.035)]:
        w+=a*np.sin(2*np.pi*f*h*(1+.00007*h*h)*t)*np.exp(-t*(.48+.23*h))
    w*=np.minimum(t/.012,1)*np.exp(-t*.15)
    w*=np.minimum((dur-t)/.25,1)
    place(w*volume,start,pan)
def pad(notes,start,dur=12):
    t=np.arange(int(dur*SR))/SR
    env=np.minimum(t/2.4,1)*np.minimum((dur-t)/3,1)
    for j,m in enumerate(notes):
        w=(np.sin(2*np.pi*freq(m)*t)+.25*np.sin(2*np.pi*freq(m)*2.001*t))*.018*env
        place(w,start,(j-1)*.35)
beat=60/78;bar=4*beat
chords=[[48,55,59,64,67],[45,52,57,60,64],[41,48,52,57,60],[43,50,55,57,62]]
for i in range(26):
    start=i*bar
    chord=chords[(i//2)%4]
    if i%2==0:pad(chord[1:],start,2*bar+3.5)
    piano(chord[0],start,.12,-.12,6)
    for j in range(8):
        note=chord[[1,2,3,4,3,2,4,2][j]]+12
        piano(note,start+j*beat/2,.052 if j%2 else .070,((j%3)-1)*.32,3.6)
melody=[(0,76),(2,79),(5,74),(7,72),(8,71),(10,76),(13,72),(15,69),(16,72),(19,76),(21,79),(23,76),(24,74),(27,71),(29,69),(31,67)]
for offset in [12*beat,44*beat,76*beat]:
    for b,n in melody:
        piano(n,offset+b*beat,.092,.18,6)
# Quiet filtered air and water, with independent stereo channels.
for ch in range(2):
    noise=rng.standard_normal(len(audio))
    air=sosfilt(butter(2,[250,1600],btype='bandpass',fs=SR,output='sos'),noise)
    water=sosfilt(butter(2,[2000,6500],btype='bandpass',fs=SR,output='sos'),noise)
    t=np.arange(len(audio))/SR
    audio[:,ch]+=air*.0025*(.65+.35*np.sin(t*.19+ch))
    near_lake=np.exp(-((t-23)/8)**2)
    audio[:,ch]+=water*.0035*near_lake
# A short stereo room response gives the piano a soft, open acoustic.
dry=audio.copy()
for sec,gain in [(.173,.17),(.281,.13),(.431,.10),(.673,.07),(.937,.04)]:
    n=int(sec*SR);audio[n:]+=dry[:-n,::-1]*gain
t=np.arange(len(audio))/SR
fade=np.minimum(t/3,1)*np.minimum((DURATION-t)/4,1)
audio*=fade[:,None]
audio=np.tanh(audio*1.5)
audio*=.88/max(abs(audio).max(),.88)
wavfile.write(ROOT/'output'/'original-score.wav',SR,(audio*32767).astype(np.int16))
print('Original score ready:',DURATION,'seconds')
