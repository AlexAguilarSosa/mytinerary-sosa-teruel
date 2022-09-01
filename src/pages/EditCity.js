import React from 'react'
import Input from '../components/Input'
import '../styles/EditCity.css'
import axios  from 'axios'
import { useEffect ,useState } from 'react'
import Option from '../components/Option'

function EditCity() {
    const [cities, setCities] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/cities/")
        .then(response => setCities(response.data))
    }, [])
        console.log(cities);
    return (
        <div className='InputSelectImgContainer'>
            <h1 className='EditCityH1'>Edit City</h1>
                <div className='InputSelectContainer'>
                    <select className='EditSelect'>
                    {cities.response?.map(city =>
                        <Option city = {city} />
                        )}
                    </select>
                    <Input className='Input' />
                </div>
                <div className='EditCityImgContainer'>
                    <img className='EditCityImg' src="/svg/man-at-work.png" alt="" /> 
                </div>
        </div>
    )
}

export default EditCity