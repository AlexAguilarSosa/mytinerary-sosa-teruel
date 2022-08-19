import React from 'react'
import Carousel from './Carousel'

export default function CarouselEvents() {
    const cities = [
        { img: "/img/buenosAires.jpg", city: "Buenos Aires" },
        { img: "/img/estambul.jpg", city: "Estambul" },
        { img: "/img/amsterdam.jpg", city: "Amsterdam" },
        { img: "/img/london.jpg", city: "London" },
        { img: "/img/praga.jpg", city: "Praga" },
        { img: "/img/rome.jpg", city: "Rome" },
        { img: "/img/dubrovnik.jpg", city: "Dubrovnik" },
        { img: "/img/newYork.jpg", city: "New York" },
        { img: "/img/venecia.jpg", city: "Venecia" },
        { img: "/img/barcelona.jpg", city: "Barcelona" },
        { img: "/img/paris.jpg", city: "Paris" },
        { img: "/img/capeTown.jpg", city: "Cape Town" }
    ]
    return (
        <Carousel data={cities} range={4} />
    )
}