import store from '../store';
import types from '../types';

const {dispatch} = store;

export const addToCart = (newArray,index) => {
    console.log(index,'index reached actions')
    dispatch({
        type:types.ADD_TO_CART,
        payload:{newArray,index}
    })    
}

export const deleteFromCart = (id) => {
    console.log(id,'id Reached actions')
    dispatch({
        type:types.DELETE_FROM_CART,
        payload:id
    })
}

export const increaseCart = (increasedAry,index1) => {
    console.log(increasedAry,'both item reached actions')
    dispatch({
        type:types.CART_INCREMENT,
        payload:{increasedAry,index1}
    })
}