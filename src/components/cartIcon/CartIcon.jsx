import { useContext } from 'react';
import { ReactComponent } from '../../assets/shopping-bag.svg';
import { CartContext } from '../context/CartContext';

import {CartIconContainer, ItemCount, ShoppingIcon} from './CartIconStyle.jsx';

const CartIcon = () => {
    const  { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;