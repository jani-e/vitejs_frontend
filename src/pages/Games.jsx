import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import gamesService from "src/services/games"

const Games = () => {

  const [ games, setGames ] = useState([])

  useEffect(() => {
    async function fetchGames() {
      try {
        const fetchedGames = await gamesService.getGames()
        setGames(fetchedGames)
      } catch (error) {
        console.error('Error: ', error)
      }
    }
    fetchGames()
  }, [])

  return (
    <>
      <h2>Games</h2>
      <ul>
        {games.map((game) => <li key={game}>
        <Link to={game.toLowerCase()}>{game}</Link>
        </li>)}
      </ul>
      
    </>
  )
}

export default Games

/*

const listOfGames = [
  'Solitaire',
  'TBA'
]

*/