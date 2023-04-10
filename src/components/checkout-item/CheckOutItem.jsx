import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/CartSelector.js';

import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/CartAction';

import {
    CheckOutItemContainer,
    Image,
    Name,
    Quantity,
    Value,
    Arrows,
    RemoveButton,
    Price
} 
from'./CheckOutItemStyle.jsx';

function CheckOutItem( {cartItem} ) {
    const { name, imageUrl, price, quantity } = cartItem
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch();
    
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    
    return (
        <CheckOutItemContainer>
            <Image>
                <img src={imageUrl} alt={`${name}`} />
            </Image>
            <Name> {name} </Name>
            <Quantity> 
                <Arrows onClick={removeItemHandler}>
                    &#10094;
                </Arrows>
                <Value>{quantity}</Value>
                <Arrows onClick={addItemHandler}>
                    &#10095;
                </Arrows> 
            </Quantity>
            <Price> {price} </Price>
            <RemoveButton onClick={clearItemHandler}>
                &#10005;
            </RemoveButton>
        </CheckOutItemContainer>
  )
}

export default CheckOutItem;
