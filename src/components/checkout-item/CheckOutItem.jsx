import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
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
    
    const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);

    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemToCart(cartItem)
    
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
