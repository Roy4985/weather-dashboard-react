# Weather Dashboard (React)

A React version of my Weather Dashboard. Search for any city to see the current weather and a 5-day forecast. Built with Vite, using functional components and hooks only.

Weather data comes from the free [Open-Meteo](https://open-meteo.com/) API, so no API key is needed.

## Getting started

Requirements: [Node.js](https://nodejs.org/) 20.19 or newer (the current LTS version works).

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Features

- Search any city by name
- Current temperature, feels-like, humidity and wind
- 5-day forecast
- Switch between °C and °F
- Loading, error (with retry) and success states
- Responsive layout and dark mode support

## Project structure

```
src/
  App.jsx               main component, holds state and fetches data
  components/
    SearchBar.jsx       search form
    UnitToggle.jsx      °C / °F switch
    WeatherCard.jsx     current weather
    ForecastList.jsx    5-day forecast container
    ForecastDay.jsx     a single forecast day
    LoadingSpinner.jsx  loading state
    ErrorMessage.jsx    error state with retry button
  utils/
    weatherApi.js       API requests
    weatherCodes.js     weather code to label/icon mapping
    format.js           temperature and date formatting
```

## State management

- `App` holds the shared state with `useState`: the selected city, the temperature unit, the fetched weather data, the request status and the error message.
- `SearchBar` keeps its own input text in local state, since no other component needs it. It only tells `App` the city when the form is submitted.
- A `useEffect` in `App` fetches the weather whenever `city` changes (or when the user retries). It uses an `AbortController` so an old request is cancelled if a new search starts before it finishes.

State is lifted to `App` because both the current weather card and the forecast need the same data and unit. The deepest prop path is `App → ForecastList → ForecastDay` (two levels), so no context or state library was needed.
