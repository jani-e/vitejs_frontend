import { useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'
import PageThree from './pages/PageThree'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const delayedPageThree = () => {
    setTimeout(() => {
      navigate('3')
    }, 3000);
  }

  return (
    <>
      <h1>Jani-e&apos;s website</h1>
      {count}
      <button onClick={() => setCount(count + 1)}>click me to increment</button>
      <h2>Routing</h2>
      <h3>Links</h3>
      <ul>
        <li><Link to='/'>Home page / page 1</Link></li>
        <li><Link to='2'>Page 2</Link></li>
      </ul>
      <h3>UseNavigate</h3>
      <p>To page 3 click the below button and wait 3 seconds</p>
      <button onClick={() => delayedPageThree()}>Click me</button>
      <h3>Routes &apos;pages&apos;</h3>
      <Routes>
        <Route path='/' element={<PageOne />} />
        <Route path='/2' element={<PageTwo />} />
        <Route path='/3' element={<PageThree />} />
      </Routes>
    </>
  )
}

export default App
