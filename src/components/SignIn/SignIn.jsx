import { useState } from "react";

import FormInput from "../formInput/FormInput";
import Button, { ButtonTypeClasses } from "../Button/Button";

import { createAuthUserWithEmailAndPassword, 
         createUserDocumentFromAuth, 
         signInWithGooglePopup,
         signInAuthUserWithEmailAndPassword 
} from "../../utils/firebase/firebase";

import { SignUpContainer, Buttons, HeadTitle } from './SignInStyle.jsx';

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
         await signInWithGooglePopup();
      };

    const handleSubmit = async(event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(
            email, 
            password
            );
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
    <SignUpContainer>
      <HeadTitle>Already have an account?</HeadTitle>
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
        <Buttons>
        <Button type="submit">Sign In</Button>
        
        <Button 
            type="button" 
            buttonType={ButtonTypeClasses.google}
            onClick={signInWithGoogle}
        >
        Sign in with Google
        </Button>
        </Buttons>
      </form>
    </SignUpContainer>
  )
}


export default SignIn;
