import { describeWeather } from '../utils/weatherCodes.js'
import { formatFullDate, formatTemp } from '../utils/format.js'

function WeatherCard({ location, current, unit }) {
  const { label, icon } = describeWeather(current.code, current.isDay)
  const place = [location.region, location.country].filter(Boolean).join(', ')

  return (
    <section className="weather-card">
      <div className="weather-card-top">
        <div>
          <h2>{location.name}</h2>
          {place && <p className="muted">{place}</p>}
          <p className="muted">{formatFullDate(current.time)}</p>
        </div>
        <span className="weather-icon" aria-hidden="true">{icon}</span>
      </div>

      <div className="weather-main">
        <span className="temperature">{formatTemp(current.temperature, unit)}</span>
        <span className="condition">{label}</span>
      </div>

      <ul className="weather-stats">
        <li>
          <span className="muted">Feels like</span>
          <strong>{formatTemp(current.feelsLike, unit)}</strong>
        </li>
        <li>
          <span className="muted">Humidity</span>
          <strong>{current.humidity}%</strong>
        </li>
        <li>
          <span className="muted">Wind</span>
          <strong>{Math.round(current.wind)} km/h</strong>
        </li>
      </ul>
    </section>
  )
}

export default WeatherCard
