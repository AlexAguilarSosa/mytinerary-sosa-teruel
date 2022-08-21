import React from 'react'
import '../styles/Carousel.css'

export default function Carousel(props) {
    const cities = props.data
    const range = props.range
    const start = 0
    const end = start + range

    const cityView = (city) =>(
        <div className='city'>
            <img className='cityImg' src={city.img} alt="" />
            <p className='PCity'>{city.city}</p>
        </div>
    )

    return (
        <>
            <h2>Popular MyTineraries</h2>
            <div className='Carousel'>
                {cities.slice(start, end).map(cityView)}
            </div>
        </>
    )
}
