import {configureStore} from '@reduxjs/toolkit'
import flightReducer from './FlightListSlice'

export const store = configureStore({
    reducer:{
        flights:flightReducer
    }
})