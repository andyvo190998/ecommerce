import React from 'react';
import "./product.css";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {getProductDetails} from '../redux/actions/productActions';

const Product = () => {
    const productItem = useSelector((item) => item.getProduct.products);
    const dispatch = useDispatch();

    return (
        // <div className="product">
        <>
            {productItem.map((product) => {
               return (<div key={product._id} className="product">
                    <img src={product.imageUrl} alt="product name" />
                    <div className="product__info">
                        <p className="product__name">{product.name}</p>
                        <p className="product__description">
                            {product.description}
                        </p>
                        <p className="product__price">${product.price}</p>
                        <Link to={`/product/${product._id}`} onClick={() => dispatch(getProductDetails(product._id))} className="product__button">View</Link>
                    </div>
                </div>)
            })}
            </>
        // </div>
    )
}

export default Product
