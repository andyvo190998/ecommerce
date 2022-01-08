import React from 'react';
import './cartScreen.css';
import CartItem from '../components/CartItem';
import {useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';

const CartScreen = () => {
    const dispatch = useDispatch();
    const cartItem = useSelector((item) => item.cart.cartItems)
    // console.log(cartItem.length)
    // const priceArray = cartItem.map((price) => price.price)
    const sumAmount = cartItem.reduce((price , item) => price + (item.price * item.qty), 0).toFixed(2);


    // const qtyArr = cartItem.map((item) => parseInt(item.qty, 10))
    // const sumQty = qtyArr.reduce((partial_sum, a) => partial_sum + a, 0)
    const sumQty = cartItem.reduce((qty, item) => qty + Number(item.qty)  , 0)



    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping cart</h2>
                {cartItem.length === 0 ? (
                    <div>your cart is empty. <Link to="/">Go back</Link></div>
                ) : (
                    cartItem.map((item) => <CartItem key={item.product} item={item}/>)
                )}
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Total items: <b>{sumQty}</b></p>
                    <p>Total amount: <b>${sumAmount}</b></p>
                </div>
                <div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
