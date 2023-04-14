import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux"; 

import CartIcon from "../../../cartIcon/CartIcon";
import CartDropDown from '../../../cart-dropdown/CartDropdown';
import { ReactComponent as CrwnLogo } from '../../../../assets/crown.svg'

import { selectIsCartOpen } from '../../../../store/cart/CartSelector';
import { selectCurrentUser } from '../../../../store/user/UserSelector';
import { signOutStart } from "../../../../store/user/UserAction";

import { NavigationContainer } from './navigationStyle.jsx';
import { NavLinks } from "./navigationStyle.jsx";
import { NavLink } from "./navigationStyle.jsx";
import { LogoContainer } from "./navigationStyle.jsx";


const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    // const { isCartOpen } = useContext(CartContext);
    const isCartOpen = useSelector(selectIsCartOpen);
    
    const signOutUser = () => dispatch(signOutStart());

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