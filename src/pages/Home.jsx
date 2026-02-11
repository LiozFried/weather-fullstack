import { useSelector } from 'react-redux'

function Home() {
  const places = useSelector((state) => state.places.items)

  return (
    <main className="app-hero">
      <img
        src="/weather-logo.svg"
        className="app-hero__logo"
        alt="Weather app logo"
      />
      <h1 className="app-hero__title">Weather App</h1>
      <p className="app-hero__subtitle">Your places, your weather</p>
      <p className="app-hero__places-count">
        You have {places.length} place{places.length !== 1 ? 's' : ''} saved.
      </p>
      {places.length > 0 && (
        <ul className="app-hero__places-list">
          {places.map((place) => (
            <li key={place.id}>{place.name}</li>
          ))}
        </ul>
      )}
    </main>
  )
}

export default Home
