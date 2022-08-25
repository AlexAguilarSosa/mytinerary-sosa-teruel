import React from 'react'
import CityCard from './CityCard'

export default function CarouselEvents() {
    const cities = [
        { city: "Buenos Aires", country: "Argentina", img: "/img/buenosAires.jpg" },
        { city: "Estambul", country: "Turkey", img: "/img/estambul.jpg" },
        { city: "Amsterdam", country: "Netherlands", img: "/img/amsterdam.jpg" },
        { city: "London", country: "England", img: "/img/london.jpg" },
        { city: "Praga", country: "Czech Republic", img: "/img/praga.jpg" },
        { city: "Rome", country: "Italy", img: "/img/rome.jpg" },
        { city: "Dubrovnik", country: "Croatia", img: "/img/dubrovnik.jpg" },
        { city: "New York", country: "United States", img: "/img/newYork.jpg" },
        { city: "Venecia", country: "Italy", img: "/img/venecia.jpg" },
        { city: "Barcelona", country: "Spain", img: "/img/barcelona.jpg" },
        { city: "Paris", country: "France", img: "/img/paris.jpg" },
        { city: "Cape Town", country: "South Africa", img: "/img/capeTown.jpg" }
    ]
    return (
        <>
            <CityCard data={cities} />
        </>

    )
}