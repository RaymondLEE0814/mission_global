import { useEffect, useMemo, useRef } from 'react'

/**
 * Card — 한 단계의 콘텐츠를 담는 글래스모피즘 카드.
 *
 * 절은 한 번에 모두 보이지 않고, App 의 revealedCount 만큼만 누적 노출됩니다.
 * 새 절이 등장할 때마다 verse-list 컨테이너의 스크롤이 자동으로 하단으로 이동해
 * 사용자가 직접 스크롤하지 않아도 새 구절이 시야에 들어오게 합니다.
 *
 * 부드러운 등장 애니메이션을 위해 stage.id 가 바뀔 때마다 React 가
 * 새 노드로 인식하도록 key 를 부모에서 stage.id 로 지정합니다.
 */
export default function Card({
  stage,
  totalStages,
  direction,
  revealedCount,
  translationPending,
  pendingLabel,
  stageLabel
}) {
  const animClass = direction === 'back' ? 'card-anim-enter-back' : 'card-anim-enter-forward'
  const listRef = useRef(null)

  const verseItems = useMemo(
    () =>
      stage.verses.slice(0, revealedCount).map((v, i) => ({
        ...v,
        delay: i * 80
      })),
    [stage.verses, revealedCount]
  )

  // 새 절이 등장할 때마다 그 절의 '상단'이 시야 최상단에 오도록 스크롤.
  // (긴 구절도 처음 줄부터 보이도록 하기 위해 'end' 가 아닌 'start' 정렬)
  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const last = list.lastElementChild
    if (!last) return
    last.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [revealedCount])

  return (
    <section
      className={`glass-card ${animClass}`}
      role="group"
      aria-roledescription="slide"
      aria-label={`${stageLabel ? stageLabel(stage.id) : stage.id}: ${stage.title}`}
    >
      <span className="card-badge">{stage.id} / {totalStages - 1}</span>

      <h2 className="card-title">
        {stage.title}
        {translationPending && (
          <span className="translation-pending" aria-label={pendingLabel}>
            {pendingLabel}
          </span>
        )}
      </h2>
      {stage.subtitle && <p className="card-subtitle">{stage.subtitle}</p>}

      <div className="verse-progress" aria-hidden="true">
        {stage.verses.map((_, i) => (
          <span
            key={i}
            className={`verse-dot ${i < revealedCount ? 'is-on' : ''}`}
          />
        ))}
        <span className="verse-progress-text">
          {revealedCount} / {stage.verses.length}
        </span>
      </div>

      <div className="card-divider" aria-hidden="true" />

      <ul className="verse-list" ref={listRef}>
        {verseItems.map((verse, i) => (
          <li
            key={`${stage.id}-${i}`}
            className="verse-item"
            style={{ '--delay': `${verse.delay}ms` }}
          >
            <div className="verse-head">
              <span className="verse-ref">{verse.reference}</span>
              {verse.label && <span className="verse-label">{verse.label}</span>}
            </div>
            <p className="verse-text">{verse.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
