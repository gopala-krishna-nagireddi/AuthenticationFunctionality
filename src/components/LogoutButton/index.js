// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onLogoutAccout = () => {
    Cookies.remove('jwt_token')

    const {history} = props
    history.replace('/login')
  }
  return (
    <button type="button" onClick={onLogoutAccout}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
