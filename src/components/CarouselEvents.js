import Carousel from './Carousel.js'
import axios  from 'axios'
import { useEffect, useState } from 'react'

export default function CarouselEvents() {
    // const cities = [
    //     { img: "/img/buenosAires.jpg", city: "Buenos Aires" },
    //     { img: "/img/estambul.jpg", city: "Estambul" },
    //     { img: "/img/amsterdam.jpg", city: "Amsterdam" },
    //     { img: "/img/london.jpg", city: "London" },
    //     { img: "/img/praga.jpg", city: "Praga" },
    //     { img: "/img/rome.jpg", city: "Rome" },
    //     { img: "/img/dubrovnik.jpg", city: "Dubrovnik" },
    //     { img: "/img/newYork.jpg", city: "New York" },
    //     { img: "/img/venecia.jpg", city: "Venecia" },
    //     { img: "/img/barcelona.jpg", city: "Barcelona" },
    //     { img: "/img/paris.jpg", city: "Paris" },
    //     { img: "/img/capeTown.jpg", city: "Cape Town" }
    // ]

    const [ cities, setCities ] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:4000/cities/')
            .then(response => setCities(response.data))
    }, [])

    return (
        <Carousel data={cities.response} range={4} slides={3} interval={4} />
    )
}