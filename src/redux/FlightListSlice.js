import { createSlice } from "@reduxjs/toolkit";
import { FlightData } from "../data/FlightData";

const flightSlice = createSlice({
    name:'flights',
    initialState:{
        // List of Flights
        flights:[
            
        ]
    },
    reducers:{
        setFlights(state,{payload}){
            // Set List of Flights
        },
        addFlights(state,{payload}){
            // Add New Flights
            state.flights = [...state.flights,payload]
        },
        deleteFlight(state,{payload}){
            // Delete Flight
        }
    }

})

export const flightActions = flightSlice.actions
export default flightSlice.reducer