import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/CartSelector';
import { addItemToCart } from '../../store/cart/CartAction';

import Button, { ButtonTypeClasses } from '../Button/Button';
import {
    ProductCartContainer,
    ProductFooter,
    ProductName,
    ProductPrice
    } 
from './ProductCardStyle.jsx'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return(
        <ProductCartContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ProductFooter>
                <ProductName>{name}</ProductName>
                <ProductPrice>{price}</ProductPrice>
            </ProductFooter>
            <Button
                buttonType={ButtonTypeClasses.inverted}
                onClick={addProductToCart}
            >
            Add to cart</Button>
        </ProductCartContainer>
        )
};

export default ProductCard;