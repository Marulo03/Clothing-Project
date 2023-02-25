import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import CartItem from '../cartItem/CartItem';
import { CartContext } from '../context/CartContext';
import { CartDropdownContainer, EmptyMessage, CartItemsContainer } from './CartDropdownStyle.jsx';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return(
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ? (cartItems.map(item => 
                        <CartItem key={item.id} cartItem={item} />))
                    :
                    (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItemsContainer>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;