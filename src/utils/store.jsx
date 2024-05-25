import {configureStore} from "@reduxjs/toolkit"
import appslice from "./appslice"
import chatSlice from "./chatslice"
const store = configureStore({
reducer:{
    app:appslice,
    chat:chatSlice
}
})

export default store