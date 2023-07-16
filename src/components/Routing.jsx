import { Route, Routes } from 'react-router-dom'
import Home from 'src/pages/Home'
import Games from 'src/pages/Games'
import Solitaire from 'src/pages/games/Solitaire'
import TBA from 'src/pages/games/TBA'

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/games' element={<Games />} />
      <Route path='/games/solitaire' element={<Solitaire />} />
      <Route path='/games/tba' element={<TBA />} />
    </Routes>
  )
}

export default Routing