import '../styles/NewCity.css'
// import Input from '../components/Input.js'
import React, { useState } from 'react'
import axios  from 'axios'

function NewCity (){

    const initialValor ={
        City: '' ,
        country: '' ,
        photo: '' ,
        population: 0 ,
        foundation: 0 ,
        currency: '' ,
        highseason: ''
    }

    const [city, setCity] = useState(initialValor)

    const captureData = (e) =>{
        const{name, value} = e.target
        setCity({...city, [name]:value})
    }

    const saveData = async(e)=>{
        e.preventDefault()

        const newCity = {
            city: city.city,
            country: city.country ,
            photo: city.photo ,
            population: city.population ,
            foundation: city.foundation ,
            currency: city.currency ,
            highseason: city.highseason
        }

    await axios.post('http://localhost:4000/cities/', newCity)

        setCity({...initialValor})
    }

    return(
            <div className="NewCityContainer">
                <h1 className='NewCityH1'>New City</h1>
                <div className='FormImgContainer'>
                    <div className="MainNewCity">
                        {/* <Input /> */}
                        <form onSubmit={saveData}>
                            <input
                                type="text" 
                                className="InputNewCity"
                                placeholder='city'
                                required
                                name="city" 
                                value={city.city}
                                onChange={captureData}
                            />
                            <input
                                type="text" 
                                className="InputNewCity"
                                placeholder='country'
                                required
                                name="country" 
                                value={city.country}
                                onChange={captureData}
                            />
                            <input
                                type="text" 
                                className="InputNewCity"
                                placeholder='photo'
                                required
                                name="photo" 
                                value={city.photo}
                                onChange={captureData}
                            />
                            <input
                                type="number" 
                                className="InputNewCity"
                                placeholder='population'
                                required
                                name="population" 
                                value={city.population}
                                onChange={captureData}
                            />
                            <input
                                type="number" 
                                className="InputNewCity"
                                placeholder='foundation'
                                required
                                name="foundation" 
                                value={city.foundation}
                                onChange={captureData}
                            />
                            <input
                                type="text" 
                                className="InputNewCity"
                                placeholder='currency'
                                required
                                name="currency" 
                                value={city.currency}
                                onChange={captureData}
                            />
                            <input
                                type="text" 
                                className="InputNewCity"
                                placeholder='highseason'
                                required
                                name="highseason" 
                                value={city.highseason}
                                onChange={captureData}
                            />
                            <button className='ButtonInput'>Submit</button>
                        </form>
                    </div>
                    <div className='NewCityImgContainer'>
                        <img className='NewCityImg' src="/svg/travelImg.svg" alt="" /> 
                    </div>
                </div>
                
            </div>
    )
}

export default NewCity