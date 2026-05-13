# UI/UX 명세서 — 구원의 길 (3분 전도 웹 앱)

> **Planner Agent 산출물.** Coder Agent가 추가 질문 없이 즉시 구현할 수 있도록, 데이터 구조 / 화면 흐름 / 디자인 토큰 / 컴포넌트 명세를 한 문서에 모았습니다.
> 원본 콘텐츠 출처: `resource/구원의길.md`. 본 명세는 본문(성경 구절·해설)을 **축약하지 않고 100% 그대로** 전달합니다.

---

## 1. 데이터 구조 (JSON / JS Object)

`src/data/salvationWay.js` 에 다음 형태로 export합니다. 각 단계(stage)는 카드 1장에 매핑됩니다. 다국어 확장을 위해 최상위 키를 언어 코드(`ko`, `en`, `id`, `tl`, `km`)로 두고 동일한 schema를 공유합니다.

```js
// schema (TypeScript-스러운 JSDoc)
/**
 * @typedef {Object} Verse
 * @property {string} reference   // 예: "창 1:1"
 * @property {string} label       // 예: "형상", "사탄", "구원자"  (없으면 "")
 * @property {string} text        // 성경 본문 전문 (절 번호 포함)
 */

/**
 * @typedef {Object} Stage
 * @property {number} id          // 1 ~ 11 (도입은 0)
 * @property {string} title       // 예: "원래 인간", "근본 문제"
 * @property {string} subtitle    // 한 줄 설명 (선교사님 요구사항 기반)
 * @property {Verse[]} verses     // 해당 단계의 성경 구절들
 * @property {{ x:number, y:number }} crossPos  // 미니맵 십자가 위치 (0~100)
 */
```

### 1.1 단계 구성 (총 12장: 도입 1 + 본문 11)

| id | title | crossPos | 핵심 메시지 |
|---:|---|---|---|
| 0  | 시작 — 하나님과 인간 | (50, 0) | 창조주 하나님과 사람의 시작 |
| 1  | 원래 인간 | (50, 8) | 형상·복·언약 |
| 2  | 근본 문제 | (50, 20) | 사탄·죄·떠남 |
| 3  | 불신자의 상태 | (50, 30) | 마귀자녀·영적·정신·육신·내세·후대 문제 |
| 4  | 인간의 방법 | (18, 40) | 종교·선행·철학으로는 안 됨 |
| 5  | 하나님의 방법 | (50, 40) | 예수 그리스도 — 십자가의 정중앙 |
| 6  | 그리스도 | (82, 40) | 참 왕·참 제사장·참 선지자 |
| 7  | 근본 문제 해결 | (50, 52) | 마귀의 일을 멸하심 → 길·진리·생명 |
| 8  | 어떻게 구원 | (50, 64) | 영접·시인·문 열기·지금 |
| 9  | 구원받은 자의 축복 | (50, 76) | 7가지 축복 |
| 10 | 지상명령 | (50, 88) | 마28·막16·행1:8 |
| 11 | 성도의 확신 5가지 | (50, 96) | 구원·인도·기도응답·사죄·승리 |

> `crossPos`는 미니맵 SVG 좌표(0~100). 중앙(50)을 따라 내려가다가 4·5·6번에서 십자가 가로축을 형성합니다.

### 1.2 verses 데이터 충실도 규칙
* `구원의길.md` 본문을 **글자·줄바꿈·절 번호까지 그대로** 옮길 것. 의역·축약 금지.
* `label` 은 원본의 괄호 표기(예: `(형상)`, `(사탄)`)를 그대로 사용.
* 영어/타국어 본문이 비어 있을 경우(`구원의길_eng.md`가 비어 있음), 해당 언어 카드는 한국어 본문을 fallback으로 표시하되 상단에 `translation pending` 배지를 노출.

---

## 2. 화면 흐름 & 마이크로 애니메이션

### 2.1 레이아웃 (모바일 세로 기준)
```
┌──────────────────────────────┐
│  ProgressBar (상단 4px)       │  ← 1~11 진행도
│  [LanguageToggle]   [n/11]   │  ← 우상단 언어 / 단계 카운터
│                              │
│        ┌────────────┐        │
│        │            │        │
│        │   Card     │        │  ← 글래스모피즘 카드 (가운데)
│        │            │        │
│        └────────────┘        │
│                              │
│        ┌──────────┐          │
│        │  MiniMap │          │  ← 십자가 미니맵
│        └──────────┘          │
│                              │
│   [<  이전]      [다음  >]    │  ← 하단 네비 버튼
└──────────────────────────────┘
```
태블릿(≥768px)은 카드와 미니맵을 좌우 2컬럼으로 분리합니다.

### 2.2 트랜지션 명세
* **카드 전환:** `translateX + opacity` — 진입 카드는 `translateX(40px) → 0`, 퇴장 카드는 `0 → translateX(-40px)`. duration `380ms`, easing `cubic-bezier(.22,.61,.36,1)`.
* **본문 등장:** Verse 별로 `60ms` stagger fade-in (`opacity 0→1`, `translateY 8px→0`).
* **MiniMap 포인터:** 단계 변경 시 `cx/cy`가 `420ms` ease-in-out 으로 이동, 동시에 `r`이 `4 → 8 → 5`로 펄스(spring 느낌).
* **ProgressBar fill:** `width` 트랜지션 `300ms ease-out`.
* **버튼 hover/active:** `transform: scale(0.96)` 100ms.

