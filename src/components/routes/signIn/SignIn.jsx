import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth'
import { signInWithGooglePopup, 
        createUserDocumentFromAuth,
        signInWithGoogleRedirect,
        auth
} from '../../../utils/firebase/firebase';
import SignUp from '../../SignUp/SignUp';


const SignIn = () => {
  //Here the code is returning two answers
  // useEffect(() => {
  //   getRedirectResultFunction();
  // }, []);

  // const getRedirectResultFunction = async () => {
  //   const response = await getRedirectResult(auth);
  //   if(response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user)
  //   }
  // }

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  };

  

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>
        Sign in with GooglePopup
      </button>
      <SignUp />
    </div>
  )
}

export default SignIn;
