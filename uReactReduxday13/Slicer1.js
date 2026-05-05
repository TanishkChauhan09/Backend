import { createSlice} from "@reduxjs/toolkit";
import { act } from "react";

const reactslicer = createSlice({
    name:"slice1",
    initialState:{count:0},
    reducers:{
        // Increment:(state)=>{
        //     return {...state,count:state.count+1}  //without immer
        //  },
        // by using the IMMER
        Increment:(state)=>{state.count=state.count+1},
        Decrement:(state)=>{state.count=state.count-1},
        Reset:(state)=>{state.count=0},
        CustomIncreaser:(state,action)=>{state.count+=action.payload}
    }
})

export const {Increment,Decrement,Reset,CustomIncreaser} = reactslicer.actions
export default reactslicer.reducer;