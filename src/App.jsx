import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Card from './components/Card.jsx'
import MiniMap from './components/MiniMap.jsx'
import ProgressBar from './components/ProgressBar.jsx'
import LanguageToggle from './components/LanguageToggle.jsx'
import FontSizeToggle from './components/FontSizeToggle.jsx'
import {
  getStages,
  getUIText,
  isLanguageReady,
  TOTAL_STAGES
} from './data/salvationWay.js'

const SWIPE_THRESHOLD = 60
const TEXT_SCALE_KEY = 'salvation-way-text-scale'

function readSavedTextScale() {
  if (typeof window === 'undefined') return 1
  const raw = parseFloat(window.localStorage.getItem(TEXT_SCALE_KEY))
  if (!Number.isFinite(raw)) return 1
  return Math.min(1.6, Math.max(0.8, raw))
}

export default function App() {
  const [language, setLanguage] = useState('ko')
  const [currentStep, setCurrentStep] = useState(0)
  const [revealedCount, setRevealedCount] = useState(1)
  const [direction, setDirection] = useState('forward')
  const [shakeBtn, setShakeBtn] = useState(null)
  const [textScale, setTextScale] = useState(readSavedTextScale)

  useEffect(() => {
    document.documentElement.style.setProperty('--text-scale', String(textScale))
    try {
      window.localStorage.setItem(TEXT_SCALE_KEY, String(textScale))
    } catch {
      // ignore storage errors (private mode / disabled storage)
    }
  }, [textScale])

  const stages = useMemo(() => getStages(language), [language])
  const ui = useMemo(() => getUIText(language), [language])
  const stage = stages[currentStep]
  const translationPending = !isLanguageReady(language)

  const totalVerses = useMemo(
    () => stages.reduce((sum, s) => sum + s.verses.length, 0),
    [stages]
  )
  const versesBeforeCurrent = useMemo(
    () => stages.slice(0, currentStep).reduce((sum, s) => sum + s.verses.length, 0),
    [stages, currentStep]
  )
  const currentVerseIndex = versesBeforeCurrent + revealedCount

  const goNext = useCallback(() => {
    if (revealedCount < stage.verses.length) {
      setRevealedCount(revealedCount + 1)
      return
    }
    if (currentStep >= TOTAL_STAGES - 1) {
      setShakeBtn('next')
      return
    }
    setDirection('forward')
    setCurrentStep(currentStep + 1)
    setRevealedCount(1)
  }, [revealedCount, stage.verses.length, currentStep])

  const goPrev = useCallback(() => {
    if (revealedCount > 1) {
      setRevealedCount(revealedCount - 1)
      return
    }
    if (currentStep <= 0) {
      setShakeBtn('prev')
      return
    }
    setDirection('back')
    const prevIndex = currentStep - 1
    setCurrentStep(prevIndex)
    setRevealedCount(stages[prevIndex].verses.length)
  }, [revealedCount, currentStep, stages])

  useEffect(() => {
    setRevealedCount(1)
  }, [language])

  useEffect(() => {
    if (!shakeBtn) return
    const t = setTimeout(() => setShakeBtn(null), 360)
    return () => clearTimeout(t)
  }, [shakeBtn])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      } else if (e.key === 'Home') {
        setDirection('back')
        setCurrentStep(0)
        setRevealedCount(1)
      } else if (e.key === 'End') {
        setDirection('forward')
        const last = TOTAL_STAGES - 1
        setCurrentStep(last)
        setRevealedCount(stages[last].verses.length)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev, stages])

  const touchStartX = useRef(null)
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current
    const dx = endX - touchStartX.current
    if (Math.abs(dx) >= SWIPE_THRESHOLD) {
      if (dx < 0) goNext()
      else goPrev()
    }
    touchStartX.current = null
  }

  return (
    <main
      className="app-shell"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <ProgressBar value={currentVerseIndex} max={totalVerses} />

      <header className="top-bar">
        <div className="brand">
          <strong className="brand-title">✝ {ui.appTitle}</strong>
          <span className="brand-subtitle">{ui.appSubtitle}</span>
        </div>
        <div className="top-bar-right">
          <FontSizeToggle
            scale={textScale}
            onChange={setTextScale}
            label={ui.fontSizeLabel}
            smallerLabel={ui.fontSmaller}
            largerLabel={ui.fontLarger}
            resetLabel={ui.fontReset}
          />
          <LanguageToggle
            current={language}
            onChange={setLanguage}
            label={ui.languageLabel}
            pendingLabel={ui.translationPending}
          />
          <span className="step-counter" aria-live="polite">
            {ui.stepOf(currentStep, TOTAL_STAGES - 1)} · {revealedCount}/{stage.verses.length}
          </span>
          <MiniMap
            stages={stages}
            currentStep={currentStep}
            label={ui.miniMapLabel}
            currentLabel={ui.miniMapCurrent(currentStep)}
            compact
          />
        </div>
      </header>

      <div className="stage-area">
        <Card
          key={`${language}-${stage.id}`}
          stage={stage}
          totalStages={TOTAL_STAGES}
          revealedCount={revealedCount}
          direction={direction}
          translationPending={translationPending}
          pendingLabel={ui.translationPending}
          stageLabel={ui.stageLabel}
        />
      </div>

      <nav className="bottom-nav" aria-label="navigation">
        <button
          type="button"
          className={`nav-btn ${shakeBtn === 'prev' ? 'shake' : ''}`}
          onClick={goPrev}
          disabled={currentStep === 0 && revealedCount === 1}
          aria-label={ui.prev}
        >
          ◀ {ui.prev}
        </button>
        <button
          type="button"
          className={`nav-btn ${shakeBtn === 'next' ? 'shake' : ''}`}
          onClick={goNext}
          disabled={
            currentStep === TOTAL_STAGES - 1 &&
            revealedCount === stage.verses.length
          }
          aria-label={ui.next}
        >
          {ui.next} ▶
        </button>
      </nav>

      <span className="sr-only" aria-live="polite">
        {ui.stepOf(currentStep, TOTAL_STAGES - 1)} — {stage.title} —{' '}
        {revealedCount}/{stage.verses.length}
      </span>
    </main>
  )
}
