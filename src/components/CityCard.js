import React from 'react'
import {Link as LinkRouter} from  'react-router-dom'
import '../styles/Card.css'

export default function CityCard(props) {
    const cities = props.data

    const CardView = (city) =>(
    <LinkRouter to={'/city'} className='CityCardLink'>
        <div className='CardEvent'>
            <div className='CardImgContainer'>
                <img className='CardImg' src={city.img} alt="" />
            </div>
            <div className='CardTextContainer'>
                <h3 className='CardCityText'>{city.city}</h3>
            </div>
        </div>
    </LinkRouter>
    )

    return (
        <div className='CardEventContainer'>
            {cities.map(CardView)}
        </div>
    )
}
