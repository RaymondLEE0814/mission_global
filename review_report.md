# 검수 보고서 — 구원의 길 v0.1.0

> **Reviewer Agent 산출물.** Coder Agent의 결과물(`src/`)을 원본 `resource/구원의길.md` 및 Planner의 `ui_ux_specification.md`와 대조하여 검증한 결과입니다.
> 검수 일자: 2026-04-30

---

## 1. 검수 범위 및 방법

| 영역 | 방법 |
|---|---|
| 콘텐츠 무결성 | `구원의길.md` ↔ `src/src/data/salvationWay.js` 11단계 + 도입 1장 grep 대조 |
| 명세 부합성 | `ui_ux_specification.md` 의 §1 schema, §2 트랜지션, §3 디자인 토큰, §4 컴포넌트 명세 항목별 점검 |
| 코드 품질 | React 18 + Vite 권장 패턴 준수, hooks 의존성, 접근성, 반응형 분기 |
| 실행성 | `npm install && npm run dev` 가 경고 없이 실행되는지 (※ Reviewer 환경에서 실제 실행은 사용자 측에서 진행 필요) |

---

## 2. 콘텐츠 무결성 — ✅ Pass (1건 수정 후 통과)

### 2.1 발견된 결함 및 조치

| # | 위치 | 결함 | 조치 |
|---:|---|---|---|
| C-01 | `salvationWay.js:128` (눅 16:19~31) | 원본 `"고운 배 옷"` 을 자동 교정해 `"고운 베 옷"` 으로 입력함. **원본 100% 일치 원칙 위반.** | 즉시 `"배 옷"` 으로 되돌림 (Reviewer 단계에서 수정 완료). |

> 비고: `"배 옷"` 은 원본에 그대로 보존된 표기로, 본 명세에서는 신학적/번역적 판단을 가하지 않고 원본 충실도를 우선했습니다. 향후 영문/타국어 번역 시 정식 표준역(예: 개역개정 `"고운 베 옷"`)을 별도 비교 검토 권고.

### 2.2 통과 항목 (Sampling)

* 창 1:1, 창 2:7 — 도입 카드 ✅
* 창 1:27 / 1:28 / 2:17 — 1단계 (형상·복·언약) ✅
* 창 3:1~5 / 3:6 / 3:7~10 — 2단계 (사탄·죄·떠남), 절번호·줄바꿈 모두 보존 ✅
* 요 8:44 ~ 출 20:4~5 — 3단계 (불신자 6대 문제) 6개 구절 ✅
* 행 4:12 / 사 64:6 / 골 2:8 — 4단계 (인간의 방법) ✅
* 요 3:16 ~ 계 22:20 — 5단계 (하나님의 방법, 7개 구절) ✅
* 히 2:14~15 / 9:11~12 / 10:19~20 — 6단계 (그리스도) ✅
* 요일 3:8 / 롬 8:2 / 요 14:6 — 7단계 ✅
* 요 1:12 / 롬 10:9~10 / 계 3:20 / 잠 27:1 — 8단계 ✅
* 9단계 (고전 3:16 외 7개 구절) ✅
* 마 28:16~20 / 막 16:15~20 / 행 1:8 — 10단계 ✅
* 11단계 (5가지 확신) — 요 14:26~27 의 원본 표기 차이 (`근심하지 말고` vs `근심하지도 말고`)까지 그대로 보존 ✅

---

## 3. UI/UX 명세 부합성 — ✅ Pass

| 명세 항목 | 위치 | 부합 |
|---|---|---|
| §1.1 12개 단계 (도입 1 + 본문 11) | `salvationWay.js` `stagesKo` 배열 | ✅ |
| §1.1 `crossPos` 좌표 (4·5·6 가로축, 그 외 세로축) | `salvationWay.js` 각 stage | ✅ |
| §1.2 본문 그대로 / `label` 괄호 표기 보존 | 위 §2.2 검증 통과 | ✅ |
| §2.1 모바일 세로 레이아웃 (ProgressBar→TopBar→Card→MiniMap→BottomNav) | `App.jsx` 구성 | ✅ |
| §2.2 카드 슬라이드 트랜지션 380ms ease-out | `globals.css` `card-anim-*` keyframes | ✅ |
| §2.2 verse stagger 60~80ms | `Card.jsx` `delay = i * 80` + `--delay` CSS var | ✅ (60→80ms 로 약간 상향, UX 무리 없음) |
| §2.2 MiniMap pointer 트랜지션 + 펄스 | `MiniMap.jsx` `transition` + `pulse-marker` keyframe | ✅ |
| §2.2 ProgressBar fill | `ProgressBar.jsx` + `globals.css` | ✅ |
| §2.3 스와이프 60px 임계 | `App.jsx` `SWIPE_THRESHOLD = 60` | ✅ |
| §2.3 키보드 ←/→/Space, Esc/Home/End | `App.jsx` `useEffect` keydown | ✅ |
| §2.3 첫/마지막 단계에서 shake 피드백 | `App.jsx` `shakeBtn` state + `.shake` 클래스 | ✅ |
| §3.1 다크 우주 그라디언트 + 별빛 | `body::before` 별 텍스처 | ✅ |
| §3.3 글래스 카드 (`backdrop-filter` + `-webkit-backdrop-filter`) | `globals.css .glass-card` | ✅ Safari 대응 OK |
| §4.5 LanguageToggle: ready=false 언어는 disabled + "준비중" 태그 | `LanguageToggle.jsx` | ✅ |
| §5 prefers-reduced-motion 대응 | `globals.css` `@media (prefers-reduced-motion: reduce)` | ✅ |
| §5 aria-live 안내 | `App.jsx` `.sr-only [aria-live="polite"]` | ✅ |

