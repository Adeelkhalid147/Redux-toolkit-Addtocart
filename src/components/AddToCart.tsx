"use client"
import { useDispatch } from "react-redux"
import { Button } from "./ui/button"
import toast from "react-hot-toast"
import { cartActions } from "@/store/slice/cartSlice"



const AddToCart = ()=>{
    const dispatch = useDispatch();
    const addItem = () => {
        dispatch(cartActions.addToCart({product:{},quantity:1}))
        toast.success("Product added")
    }
    return <Button onClick={addItem}>Add to Cart</Button>

}
export default AddToCart



{/* 
do command run kren gy redux k AddToCart k funcnality k liye. ye dono command zrori hai
agr koi miss hoe to error ayn gy.

npm install @reduxjs/toolkit
npm install react-redux
*/}
