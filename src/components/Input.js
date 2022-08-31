import React from 'react'
import '../styles/NewCity.css'

const form = [
    {name: 'Photo URL'},
    {name: 'City'},
    {name: 'Country'},
    {name: 'Population'},
    {name: 'Foundation'},
    {name: 'Currency'},
    {name: 'High Season'}
]

const inputs = (name) => <input type="text" placeholder={ name.name } className="InputNewCity"></input>


function Input(props) {
    return (
        <div className='InputNewCityDiv'>
                {form.map(inputs)}
        <button className='ButtonInput'>Submit</button>
        </div>
    )
}

export default Input