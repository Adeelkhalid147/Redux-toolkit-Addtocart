
import { createSlice } from "@reduxjs/toolkit"
import type { payloadAction } from "@reduxjs/toolkit"



export interface CounterState {
    value:number,
    value2:number,
}

const initialState: CounterState = {
    value:0,
    value2:6,
}
export const counterSlice = createSlice({})



export default counterSlice.reducer;