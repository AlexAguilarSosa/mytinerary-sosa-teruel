import React from 'react'
import '../styles/Card.css'

export default function CityCard(props) {
    const cities = props.data

    const CardView = (city) =>(
        <div className='CardEvent'>
            <div className='CardImgContainer'>
                <img className='CardImg' src={city.img} alt="" />
            </div>
            <div className='CardTextContainer'>
                <h3 className='CardCityText'>{city.city}</h3>
                <p className='CardCountryText'>{city.country}</p>
            </div>
        </div>
    )

    return (
        <div className='CardEventContainer'>
            {cities.map(CardView)}
        </div>
    )
}
