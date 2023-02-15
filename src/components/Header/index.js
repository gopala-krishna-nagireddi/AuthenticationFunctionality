// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="links-container">
    <Link className="link-item" to="/">
      <li>Home</li>
    </Link>
    <Link className="link-item" to="/about">
      <li>About</li>
    </Link>
  </ul>
)

export default Header
