import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import UnitToggle from './components/UnitToggle.jsx'
import WeatherCard from './components/WeatherCard.jsx'
import ForecastList from './components/ForecastList.jsx'
import LoadingSpinner from './components/LoadingSpinner.jsx'
import ErrorMessage from './components/ErrorMessage.jsx'
import { fetchWeather } from './utils/weatherApi.js'

function App() {
  const [city, setCity] = useState('Beirut')
  const [unit, setUnit] = useState('C')
  const [weather, setWeather] = useState(null)
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    setStatus('loading')
    setError('')

    fetchWeather(city, controller.signal)
      .then((data) => {
        setWeather(data)
        setStatus('success')
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        const message =
          err instanceof TypeError ? 'Network error. Check your connection and try again.' : err.message
        setError(message)
        setStatus('error')
      })

    return () => controller.abort()
  }, [city, reloadKey])

  function handleSearch(newCity) {
    if (newCity.toLowerCase() === city.toLowerCase()) {
      setReloadKey((key) => key + 1)
    } else {
      setCity(newCity)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Weather Dashboard</h1>
        <UnitToggle unit={unit} onChange={setUnit} />
      </header>

      <SearchBar onSearch={handleSearch} disabled={status === 'loading'} />

      <main className="content">
        {status === 'loading' && <LoadingSpinner />}
        {status === 'error' && (
          <ErrorMessage message={error} onRetry={() => setReloadKey((key) => key + 1)} />
        )}
        {status === 'success' && weather && (
          <>
            <WeatherCard location={weather.location} current={weather.current} unit={unit} />
            <ForecastList days={weather.daily} unit={unit} />
          </>
        )}
      </main>

      <footer className="app-footer">
        Data from <a href="https://open-meteo.com/" target="_blank" rel="noreferrer">Open-Meteo</a>
      </footer>
    </div>
  )
}

export default App
