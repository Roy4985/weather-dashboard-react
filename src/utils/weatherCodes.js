const CODES = {
  0: { label: 'Clear sky', day: '☀️', night: '🌙' },
  1: { label: 'Mainly clear', day: '🌤️', night: '🌙' },
  2: { label: 'Partly cloudy', day: '⛅', night: '☁️' },
  3: { label: 'Overcast', day: '☁️', night: '☁️' },
  45: { label: 'Fog', day: '🌫️', night: '🌫️' },
  48: { label: 'Rime fog', day: '🌫️', night: '🌫️' },
  51: { label: 'Light drizzle', day: '🌦️', night: '🌧️' },
  53: { label: 'Drizzle', day: '🌦️', night: '🌧️' },
  55: { label: 'Heavy drizzle', day: '🌧️', night: '🌧️' },
  56: { label: 'Freezing drizzle', day: '🌧️', night: '🌧️' },
  57: { label: 'Freezing drizzle', day: '🌧️', night: '🌧️' },
  61: { label: 'Light rain', day: '🌦️', night: '🌧️' },
  63: { label: 'Rain', day: '🌧️', night: '🌧️' },
  65: { label: 'Heavy rain', day: '🌧️', night: '🌧️' },
  66: { label: 'Freezing rain', day: '🌧️', night: '🌧️' },
  67: { label: 'Freezing rain', day: '🌧️', night: '🌧️' },
  71: { label: 'Light snow', day: '🌨️', night: '🌨️' },
  73: { label: 'Snow', day: '🌨️', night: '🌨️' },
  75: { label: 'Heavy snow', day: '❄️', night: '❄️' },
  77: { label: 'Snow grains', day: '🌨️', night: '🌨️' },
  80: { label: 'Rain showers', day: '🌦️', night: '🌧️' },
  81: { label: 'Rain showers', day: '🌧️', night: '🌧️' },
  82: { label: 'Violent showers', day: '⛈️', night: '⛈️' },
  85: { label: 'Snow showers', day: '🌨️', night: '🌨️' },
  86: { label: 'Snow showers', day: '❄️', night: '❄️' },
  95: { label: 'Thunderstorm', day: '⛈️', night: '⛈️' },
  96: { label: 'Thunderstorm with hail', day: '⛈️', night: '⛈️' },
  99: { label: 'Thunderstorm with hail', day: '⛈️', night: '⛈️' },
}

export function describeWeather(code, isDay = true) {
  const entry = CODES[code] || { label: 'Unknown', day: '❔', night: '❔' }
  return { label: entry.label, icon: isDay ? entry.day : entry.night }
}
