// Write your JS code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  setCookieAndNavigate = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onClickLoginWithBtn = async () => {
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.setCookieAndNavigate(data.jwt_token)
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="bg-login-container">
        <h1 className="login-heading">Please Login</h1>
        <button
          type="submit"
          className="login-btn"
          onClick={this.onClickLoginWithBtn}
        >
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
