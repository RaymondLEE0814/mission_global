import { useEffect, useRef, useState } from 'react'

/**
 * FontSizeToggle — 카드 본문 글자 크기 조정 컨트롤.
 *
 * 클릭하면 -/+/리셋 드롭다운이 열린다. LanguageToggle 과 동일한 패턴.
 * scale 은 0.8 ~ 1.6 사이 (10% 단계). 부모(App.jsx)가 상태와 영속화를 관리하고
 * 이 컴포넌트는 UI 만 담당한다.
 */
const MIN_SCALE = 0.8
const MAX_SCALE = 1.6
const STEP = 0.1

const round = (v) => Math.round(v * 10) / 10

export default function FontSizeToggle({ scale, onChange, label, smallerLabel, largerLabel, resetLabel }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    const escHandler = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('mousedown', handler)
    window.addEventListener('keydown', escHandler)
    return () => {
      window.removeEventListener('mousedown', handler)
      window.removeEventListener('keydown', escHandler)
    }
  }, [open])

  const decrease = () => onChange(Math.max(MIN_SCALE, round(scale - STEP)))
  const increase = () => onChange(Math.min(MAX_SCALE, round(scale + STEP)))
  const reset = () => onChange(1)

  const atMin = scale <= MIN_SCALE + 0.001
  const atMax = scale >= MAX_SCALE - 0.001
  const isDefault = Math.abs(scale - 1) < 0.001
  const percent = Math.round(scale * 100)

  return (
    <div className="font-wrap" ref={wrapRef}>
      <button
        type="button"
        className="font-btn"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={`${label} · ${percent}%`}
        title={`${label} · ${percent}%`}
      >
        <span className="font-btn-icon" aria-hidden="true">Aa</span>
      </button>
      {open && (
        <div className="font-menu" role="dialog" aria-label={label}>
          <button
            type="button"
            className="font-step-btn"
            onClick={decrease}
            disabled={atMin}
            aria-label={smallerLabel}
            title={smallerLabel}
          >
            A−
          </button>
          <div className="font-percent" aria-live="polite">{percent}%</div>
          <button
            type="button"
            className="font-step-btn"
            onClick={increase}
            disabled={atMax}
            aria-label={largerLabel}
            title={largerLabel}
          >
            A+
          </button>
          <button
            type="button"
            className="font-reset-btn"
            onClick={reset}
            disabled={isDefault}
            aria-label={resetLabel}
          >
            {resetLabel}
          </button>
        </div>
      )}
    </div>
  )
}
