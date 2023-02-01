import { useState } from "react";

import FormInput from "../formInput/FormInput";
import Button from "../Button/Button";

import { createAuthUserWithEmailAndPassword, 
         createUserDocumentFromAuth, 
         signInWithGooglePopup,
         signInAuthUserWithEmailAndPassword 
} from "../../utils/firebase/firebase";

import './SignIn.scss';

const defaultFormFields = {
    email: '',
    password: ''
};

const SignIn = () => {
    
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
      };

    const handleSubmit = async(event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();

        } catch(error) {
            switch(error.code) {
                case 'auth/wrong password':
                    alert('username or password are incorrect');
                    break;
                case 'auth/user-not-found' :
                    alert('username or password are incorrect');
                    break;
                
                default:
                    console.log(error);
                }
        }
        
        }

    

    //Arrow function that targets the input value and use an spread operator to get the specific information and set it in setFormFields.

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value });
    };

// The inputs have to match the properties in the object DefaultFormFields

    return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
            label="Email" 
            type="email" 
            required 
            onChange={handleChange} 
            name="email" 
            value={email}
        />

        <FormInput 
            label="Password" 
            type="password" 
            required 
            onChange={handleChange} 
            name="password" 
            value={password}
        />
        <div className="buttons-container">
        <Button type="submit">Sign In</Button>
        <Button type="button" buttonType='google'
                onClick={signInWithGoogle}>
                Sign in with Google
        </Button>
        </div>
      </form>
    </div>
  )
}


export default SignIn;