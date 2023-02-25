import SignUp from '../../SignUp/SignUp';
import SignIn from '../../SignIn/SignIn';
import {Auth} from './AuthenticationStyle.jsx'


const Authentication = () => {
  return (
    <Auth>
      <SignIn />
      <SignUp />
    </Auth>
  )
}

export default Authentication;
