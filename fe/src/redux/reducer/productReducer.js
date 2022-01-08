import * as actionTypes from '../constants/productConstat';

export const getProductReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_REQUEST: return {
            loading: true,
            products: []
        }
        case actionTypes.GET_PRODUCT_SUCCESS: return {
            loading: false,
            products: action.payload
        }
        case actionTypes.GET_PRODUCT_FAIL: return {
            loading: false,
            products: action.payload
        }
        default: return state;
    }
}

export const getProductDetails = (state = {product: {}}, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_DETAIL_REQUEST: return {
            loading: true
        }
        case actionTypes.GET_PRODUCT_DETAIL_SUCCESS: return {
            loading: false,
            product: action.payload
        }
        case actionTypes.GET_PRODUCT_DETAIL_FAIL: return {
            loading: false,
            error: action.payload
        }
        case actionTypes.GET_PRODUCT_DETAIL_RESET: return {
            loading: false,
            product: {}
        }

        default: return state;
    }
}