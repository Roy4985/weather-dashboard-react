import { describeWeather } from '../utils/weatherCodes.js'
import { formatDay, formatTemp } from '../utils/format.js'

function ForecastDay({ day, unit }) {
  const { label, icon } = describeWeather(day.code)

  return (
    <article className="forecast-day">
      <p className="forecast-name">{formatDay(day.date)}</p>
      <span className="forecast-icon" title={label} aria-label={label}>{icon}</span>
      <p className="forecast-temps">
        <strong>{formatTemp(day.max, unit)}</strong>
        <span className="muted">{formatTemp(day.min, unit)}</span>
      </p>
    </article>
  )
}

export default ForecastDay
