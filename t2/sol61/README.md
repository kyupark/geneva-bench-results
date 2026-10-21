# GENÈVE — 제네바, 하늘을 걷다

제네바의 여섯 장소를 이어 비행하는 84초, 1920×1080, 24fps 3D 영상입니다.

완성본: `output/geneva-aerial-3d-1080p.mp4`  
로컬 재생 페이지: `output/player.html`

| 시간 | 장소 |
| --- | --- |
| 00:00–00:16 | 올드타운 · 생 피에르 대성당 |
| 00:16–00:30 | 레만 호숫가 · 제 도 분수 |
| 00:30–00:42 | 코르나뱅 중앙역 |
| 00:42–00:57 | UN · 팔레 데 나시옹 |
| 00:57–01:09 | 플라스 드 뇌브 |
| 01:09–01:24 | 바스티옹 공원 · 도시 전경 |

실제 드론 촬영물이 아닌 지리 데이터 기반 3D 시뮬레이션입니다. 실제 건물의 형상과 지붕, 지형, 항공사진, 수목 배치를 사용합니다. 건물 외벽의 창문 패턴, 분수의 물방울과 카메라 이동은 연출한 요소입니다. 배경음악은 이 영상을 위해 코드로 합성한 오리지널 피아노·패드 음악입니다.

## 데이터 출처

- 지형·건물·수목·항공사진: **© swisstopo**. [지오서비스와 이용 조건](https://www.swisstopo.admin.ch/en/geoservices-with-swisstopo-geodata), [연방 지리 데이터 서비스 이용 조건](https://www.geo.admin.ch/en/general-terms-of-use-fsdi).
- 건물: `ch.swisstopo.swissbuildings3d.3d/v1/20260520` — 실제 지붕 형상을 포함하는 3D Tiles.
- 지형: `ch.swisstopo.terrain.3d/v1`.
- 수목: `ch.swisstopo.vegetation.3d/v1`.
- 항공사진: `ch.swisstopo.swissimage`, 촬영 시점은 타일별로 다릅니다.
- [3D Tiles API](https://docs.geo.admin.ch/visualize-data/3d-tiles.html), [지형 API](https://docs.geo.admin.ch/visualize-data/terrain-service.html), [항공사진 타일 API](https://docs.geo.admin.ch/visualize-data/xyz.html).
- 장소 확인: [제네바 관광청 올드타운](https://www.geneve.com/en/attractions/detail/genevas-old-town), [바스티옹 공원](https://www.geneve.com/en/attractions/detail/bastions-park), [UN 팔레 데 나시옹](https://www.ungeneva.org/en/about/palais-des-nations), [제 도 위치](https://www.wikidata.org/wiki/Q684661).

## 다시 렌더링하기

Node.js, Python(numpy/scipy/Pillow/requests), FFmpeg와 macOS의 Google Chrome을 사용했습니다.

```sh
npm ci
python3 src/prepare_texture.py
python3 src/make_music.py
node src/server.mjs
```

별도 터미널에서:

```sh
node src/render.mjs
python3 src/finalize.py
```

`http://127.0.0.1:18765`에서는 3D 비행을 재생할 수 있습니다. 렌더러는 필요한 지리 데이터를 `cache/`에 저장합니다. `node src/render.mjs --preview`는 여섯 장소의 미리보기만 생성합니다.

카메라, 위치 자막, 지붕 사진 투영, 분수 애니메이션: `src/flight.js`.

검증 결과는 `output/render-report.json`과 `output/validation.json`에 기록합니다.
