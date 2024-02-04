import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0
}

export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        addCount:(state,action)=>{
            state.count+=1
        },
        removeCount:(state,action)=>{
            state.count-=1
        }
    }
});

export const {addCount,removeCount}=counterSlice.actions;
export default counterSlice.reducer;

