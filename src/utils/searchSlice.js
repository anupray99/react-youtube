import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
    },
    reducers: {
        cacheResults: (state, actions) => {
            return { ...actions.payload, ...state }
        }
    }
})

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const searchSlice = createSlice({
//     name: "search",
//     initialState: {},
//     reducers: {
//         cacheResults: (state, actions) => {
//             return {...actions.payload, ...state}
//         }
//     }
// })

// export const { cacheResults} = searchSlice.actions


// export default searchSlice.reducer


