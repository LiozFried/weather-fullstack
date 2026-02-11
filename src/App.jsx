import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <div className="app-layout">
      <header className="app-layout__header">
        <nav className="app-layout__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `app-layout__nav-link${isActive ? ' active' : ''}`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `app-layout__nav-link${isActive ? ' active' : ''}`
            }
          >
            About
          </NavLink>
        </nav>
      </header>
      <div className="app-layout__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
