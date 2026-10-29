const GEO_URL = 'https://geocoding-api.open-meteo.com/v1/search'
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast'

export async function fetchWeather(city, signal) {
  const geoRes = await fetch(
    `${GEO_URL}?name=${encodeURIComponent(city)}&count=1&language=en&format=json`,
    { signal }
  )
  if (!geoRes.ok) throw new Error('Could not reach the location service.')

  const geoData = await geoRes.json()
  if (!geoData.results || geoData.results.length === 0) {
    throw new Error(`No city found for "${city}".`)
  }

  const place = geoData.results[0]
  const params = new URLSearchParams({
    latitude: place.latitude,
    longitude: place.longitude,
    current: 'temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,is_day',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min',
    timezone: 'auto',
    forecast_days: '6',
  })

  const weatherRes = await fetch(`${FORECAST_URL}?${params}`, { signal })
  if (!weatherRes.ok) throw new Error('Could not load weather data.')

  const weather = await weatherRes.json()

  return {
    location: {
      name: place.name,
      region: place.admin1 || '',
      country: place.country || '',
    },
    current: {
      temperature: weather.current.temperature_2m,
      feelsLike: weather.current.apparent_temperature,
      humidity: weather.current.relative_humidity_2m,
      wind: weather.current.wind_speed_10m,
      code: weather.current.weather_code,
      isDay: weather.current.is_day === 1,
      time: weather.current.time,
    },
    daily: weather.daily.time.slice(1).map((date, i) => ({
      date,
      code: weather.daily.weather_code[i + 1],
      max: weather.daily.temperature_2m_max[i + 1],
      min: weather.daily.temperature_2m_min[i + 1],
    })),
  }
}
