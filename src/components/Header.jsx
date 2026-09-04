import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { categories, productsBySlug } from '../data/catalog.js'

export default function Header() {
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const dropRef = useRef(null)
  const headerRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()
  const collectionActive = location.pathname.startsWith('/collection')

  useEffect(() => {
    if (location.pathname === '/search') {
      setQuery(new URLSearchParams(location.search).get('q') ?? '')
    } else {
      setQuery('')
    }
  }, [location.pathname, location.search])

  useEffect(() => {
    setDropOpen(false)
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    function syncHeight() {
      document.documentElement.style.setProperty('--header-h', `${header.offsetHeight}px`)
    }

    syncHeight()
    const observer = new ResizeObserver(syncHeight)
    observer.observe(header)
    window.addEventListener('resize', syncHeight)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', syncHeight)
    }
  }, [menuOpen])

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen)
    return () => document.body.classList.remove('nav-open')
  }, [menuOpen])

  useEffect(() => {
    function onPointerDown(event) {
      if (dropRef.current && !dropRef.current.contains(event.target)) {
        setDropOpen(false)
      }
      if (
        menuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }

    function onKey(event) {
      if (event.key === 'Escape') {
        setDropOpen(false)
        setMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  function onSearch(event) {
    event.preventDefault()
    const q = query.trim()
    if (!q) return
    navigate(`/search?q=${encodeURIComponent(q)}`)
    setMenuOpen(false)
    setDropOpen(false)
  }

  function closeMenus() {
    setMenuOpen(false)
    setDropOpen(false)
  }

  return (
    <header className="header" ref={headerRef}>
      <div className="wrap header-inner">
        <NavLink to="/" className="logo" onClick={closeMenus}>
          <img src="/logo.png" alt="Brandit." />
        </NavLink>

        <button
          className="menu-btn"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          Menu
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" className="nav-link" end onClick={closeMenus}>
            Home
          </NavLink>

          <div className={`nav-drop ${dropOpen ? 'open' : ''}`} ref={dropRef}>
            <button
              type="button"
              className={collectionActive ? 'active' : ''}
              onClick={() => setDropOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={dropOpen}
            >
              Collection ▾
            </button>
            <div className="mega">
              <NavLink className="mega-all" to="/collection" onClick={closeMenus}>
                View all
              </NavLink>
              {categories.map((category) => (
                <div className="mega-col" key={category.id}>
                  <NavLink
                    className="mega-heading"
                    to={`/collection/${category.slug}`}
                    onClick={closeMenus}
                  >
                    {category.name}
                  </NavLink>
                  {productsBySlug(category.slug).map((item) => (
                    <NavLink
                      key={item.id}
                      to={`/collection/${category.slug}`}
                      onClick={closeMenus}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <NavLink to="/contact" className="nav-link" onClick={closeMenus}>
            Contact
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMenus}>
            About
          </NavLink>
        </nav>
      </div>

      <div className="search-bar">
        <div className="wrap">
          <form onSubmit={onSearch} role="search">
            <label className="sr-only" htmlFor="site-search">
              Search catalogue
            </label>
            <input
              id="site-search"
              type="search"
              autoComplete="off"
              placeholder="Search by name or product ID"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </header>
  )
}
