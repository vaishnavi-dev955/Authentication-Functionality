// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  const onClickLogoutButton = () => {
    const {history} = props
    history.replace('/login')
    Cookies.remove('jwt_token')
  }
  return (
    <>
      <Header />
      <div className="main-container2">
        <h1>Home Route</h1>
        <button type="button" onClick={onClickLogoutButton}>
          Logout
        </button>
      </div>
    </>
  )
}

export default Home
