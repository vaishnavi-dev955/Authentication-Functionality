// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'
import Header from '../Header'

const About = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  const onLogoutButton = () => {
    const {history} = props
    history.replace('/login')
    Cookies.remove('jwt_token')
  }

  return (
    <>
      <Header />
      <div className="main-container3">
        <h1>About Route</h1>
        <button type="button" onClick={onLogoutButton}>
          Logout
        </button>
      </div>
    </>
  )
}

export default About
