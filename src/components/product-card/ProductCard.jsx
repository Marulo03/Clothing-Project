import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
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
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);

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