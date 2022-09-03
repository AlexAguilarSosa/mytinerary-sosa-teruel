import {configureStore} from '@reduxjs/toolkit'
import CitiesSlice from '../src/features/CitiesSlice'

export default configureStore({
    reducer: {
        cities: CitiesSlice
    },
})