/**
 * MiniMap — 십자가 모양의 단계 위치 지도.
 *
 * compact=true 인 경우 상단 바에 들어가는 작은 칩 형태(라벨 없음).
 * 일반 모드는 라벨까지 포함하는 풀사이즈 카드.
 */
export default function MiniMap({
  stages,
  currentStep,
  label,
  currentLabel,
  compact = false
}) {
  const current = stages[currentStep]
  const cx = current?.crossPos?.x ?? 50
  const cy = current?.crossPos?.y ?? 50

  const svg = (
    <svg
      className="minimap-svg"
      viewBox="0 0 100 100"
      role="img"
      aria-label={label}
    >
      <line
        x1="50"
        y1="2"
        x2="50"
        y2="98"
        stroke="rgba(246, 198, 108, 0.45)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="40"
        x2="90"
        y2="40"
        stroke="rgba(246, 198, 108, 0.45)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {stages.map((s) => {
        const isActive = s.id === currentStep
        return (
          <circle
            key={s.id}
            cx={s.crossPos.x}
            cy={s.crossPos.y}
            r={isActive ? 0 : 2}
            fill={isActive ? 'transparent' : 'rgba(245, 247, 255, 0.45)'}
          />
        )
      })}

      <circle
        cx={cx}
        cy={cy}
        r="8"
        fill="rgba(246, 198, 108, 0.18)"
        style={{ transition: 'cx 420ms ease-in-out, cy 420ms ease-in-out' }}
      />

      <circle
        cx={cx}
        cy={cy}
        r="4.5"
        fill="#f6c66c"
        style={{
          transition: 'cx 420ms ease-in-out, cy 420ms ease-in-out',
          filter: 'drop-shadow(0 0 6px rgba(246, 198, 108, 0.8))',
          animation: 'pulse-marker 1800ms ease-in-out infinite'
        }}
      />
    </svg>
  )

  if (compact) {
    return (
      <div
        className="minimap minimap-compact"
        role="img"
        aria-label={`${label}: ${currentLabel}`}
        title={`${label} · ${currentLabel}`}
      >
        {svg}
      </div>
    )
  }

  return (
    <div className="minimap">
      {svg}
      <div className="minimap-label">
        {label} · <span className="minimap-current">{currentLabel}</span>
      </div>
    </div>
  )
}
