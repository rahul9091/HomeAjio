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
                let count1 = state.count + 1
                console.log(count1,"count is increased")
                return{
                    ...state,
                    cartAry:[...UpdatedCartAry],
                    count:count1
                }
               
            }else{
                // console.warn('already added in the cart')
                // Toast.show({
                //     text1:'Already Added To Cart',
                //     type:"success",
                //     topOffset:60
                // })
                showMessage({
                    message:"Already Added to Cart",
                    type:'danger',
                    icon:'warning'
                })
            }
            case ActionTypes.DELETE_FROM_CART:
                let addedCartAry = [...state.cartAry]
                console.log(addedCartAry,'arycart in reducer')
                const id = action.payload;
                console.log(id,'id Reached Reducer')
                let deletedArray = addedCartAry.filter((item) => item.id !== id)



    
                // console.log(deletedCount,'counted Deleted from reducer')
                // console.log(deletedArray,'array deleted inn reducer successfully')
                return {
                    ...state,
                    cartAry:[...deletedArray],
                    count:0
                }
            case ActionTypes.CART_INCREMENT:
                const {increasedAry,index1} = action.payload
                console.log(increasedAry,'array reached recucer')
                console.log(index1,'index reached reducer')
                increasedAry[index1].quantity += 1
                console.log(increasedAry,'qunatity increase in reducer')
                return {
                    ...state,
                    cartAry:[...increasedAry],
                    count:state.count + 1
                }


        default:
           {
               return {
                   ...state
               }
           }
    }
}