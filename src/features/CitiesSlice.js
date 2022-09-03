import { createSlice } from "@reduxjs/toolkit";

export const CitiesSlice = createSlice({
    name: 'cities',

    intialState: {
        cities:[]
    },

    reducers: {
        fetchFromServer: (state) => {
            state.cities= []
        }
    }
})

export const {fetchFromServer} = CitiesSlice.actions

export default CitiesSlice.reducer