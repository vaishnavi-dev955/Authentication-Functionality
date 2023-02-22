import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="container1">
    <Link to="/">
      <h1 className="heading1">Home</h1>
    </Link>
    <Link to="/about">
      <h1 className="heading1">About</h1>
    </Link>
  </div>
)

export default Header
