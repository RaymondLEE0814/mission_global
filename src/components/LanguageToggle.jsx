import { useEffect, useRef, useState } from 'react'
import { SUPPORTED_LANGUAGES } from '../data/salvationWay.js'

/**
 * LanguageToggle — 현재 활성 언어를 표시하고 드롭다운으로 전환합니다.
 *
 * 본문 번역이 준비되지 않은 언어(ready=false)는 disabled 상태로 노출되고
 * "준비중" 태그를 함께 표시합니다.
 */
export default function LanguageToggle({ current, onChange, label, pendingLabel }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false)
      }
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

  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.code === current) ?? SUPPORTED_LANGUAGES[0]

  return (
    <div className="lang-wrap" ref={wrapRef}>
      <button
        type="button"
        className="lang-btn"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
      >
        <span aria-hidden="true">🌐</span>
        <span>{currentLang.native}</span>
      </button>
      {open && (
        <ul className="lang-menu" role="listbox" aria-label={label}>
          {SUPPORTED_LANGUAGES.map((lang) => {
            const disabled = !lang.ready
            const selected = lang.code === current
            return (
              <li key={lang.code}>
                <button
                  type="button"
                  role="option"
                  className="lang-option"
                  aria-current={selected}
                  disabled={disabled}
                  onClick={() => {
                    if (disabled) return
                    onChange(lang.code)
                    setOpen(false)
                  }}
                >
                  <span>{lang.label}</span>
                  {disabled ? (
                    <span className="lang-option-tag">{pendingLabel}</span>
                  ) : (
                    <span className="lang-option-tag">{lang.native}</span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
