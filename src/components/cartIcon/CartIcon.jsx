import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen } from '../../store/cart/CartSelector';
import { setIsCartOpen } from '../../store/cart/CartAction';

import { ReactComponent } from '../../assets/shopping-bag.svg';


import {CartIconContainer, ItemCount, ShoppingIcon} from './CartIconStyle.jsx';

const CartIcon = () => {
    
    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;