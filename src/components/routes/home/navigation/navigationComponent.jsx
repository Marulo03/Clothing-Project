import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../../cartIcon/CartIcon";
import CartDropDown from '../../../cart-dropdown/CartDropdown';
import './navigationStyle.scss';
import { ReactComponent as CrwnLogo } from '../../../../assets/crown.svg'
import { UserContext } from "../../../context/userContext";
import { CartContext } from "../../../context/CartContext";
import { signOutUser } from '../../../../utils/firebase/firebase';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    // console.log(currentUser)
    const { isCartOpen } = useContext(CartContext);

    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrwnLogo className='logo' />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    SHOP
                </Link>
                {
                    currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                        ) : (
                            <Link className="nav-link" to='/auth'>
                                Sign In
                            </Link>
                        )
                    
                }
                <CartIcon />
            </div>
            {isCartOpen && <CartDropDown />}
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;