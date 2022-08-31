import CityCard from './CityCard'
import axios  from 'axios'
import { useEffect, useState } from 'react'

export default function CarouselEvents() {


    const [ cities, setCities ] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:4000/cities/')
            .then(response => setCities(response.data))
    }, [])

    return (
        <>
            <CityCard data={cities} />
            {/* <Input data={cities} /> */}
        </>
    )
}