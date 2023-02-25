import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../../cartIcon/CartIcon";
import CartDropDown from '../../../cart-dropdown/CartDropdown';
import { ReactComponent as CrwnLogo } from '../../../../assets/crown.svg'
import { UserContext } from "../../../context/userContext";
import { CartContext } from "../../../context/CartContext";
import { signOutUser } from '../../../../utils/firebase/firebase';
import { NavigationContainer } from './navigationStyle.jsx';
import { NavLinks } from "./navigationStyle.jsx";
import { NavLink } from "./navigationStyle.jsx";
import { LogoContainer } from "./navigationStyle.jsx";


const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    // console.log(currentUser)
    const { isCartOpen } = useContext(CartContext);

    return(
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className='logo' />
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {
                    currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                        ) : (
                            <NavLink to='/auth'>
                                Sign In
                            </NavLink>
                        )
                    
                }
                <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropDown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;