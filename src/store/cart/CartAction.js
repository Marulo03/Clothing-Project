import { CART_ACTION_TYPES } from "./CartTypes";
import { createAction } from "../../utils/reducer/reducer";

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1}
            :
            cartItem
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemtoRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemtoRemove.id)

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemtoRemove.id);
    }

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === cartItemtoRemove.id ?
            {...cartItem, quantity: cartItem.quantity - 1}
            :
            cartItem
        )
    }
    
}

const clearCartItem = (cartItems, cartItemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
}

export const setIsCartOpen = (boolean) => 
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

    export const addItemToCart = (cartItems ,productToAdd) => {
        const newCartItems = (addCartItem(cartItems, productToAdd));
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    }

    export const removeItemFromCart = (cartItems, cartItemToRemove) => {
        const newCartItems = (removeCartItem(cartItems, cartItemToRemove));
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    }

    export const clearItemFromCart = (cartItems, cartItemToClear) => {
        const newCartItems = (clearCartItem(cartItems, cartItemToClear));
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    }

