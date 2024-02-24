import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen:false
}


export const sidebarSlice = createSlice({
    name:"sidebar",
    initialState,
    reducers:{
        handleClose:(state,action)=>{
            console.log("handleClose reducer called");
            console.log("Current isOpen state:", state.isOpen);
            state.isOpen = false;
            console.log("New isOpen state:", state.isOpen);
        },
        handleOpen:(state,action)=>{
            state.isOpen = true;
        }
    }
})


export const {handleClose,handleOpen} = sidebarSlice.actions;
export default sidebarSlice.reducer;