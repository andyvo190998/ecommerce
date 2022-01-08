import React from 'react';
import "./cartItem.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const CartItem = ({item}) => {
    const dispatch = useDispatch();

    const handleOnchange = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <Link to={`/product/${item.product}`} className="cartItem__name">
                <p>{item.name}</p>
            </Link>
            <p className="cartitem__price">${item.price}</p>

            <select className="cartItem__select" value={item.qty} onChange={(e) => handleOnchange(item.product, e.target.value)}>
                {[...Array(item.countInStock).keys()].map((e) => (
                    <option key={e+1} value={e+1}>{e+1}</option>
                ))}
            </select>
            <button onClick={() => dispatch(removeFromCart(item.product))} className="cartItem__deleteBtn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default CartItem
