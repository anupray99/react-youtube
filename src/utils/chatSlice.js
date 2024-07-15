import { createSlice } from "@reduxjs/toolkit";


const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messsages: []
    },
    reducers: {
        addMessage: (state, action) => {
            if(state.messsages.length > 100){
                state.messsages.splice(10, 1);
            }
            state.messsages.unshift(action.payload)
        }
    }
})


export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;