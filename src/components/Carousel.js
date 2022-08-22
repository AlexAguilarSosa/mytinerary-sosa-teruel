import React from 'react'
import '../styles/Carousel.css'

export default function Carousel(props) {
    const cities = props.data
    const range = props.range
    const start = 0
    const end = start + range

    const cityView = (city) =>(
        <div className='CarouselEvent'>
            <p className='CarouselText'>{city.city}</p>
            <img className='CarouselImg' src={city.img} alt="" />
        </div>
    )

    return (
        <div className='CarouselContainer'>
            <h2 className='CarouselTitle'>Popular MyTineraries</h2>
            <div className='CarouselSlide'>
                {cities.slice(start, end).map(cityView)}
            </div>
        </div>
    )
}
