import ForecastDay from './ForecastDay.jsx'

function ForecastList({ days, unit }) {
  return (
    <section className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {days.map((day) => (
          <ForecastDay key={day.date} day={day} unit={unit} />
        ))}
      </div>
    </section>
  )
}

export default ForecastList
