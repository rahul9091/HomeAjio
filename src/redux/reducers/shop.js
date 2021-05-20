import ActionTypes from '../types';
import Toast from 'react-native-toast-message';
import { showMessage, hideMessage } from "react-native-flash-message";
const initialState= {
    cartAry:[],
    count:0
}

export default function shopReducer (state=initialState,action) {
    switch(action.type){
        case ActionTypes.ADD_TO_CART:
            const {newArray,index} = action.payload;
            console.log(newArray,'newArray reached reducer')
            if(!state.cartAry.includes(newArray[index])){
                let UpdatedCartAry = [...state.cartAry,newArray[index]]
                newArray[index].quantity = 1
                console.log(UpdatedCartAry,"cartarray Updated in the reducer")
                return{
                    ...state,cartAry:[...UpdatedCartAry]
                }
               
            }else{
                // console.warn('already added in the cart')
                // Toast.show({
                //     text1:'Already Added To Cart',
                //     type:"success",
                //     topOffset:60
                // })
                showMessage({
                    message:"Alerady Added to Cart",
                    type:'danger',
                    icon:'warning'
                })
            }


        default:
           {
               return {
                   ...state
               }
           }
    }
}