import { useState } from 'react'

function SearchBar({ onSearch, disabled }) {
  const [query, setQuery] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmed = query.trim()
    if (!trimmed) return
    onSearch(trimmed)
    setQuery('')
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search for a city..."
        aria-label="City name"
      />
      <button type="submit" disabled={disabled || !query.trim()}>
        Search
      </button>
    </form>
  )
}

export default SearchBar
