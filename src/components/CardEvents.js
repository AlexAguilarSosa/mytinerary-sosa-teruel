import React from 'react'
import CityCard from './CityCard'
import Input from './Input'

export default function CarouselEvents() {
    const cities = [
        { city: "Buenos Aires", country: "Argentina", img: "/img/buenosAires.jpg", population: '3.075.646', foundation: '1580' },
        { city: "Estambul", country: "Turkey", img: "/img/estambul.jpg", population: '15.462.452', foundation: '330' },
        { city: "Amsterdam", country: "Netherlands", img: "/img/amsterdam.jpg", population: '821.752', foundation: '1275' },
        { city: "London", country: "England", img: "/img/london.jpg", population: '9.002.488', foundation: '47' },
        { city: "Praga", country: "Czech Republic", img: "/img/praga.jpg", population: '1.262.106', foundation: '870' },
        { city: "Rome", country: "Italy", img: "/img/rome.jpg", population: '2.815.951', foundation: '753 a.C.' },
        { city: "Dubrovnik", country: "Croatia", img: "/img/dubrovnik.jpg", population: '42.615', foundation: '1372' },
        { city: "New York", country: "United States", img: "/img/newYork.jpg", population: '8.804.109', foundation: '1624' },
        { city: "Venecia", country: "Italy", img: "/img/venecia.jpg", population: '261.905', foundation: '697' },
        { city: "Barcelona", country: "Spain", img: "/img/barcelona.jpg", population: '1.636.732', foundation: '1249' },
        { city: "Paris", country: "France", img: "/img/paris.jpg", population: '2.273.250', foundation: '52 a.C.' },
        { city: "Cape Town", country: "South Africa", img: "/img/capeTown.jpg", population: '4.488.545', foundation: '1652' }
    ]
    return (
        <>
            <CityCard data={cities} />
            <Input data={cities} />
            
        </>

    )
}