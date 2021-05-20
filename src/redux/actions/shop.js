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