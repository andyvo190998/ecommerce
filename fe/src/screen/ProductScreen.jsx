import React, { useState, useEffect } from 'react'
import './productScreen.css'
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetails } from '../redux/actions/productActions'
import { useNavigate, useParams } from 'react-router'

import { addToCart } from '../redux/actions/cartActions'


const ProductScreen = () => {
    const productDetail = useSelector((detail) => detail.getProductDetail)
    // console.log(productDetail.product)
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const { id } = useParams();
    const navigate = useNavigate()



    const { loading, error, product } = productDetail;
    useEffect(() => {
        if (product && id !== product._id) {
            dispatch(getProductDetails(id))
        }
    }, [dispatch, id, product]);

    const handlerAddToCart = () => {
        dispatch(addToCart(product._id,qty));
        navigate('/cart')
    }

    return (
        <>
            <div className="productscreen">
                {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
                    <>
                        <div className="productscreen__left">
                            <div className="left__image">
                                <img src={product.imageUrl} alt="product name" />
                            </div>
                            <div className="left__info">
                                <p className="left__name">{product.name}</p>
                        <p className="left__price">Price: ${product.price}</p>
                        <p className="left__dicription">{product.description}</p>
                            </div>
                        </div>
                        <div className="productscreen__right">
                            <div className="right__info">
                                <p className="right__price">
                                    Price: <span>{`$${product.price * qty}`}</span>
                                </p>
                                <p className="right__status">
                                    Status: <span>{product.countInStock > 0 ? `In Stock (${product.countInStock})` : "Out Of Stock"}</span>
                                </p>
                                <p>
                                    Qty
                                    <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                        {[...Array(product.countInStock).keys()].map((x) => (
                                            <option key={x+1}>{x+1}</option>
                                        ))}
                                    </select>
                                </p>
                                <p>
                                    <button type="button" onClick={handlerAddToCart}>Add To Cart</button>
                                </p>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </>
    )
}

export default ProductScreen
