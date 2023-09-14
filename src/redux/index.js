import { configureStore } from "@reduxjs/toolkit"; 
import basketSlice from "./basket";

const store = configureStore({
    reducer:{
        basket:basketSlice
    }
})

export default store