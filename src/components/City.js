import '../styles/City.css'
import {Link as LinkRouter} from  'react-router-dom'
// import axios  from 'axios'
// import { useEffect } from 'react'


export default function City() {

    // useEffect(() =>{
    //     axios.get('http://localhost:4000/cities/id')
    //         .then(response => (response.data))
    // }, [])

    return (
    <div className='CityCardContainer'>
        <LinkRouter to='/cities' className='CityBackButton'><img src="/svg/backArrow.svg" alt=""/></LinkRouter>
        <div className='CityCardContainerTop'>
            <h1>Ciudad</h1>
            <h2>Pais</h2>
        </div>
        <div className='CityCardContainerBot'>
            <div className='CityData'>
                <h3>population</h3> 
                <p>num</p>            
            </div>
            <div className='CityData'>
                <h3>high season</h3>
                <p>num</p>            
            </div>
            <div className='CityData'>
                <h3>currency</h3>
                <p>num</p>            
            </div>
        </div>
    </div>
  )
}
