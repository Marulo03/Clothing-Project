import SignUp from '../../SignUp/SignUp';
import SignIn from '../../SignIn/SignIn';
import './Authentication.scss'


const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Authentication;
