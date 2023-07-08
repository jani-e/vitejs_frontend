import { Link, Route, Routes } from 'react-router-dom'
import 'src/App.css'
import NavLinks from 'src/components/NavLinks'
import Home from 'src/pages/Home'
import Games from 'src/pages/Games'
import Solitaire from 'src/pages/games/Solitaire'
import TBA from 'src/pages/games/TBA'



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
