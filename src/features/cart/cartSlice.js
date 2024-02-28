import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { useDispatch } from "react-redux";

const initialState = {
    cart:[],
    itemAmount:0,
    total:0
}


export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            console.log(action.payload)
            const item = {...action.payload};
            const cart = state.cart;
            const findItem = state.cart.find((cartItem)=> cartItem.id === item.id);
            if(findItem){
                //const newItem = {...findItem,amount:findItem.amount+1};
               state.cart = cart.map((cartItem)=>{
                    if(cartItem.id === findItem.id){
                        return {...cartItem,amount:cartItem.amount+1};
                    }
                    return cartItem;
                })
                
            }
            else{
                item.amount = 1;
                state.cart.push(item);
            }

        },
        setItemAmount:(state,action)=>{
            const cart = state.cart;
            if(cart){
                const amount = cart.reduce((accumulator,currentItem)=>{
                  return accumulator+currentItem.amount;
                },0)
                state.itemAmount = amount;
              }
        },
        setTotal:(state,action)=>{
            const cart = state.cart;
            const total = cart.reduce((accumulator,currentItem)=>{
                return accumulator+currentItem.price*currentItem.amount;
              },0);
              state.total = total;
        },
        removeFromCart:(state,action)=>{
            const cart = state.cart;
            const newCart = cart.filter((item)=>{
              return  item.id !== action.payload;
            })
            state.cart = newCart;
        },
        clearCart:(state)=>{
            state.cart = [];
        },
        increaseAmount:(state,action)=>{
            console.log("increase amount"+action.payload)
                const cart = state.cart;
                console.log(state.cart)
                const findItem = cart.find((cartItem) => {
                    
                    return cartItem.id === action.payload
                });
                
                state.cart = cart.map((cartItem)=>{
                    if(cartItem.id === findItem.id){
                        return {...cartItem,amount:cartItem.amount+1};
                    }
                    return cartItem;
                })
                
            
        },
        decreaseAmount:function(state,action){
            const cart = state.cart;
            
            state.cart = cart.flatMap((cartItem)=>{
                
                if(cartItem.id === action.payload ){
                    if(cartItem.amount !== 1){
                        //state.itemAmount = state.itemAmount - 1;
                        return {...cartItem,amount:cartItem.amount-1};
                    }
                    else{
                        return [];
                    }
                   
                }
                else{
                    return cartItem;
                }
            })
            
        }

    }
})
const cartReducer = cartSlice.reducer;

export const {addToCart,setItemAmount,setTotal,increaseAmount,decreaseAmount,clearCart,removeFromCart} = cartSlice.actions;
export default cartReducer;