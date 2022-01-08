import './navBar.css';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
const NavBar = ({click}) => {
    const cartItem = useSelector((item) => item.cart.cartItems);
    const qtyArr = cartItem.map((item) => parseInt(item.qty, 10))
    const sum = qtyArr.reduce((partial_sum, a) => partial_sum + a, 0)

    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar__logo">
                <Link className="navbar__logo" to="/">MERN shoping cart</Link>
            </div>
            {/* links */}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            cart
                        <span className={sum === 0 ? "cartlogo__badge" : "red"}>{sum === 0 ? "0" : sum}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        shop
                    </Link>
                </li>
            </ul>
            {/* hamburger menu */}
            <div className="hamburger__menu" onClick={click} >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default NavBar
