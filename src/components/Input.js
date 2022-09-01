import React from 'react'
import '../styles/NewCity.css'

const form = [
    {name: 'City'},
    {name: 'Country'},
    {name: 'Photo URL'},
    {name: 'Population'},
    {name: 'Foundation'},
    {name: 'Currency'},
    {name: 'High Season'}
]

const inputs = (name) => <input type="text" placeholder={ name.name } className="InputNewCity" required name={ name.name }></input>


function Input(props) {
    return (
        <form className='InputNewCityDiv'>
                {form.map(inputs)}
        <button className='ButtonInput'>Submit</button>
        </form>
    )
}

export default Input