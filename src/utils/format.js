export function formatTemp(celsius, unit) {
  const value = unit === 'F' ? (celsius * 9) / 5 + 32 : celsius
  return `${Math.round(value)}°${unit}`
}

export function formatDay(dateString) {
  return new Date(`${dateString}T00:00`).toLocaleDateString('en-US', { weekday: 'short' })
}

export function formatFullDate(dateTimeString) {
  return new Date(dateTimeString).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })
}
