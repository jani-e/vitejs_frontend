import { Link } from "react-router-dom"

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

export default NavLinks