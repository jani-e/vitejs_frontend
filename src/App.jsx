import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Games from './pages/Games'
import Solitaire from './pages/games/solitaire/Solitaire'
import TBA from './pages/games/TBA/TBA'

const NavLinks = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/games'>Games</Link></li>
      </ul>
    </nav>
  )
}

const App = () => {
  return (
    <>
      <Link to='/'>
        <h1>Jani-e&apos;s website</h1>
      </Link>
      <NavLinks></NavLinks>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/games' element={<Games />} />
        <Route path='/games/solitaire' element={<Solitaire />} />
        <Route path='/games/tba' element={<TBA />} />
      </Routes>
    </>
  )
}

export default App
