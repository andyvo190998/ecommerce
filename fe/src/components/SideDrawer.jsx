import React from 'react';
import './sideDrawer.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SideDrawer = ({show, click}) => {
    const cartItem = useSelector((item) => item.cart.cartItems);
    const qtyArr = cartItem.map((item) => parseInt(item.qty, 10));
    const sum = qtyArr.reduce((partial_sum, a) => partial_sum + a, 0);

    const styleDrawerClass = ["sidedrawer"];
    if (show === true) {
        styleDrawerClass.push("show")
    }
    return  (
        <div className={styleDrawerClass.join(" ")}>
            <ul className="sidedrawer__links" onClick={click}>
                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            cart <span className="sidedrawer__cartbadge">{sum}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">Shop</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer
