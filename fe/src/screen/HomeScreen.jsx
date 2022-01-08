import React, {useEffect} from 'react';
import Product from '../components/Product';
import './homeScreen.css';
import {useSelector, useDispatch} from "react-redux";
import {getProduct as listProducts} from '../redux/actions/productActions'

const HomeScreen = () => {
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProduct);
    const {products, loading, error} = getProducts;

    useEffect(()=> {
        dispatch(listProducts())
    }, [dispatch])
    return (
        <div className="homescreen">
            <h2 className="homescreen__title">
                Latest products
            </h2>
            <div className="homescreen__products">
                {loading ? <h2>Loading...</h2> : <Product />}
            </div>
            {/* <button onClick={() => dispatch(listProducts())}>hello</button> */}
        </div>
    )
}

export default HomeScreen
