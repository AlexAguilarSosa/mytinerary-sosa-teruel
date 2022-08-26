import React from 'react'
import '../styles/NewCity.css'

const form = [
    {name: 'Photo URL'},
    {name: 'City'},
    {name: 'Country'},
    {name: 'Population'},
    {name: 'Foundation'}
]

const inputs = (name) => <input type='text' placeholder={ name.name }></input>


function Input(props) {


    return (
        <div className='InputNewCityDiv'>
        {form.map(inputs)}
        <button className='ButtonInput'>Submit</button>
        </div>
    )
}

export default Input