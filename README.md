# Mission Global · 구원의 길

3분 전도(The Cross Way) 다국어 모바일·태블릿 웹 앱.

선교사, 목회자, 일반 성도가 누구나 쉽고 효과적으로 복음을 전할 수 있도록 만든
PWA 형태의 프레젠테이션 앱입니다. 12개 단계에 걸쳐 성경 구절을 점진적으로 공개하며,
마지막에 영접 기도와 축복의 메시지로 마무리됩니다.

- 🌍 **5개 언어 지원** — 한국어 / English / Bahasa Indonesia / Tagalog / ខ្មែរ (Khmer)
- ✝ **12단계 + 영접기도** — 도입 → 11단계 복음 흐름 → 영접 기도 카드
- 📿 **PPT 클리커 패턴** — 다음 버튼 한 번에 절 한 줄씩 점진 공개
- 🌌 **글래스모피즘 다크 우주 테마** — 다크 그라데이션 + 별빛 + 글래스 카드
- 📐 **십자가 미니맵** — 현재 단계가 십자가의 어디인지 시각화

## Live

- 배포: <https://raymondlee0814.github.io/mission_global/>
- (저장소 Settings → Pages 에서 "GitHub Actions" 소스로 활성화 필요)

## 개발 환경

```bash
npm install
npm run dev      # 개발 서버 http://localhost:5173
npm run build    # 정적 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
```

Node.js 20+ 권장.

## 프로젝트 구조

```
src/
├── App.jsx                 메인 앱 (상태 머신 / 입력 / 트랜지션)
├── main.jsx                React 진입점
├── styles/
│   └── globals.css         다크 우주 테마 · 글래스모피즘 · 애니메이션
├── data/
│   └── salvationWay.js     단계 데이터(다국어 12+1) + UI 라벨
└── components/
    ├── Card.jsx            글래스 카드 + 절 진행 도트 + 자동 스크롤
    ├── MiniMap.jsx         십자가 미니맵 (compact 모드 포함)
    ├── ProgressBar.jsx     전체 진행도(절 단위)
    └── LanguageToggle.jsx  언어 전환 드롭다운
```

## 콘텐츠

- 한국어 본문: 개역개정 (출처: `resource/구원의길.md`, 원본 100% 일치 원칙)
- 영어 본문: **World English Bible (WEB)** — 공용 도메인
- 인도네시아어/타갈로그어/크메르어: 제목·부제·UI 라벨은 각 언어 번역, **본문은 영문 fallback + 번역 대기 배지** 표시. 추후 정식 번역본 텍스트 수급 시 `salvationWay.js` 의 `verses` 배열만 교체하면 적용됨.

## 배포

`main` 브랜치에 푸시되면 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
워크플로우가 자동으로 빌드 후 GitHub Pages 에 배포합니다.

## 라이선스

추후 결정. 현재는 비공개 사용 / 선교사역 목적.
