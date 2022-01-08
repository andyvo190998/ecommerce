import * as actionTypes from "../constants/productConstat";
import axios from 'axios';

export const getProduct = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_REQUEST });

        const { data } = await axios.get("/api/products");
        // console.log(data)
        dispatch({
            type: actionTypes.GET_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_REQUEST });

        const { data } = await axios.get(`/api/products/${id}`);

        dispatch({
            type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAIL_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS
    })
}