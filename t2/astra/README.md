# GENÈVE — 제네바, 하늘을 걷다

제네바의 여섯 장소를 연속 비행하는 **100초 · 1920×1080 · 30fps** 3D 애니메이션입니다. 한글/프랑스어 장소 안내, 비행 경로 미니맵, 움직이는 제토 분수·수면·국기·기차와 오리지널 앰비언트 음악을 포함합니다.

## 보기

- `output/geneva-3d-drone-tour.mp4` — 완성 영상, H.264 + AAC 스테레오. 챕터 메타데이터 포함.
- `output/재생.html` — 파일을 더블클릭하면 브라우저에서 재생하며 장소별 이동 버튼을 사용할 수 있습니다.
- `output/geneva-poster.jpg` — 대표 이미지.
- `output/geneva-contact-sheet.jpg` — 여섯 장소의 장면 미리보기.
- `output/geneva-original-score.wav` — 직접 합성한 오리지널 음악.
- `output/geneva-3d-source.zip` — 지도 스냅샷, 3D 장면, 카메라, 음악·렌더링 스크립트를 묶은 편집용 소스.

| 시간 | 장소 |
|---|---|
| 00:00 | 올드타운 · 성 피에르 대성당 |
| 00:18 | 플라스 드 뇌브 · 그랑 테아트르 |
| 00:29 | 바스티옹 · 종교개혁의 벽 |
| 00:44 | 호숫가 · 레만호와 제토 분수 |
| 01:03 | 코르나뱅 중앙역 |
| 01:18 | UN 제네바 · 팔레 데 나시옹 |

## 표현 범위와 자료

실사 드론 촬영이나 사진측량 영상이 아닌, 실제 지도 위에 만든 **건축 모형 스타일의 3D 렌더링**입니다. OpenStreetMap의 건물 윤곽·도로·철도·호안·공원·수목 위치를 사용했습니다. 높이 태그가 없는 건물은 추정 높이를 적용했습니다. 지형의 높낮이, 랜드마크 세부 형태, 색상, 기차·배·국기는 연출용이며 측량 결과와 일치하지 않습니다. 긴 구간은 비행 시간을 압축했습니다.

- 지도: [© OpenStreetMap contributors](https://www.openstreetmap.org/copyright), [ODbL 1.0](https://opendatacommons.org/licenses/odbl/1-0/). 2026-10-19에 [Swiss Overpass](https://overpass.osm.ch/)에서 받은 스냅샷입니다. 원본은 `data/osm.json`, 단순화한 지도 데이터는 `data/city.json`, 육지 삼각망은 `data/terrain.json`에 있으며 해당 데이터는 ODbL로 제공합니다.
- 장소·동선 참고: [Geneva Tourism 공식 관광 지도](https://www.geneve.com/fileadmin/user_upload/B2C/Pages/Plan_and_Stay/Tourist_Information/Geneva_Discovery_map_FR-EN.pdf), [성 피에르 대성당](https://www.geneve.com/en/attractions/detail/st-pierre-cathedral-geneva-from-above). 지도 이미지나 관광 사진을 영상에 복제하지 않았습니다.
- 렌더러: [Three.js](https://threejs.org/) / MIT, 브라우저 캡처: Playwright / Apache-2.0.
- 음악: 외부 녹음이나 기존 음원을 사용하지 않고 `scripts/music.py`에서 피아노·패드·잔향을 직접 합성했습니다.

## 다시 렌더링하기

Node.js, Python 3, Chrome, FFmpeg가 필요합니다. 현재 렌더러의 기본 Chrome 경로는 macOS용입니다. 다른 환경에서는 `CHROME_PATH`를 지정하고 `scripts/render.mjs`의 GPU 옵션을 환경에 맞게 조정하세요. 영상의 한글 서체는 macOS의 Apple SD Gothic Neo입니다.

```sh
npm ci
python3 -m venv --system-site-packages .venv
.venv/bin/pip install -r requirements.txt
npm run serve
```

별도 터미널에서 다음을 실행합니다. 포함된 지도 스냅샷을 그대로 사용하므로 지도 다운로드는 필요 없습니다.

```sh
npm run preview
npm run render
.venv/bin/python scripts/music.py
.venv/bin/python scripts/finish.py
.venv/bin/python scripts/make_previews.py
```

3D 장면과 카메라 경로: `src/film.js`. 로컬 서버 실행 후 `http://127.0.0.1:8765/studio.html`에서 실시간 3D 비행을 볼 수 있습니다. 지도 데이터를 새로 받을 때만 `scripts/fetch_map.py`, `scripts/prepare_map.py`를 순서대로 실행합니다.
