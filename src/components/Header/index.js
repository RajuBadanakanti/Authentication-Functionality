// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-conainer">
    <ul className="header-ul-list-container">
      <li className="header-list-item-container">
        <Link to="/" className="link">
          Home
        </Link>
      </li>

      <li className="header-list-item-container">
        <Link to="/about" className="link">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
