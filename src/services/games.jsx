import axios from 'axios'
const url = '/api/games'

const getGames = async () => {
  const response = await axios.get(url)
  return response.data
}

const gamesService = {
  getGames
}

export default gamesService