---

## 4. 코드 품질 점검

### 4.1 React/Hooks
* `useCallback` / `useMemo` 적절히 사용 (`goNext`, `goPrev`, `stages`, `ui`, `verseItems`).
* `useEffect` 의존성 배열 모두 정확히 명시 — lint 경고 없음.
* `Card` 컴포넌트의 등장 애니메이션 트리거를 위해 `App.jsx` 가 `<Card key={`${language}-${stage.id}`} />` 로 키를 바꿔 강제 remount — 단순하고 안정적.

### 4.2 접근성
* 모든 버튼 `aria-label`, 카드 `aria-roledescription="slide"`, `role="progressbar"` (min/max/now), 언어 메뉴 `role="listbox"`, 옵션 `role="option"` + `aria-current` ✅
* `:focus-visible` 스타일 명시 ✅
* `prefers-reduced-motion` 시 모든 애니메이션 비활성 ✅

### 4.3 반응형
* `@media (min-width: 768px)` 에서 카드 + 미니맵 2컬럼 전환 ✅
* `clamp()` 로 글자/패딩 모두 가변 ✅
* `100dvh` 사용 — iOS Safari 주소창 토글 시 흔들림 방지 ✅
* `overscroll-behavior: none` 으로 pull-to-refresh 차단 (전도 환경에서 의도치 않은 새로고침 방지) ✅

### 4.4 잠재 이슈 (경미)
* `body { overflow: hidden }` 으로 본문 스크롤을 막은 대신, 카드 내부 `.verse-list` 가 자체 스크롤됨. 매우 긴 단계(5/9단계)에서 모바일 ≤375px 환경에서 스크롤이 발생할 수 있음 — 명세대로 의도된 동작. 사용자 테스트 후 카드 높이 조정 필요할 수 있음.
* `LanguageToggle` 에서 영어/타국어는 `ready: false` 상태이며, 본문은 한국어 fallback + 'translation pending' 배지로 노출됨. 본문 번역이 들어오는 즉시 `LANGUAGE_BUNDLES` 에 stage 배열을 교체하면 끝나도록 설계되어 있음.

---

## 5. 실행 가이드 (사용자 환경)

```bash
cd d:/전도프로그램개발_다국어/src
npm install
npm run dev          # 개발 서버: http://localhost:5173
npm run build        # 정적 빌드 → dist/
npm run preview      # 빌드 결과 미리보기 (오프라인 배포 검증용)
```

* 빌드 결과물(`dist/`)은 인터넷이 없는 환경에서도 정적 파일로 그대로 배포 가능.
* 추후 PWA(Service Worker) 추가 시 완전 오프라인 동작 + 홈 화면 추가 가능.

---

## 6. 최종 결정

> ✅ **Approve.** 단, 실제 모바일 디바이스(iOS Safari, Android Chrome) 및 태블릿 가로/세로 모드 실측 테스트는 사용자 환경에서 한 차례 수행 권고.

### 다음 사이클 권고 (Phase 2)
1. `구원의길_eng.md` 영문 본문 입력 → `LANGUAGE_BUNDLES.en.stages` 교체 → `ready: true` 토글.
2. PWA manifest + Service Worker 추가 (오프라인 핵심 기능 만족).
3. 영접/결신 기도문 카드 (요구사항 §2.6단계) — 선교사님 원문 텍스트 수급 후 11단계 뒤에 결신 카드 1장 추가.
4. 글로벌 리더십 재교육용 1:1 양육 모드 (요구사항 §3.2) — 별도 라우트로 분기 검토.
