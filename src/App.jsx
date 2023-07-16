import 'src/App.css'
import NavBar from 'src/components/NavBar'
import Routing from 'src/components/Routing'
import Footer from 'src/components/Footer'
import { Container } from '@mui/material'

const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Routing />
      </Container>
      <Footer />
    </>
  )
}

export default App
