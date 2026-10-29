function UnitToggle({ unit, onChange }) {
  return (
    <div className="unit-toggle" role="group" aria-label="Temperature unit">
      {['C', 'F'].map((option) => (
        <button
          key={option}
          type="button"
          className={unit === option ? 'active' : ''}
          onClick={() => onChange(option)}
          aria-pressed={unit === option}
        >
          °{option}
        </button>
      ))}
    </div>
  )
}

export default UnitToggle
