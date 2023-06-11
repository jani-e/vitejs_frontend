import { Link } from "react-router-dom"

const Games = () => {
  const listOfGames = [
    'Solitaire',
    'TBA'
  ]
  return (
    <>
      <h2>Games</h2>
      <ul>
        {listOfGames.map((game) => <li key={game}>
        <Link to={game.toLowerCase()}>{game}</Link>
        </li>)}
      </ul>
      
    </>
  )
}

export default Games