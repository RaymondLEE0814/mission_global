/**
 * ProgressBar — 0~max 사이의 진행도를 부드럽게 채워 보여줍니다.
 */
export default function ProgressBar({ value, max }) {
  const safeMax = Math.max(max, 1)
  const ratio = Math.min(Math.max(value / safeMax, 0), 1)
  return (
    <div
      className="progress-track"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-valuenow={value}
    >
      <div className="progress-fill" style={{ width: `${ratio * 100}%` }} />
    </div>
  )
}
