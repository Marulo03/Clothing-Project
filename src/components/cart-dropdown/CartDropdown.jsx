import { useContext } from 'react';
import Button from '../Button/Button';
import CartItem from '../cartItem/CartItem';
import { CartContext } from '../context/CartContext';
import './CartDropdown.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button>GO TO CHECKOUT</Button>

        </div>
    )
}

export default CartDropdown;