import '../styles/City.css'
import {Link as LinkRouter} from  'react-router-dom'
import React, { useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios  from 'axios'


export default function City() {
    const [city, setCity] = useState({})
    const params = useParams()
    const {id} = params
    const navigate = useNavigate()

    const getCity = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/cities/${id}`)

        if (response.data.response){
            return setCity(response.data.response)
        }
        // throw new Error ("Ups! An error ocurred")
        }catch (error){
            return console.log(error.message);
        }
    }

        console.log(city);

        useEffect(() => {
            getCity()
        }, [])


    return (
    <div className='CityCardContainer'>
        <LinkRouter to='/cities' className='CityBackButton'><img src="/svg/backArrow.svg" alt=""/></LinkRouter>
        <div className='CityCardContainerTop' style={{backgroundImage: `url(${city.photo})`}}>
            <h1 className='CityH1'>{city.city}</h1>
            <h2 className='CityH2'>{city.country}</h2>
        </div>
        <div className='CityCardContainerBot'>
            <div className='CityData'>
                <p>Population:</p>            
                <h3>{city.population}</h3> 
            </div>
            <div className='CityData'>
                <p>High Season:</p>            
                <h3>{city.highseason}</h3>
            </div>
            <div className='CityData'>
                <p>Currency:</p>            
                <h3>{city.currency}</h3>
            </div>
        </div>
    </div>
    )
}