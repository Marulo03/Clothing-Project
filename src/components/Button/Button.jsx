import './Button.scss';

//3 types of buttons

//Default button

//Inverted button

//Google SignIn button

const ButtonTypeClasses = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`button-container ${ButtonTypeClasses[buttonType]}`} {...otherProps}>
        {children}
    </button>
  )
}

export default Button;
