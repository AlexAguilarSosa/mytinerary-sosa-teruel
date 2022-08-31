import React from 'react'
import Input from './Input'
import '../styles/EditCity.css'
import axios  from 'axios'
import { useEffect ,useState } from 'react'
import Option from './Option'

function EditCity() {
    const [cities, setCities] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/cities/")
        .then(response => setCities(response.data))
    }, [])

    return (
        <div className='SelectContainer'>
            <select className='EditSelect'>
            {cities.map(city => <Option city = {city} />)}
            </select>
            <Input />
        </div>
    )
}

export default EditCity