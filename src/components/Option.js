import React from 'react'

function Option(props) {
    let city = props.city
    return (
        <option>{city.city}</option>
    )
}
export default Option