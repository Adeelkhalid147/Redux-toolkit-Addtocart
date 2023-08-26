import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Quantity from '@/components/Quantity';

export interface CounterState {
  items:Array<any>;
  totalAmount:number;
  totalQuantity:number;
}

const initialState: CounterState = {
  items:[],
  totalAmount:0,
  totalQuantity:0,
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,actions:PayloadAction<any>) => {
      // console.log(actions)
      state.totalQuantity += actions.payload.quantity
    },
    removeFromCart: (state,actions:PayloadAction<any>) => {
      // console.log(actions)
      state.totalQuantity -= actions.payload.quantity
    },
    clearCart: (state) => {
      state = initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const cartActions = counterSlice.actions

export default counterSlice.reducer









{/* 
sara code (features/counter/counterSlice.js) copy kr k paste kr dia
https://redux-toolkit.js.org/tutorials/quick-start

reducer ko create krne ka treka h ye file
*/}