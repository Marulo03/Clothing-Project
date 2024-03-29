import { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../formInput/FormInput";
import Button from "../Button/Button";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

import { SignUpContainer } from "./SignUpStyle";
import { Heading } from "./SignUpStyle";

import { signUpStart } from "../../store/user/UserAction";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("passwords do not match")
            return;
        }

        try {
            dispatch(signUpStart(displayName, email, password))
            resetFormFields();

        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('User already exists');
            } else {
                console.log('user creation encountered an error', error)
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
      <Heading>Dont have an account?</Heading>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
            label="Display Name" 
            type="text" 
            required 
            onChange={handleChange} 
            name="displayName" 
            value={displayName}
        />

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

        <FormInput 
            label="Confirm password" 
            type="password" 
            required 
            onChange={handleChange} 
            name="confirmPassword" 
            value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  )
}

export default SignUp;
