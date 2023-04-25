import { BaseButton,
         GoogleSignInButton, 
         InvertedButton,
         ButtonSpinner 
        }
from './ButtonStyle.jsx';

//3 types of buttons

//Default button

//Inverted button

//Google SignIn button

export const ButtonTypeClasses = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const getButton = (buttonType = ButtonTypeClasses.base) => 
  ({
    [ButtonTypeClasses.base]: BaseButton,
    [ButtonTypeClasses.google]: GoogleSignInButton,
    [ButtonTypeClasses.inverted]: InvertedButton,
  }[buttonType]);


const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType)
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
        {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  )
}

export default Button;