### 2.3 입력 방식
* **스와이프(터치):** 좌우 60px 이상 드래그 시 ±1 단계.
* **버튼:** 하단 [이전 / 다음] 버튼.
* **키보드:** `←` `→` `Space` `Esc`(첫 화면).
* 첫 단계에서 이전, 마지막 단계에서 다음은 비활성화 + 가벼운 shake 피드백.

---

## 3. 디자인 시스템

### 3.1 색상 토큰 (다크 우주 테마)
```css
--bg-deep:        #05060f;
--bg-mid:         #0c1030;
--bg-accent:      #1a1654;
--gradient-bg:    radial-gradient(120% 80% at 30% 10%, #1a1654 0%, #0c1030 45%, #05060f 100%);

--glass-bg:       rgba(255, 255, 255, 0.08);
--glass-border:   rgba(255, 255, 255, 0.18);
--glass-shadow:   0 12px 40px rgba(0, 0, 0, 0.45);

--text-primary:   #f5f7ff;
--text-secondary: rgba(245, 247, 255, 0.72);
--text-muted:     rgba(245, 247, 255, 0.48);

--accent-gold:    #f6c66c;   /* 강조 (현재 단계, 십자가 포인터) */
--accent-cyan:    #7dd3fc;   /* 보조 (라벨 배지) */
--danger:         #ff7a90;
```

### 3.2 타이포그래피
* 폰트: `"Noto Sans KR", "Inter", system-ui, sans-serif` — Google Fonts CDN 사용.
* 크기 스케일: `clamp(...)` 로 반응형.
  * 단계 제목: `clamp(22px, 4.5vw, 32px)`, weight 700.
  * 성경 reference: `clamp(13px, 2.6vw, 15px)`, weight 600, gold.
  * 본문: `clamp(15px, 3.4vw, 18px)`, weight 400, line-height 1.65.
* 한글 본문은 `word-break: keep-all` 로 어절 보호.

### 3.3 글래스모피즘 카드
```css
.glass-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  box-shadow: var(--glass-shadow), inset 0 1px 0 rgba(255,255,255,0.12);
}
```
Safari 대응을 위해 `-webkit-backdrop-filter` 반드시 동반 작성.

---

## 4. 컴포넌트 명세

### 4.1 `<App />`
* 상태: `currentStep` (0~11), `language` (`ko` 등), `direction` (`forward`/`back`, 트랜지션용).
* 핸들러: `goNext()`, `goPrev()`, `goTo(n)`, `setLanguage(code)`.
* 스와이프 감지: `onTouchStart` / `onTouchEnd` deltaX 비교.
* 키보드 이벤트: `useEffect` 로 `window` 등록.

### 4.2 `<Card stage language direction />`
* props 로 `Stage` 객체 받음.
* 내부에서 `verses.map` 으로 verse 1개당 `<article>` 렌더 — `--delay` CSS 변수로 stagger.
* 모서리에 단계 번호 배지(`{id}/11`).

### 4.3 `<MiniMap currentStep />`
* SVG 200×200 viewBox `0 0 100 100`.
* 십자가: 세로 `(50,0)~(50,100)`, 가로 `(10,40)~(90,40)`, stroke gold 1.2.
* 11개 단계 점을 흐릿하게(opacity .35) 그려두고, `currentStep`에 해당하는 점만 풀 opacity + glow + pulse.
* 포인터는 별도 `<circle>` 로 `cx/cy` 트랜지션.

### 4.4 `<ProgressBar value max />`
* 상단 고정 4px 바. `width: ${value/max*100}%` 에 `transition: width 300ms ease-out`.
* 그라데이션 fill (`linear-gradient(90deg, gold, cyan)`).

### 4.5 `<LanguageToggle current onChange />`
* 현재는 `KO`만 fully populated, 나머지는 disabled+coming soon 라벨.
* 클릭 시 드롭다운 → 언어 선택 → `onChange(code)`.

---

## 5. 반응형 / 접근성 / 오프라인

* **반응형 분기점:** `≥768px` 태블릿 2컬럼, `≥1280px` 데스크톱 패딩 확장.
* **접근성:** 모든 인터랙션은 키보드/포커스 가능, 단계 변경 시 `aria-live="polite"` 영역에 `n단계 / 11단계` 안내, prefers-reduced-motion 시 트랜지션 비활성.
* **오프라인:** 정적 빌드(`npm run build`) 결과물을 그대로 배포 가능. 추후 Service Worker / PWA 매니페스트 추가 예정 (이번 단계 범위 외).

---

## 6. Coder에게 전달하는 작업 순서

1. `src/` 루트에 Vite + React 프로젝트 셋업 (`package.json`, `index.html`, `vite.config.js`).
2. `src/styles/globals.css` 에 §3 디자인 토큰·글래스 클래스·애니메이션 keyframes 정의.
3. `src/data/salvationWay.js` 에 §1 schema 그대로 12개 stage 입력 (한국어 본문 100% 이식).
4. 컴포넌트 4종 + `App.jsx` 구현 — 상태/스와이프/키보드/트랜지션 §2.2 사양 적용.
5. `npm run dev` 로 무경고 실행 확인 → Reviewer Agent에 인계.
