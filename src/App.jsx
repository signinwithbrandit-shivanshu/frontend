import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Collection from './pages/Collection.jsx'
import CollectionCategory from './pages/CollectionCategory.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Search from './pages/Search.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/:slug/:group" element={<CollectionCategory />} />
        <Route path="/collection/:slug" element={<CollectionCategory />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
