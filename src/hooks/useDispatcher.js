import { useDispatch } from "react-redux";
import { addToCart, setItemAmount, setTotal } from "../features/cart/cartSlice";




const useDispatcher = ()=>{
    const dispatch = useDispatch()
    const changeAllState = ()=>{
        
        dispatch(setItemAmount());
        dispatch(setTotal());
    }
    
    return {changeAllState}
}



export default useDispatcher;