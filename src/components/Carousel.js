import '../styles/Carousel.css'
import ArrowsCarousel from './ArrowsCarousel'
import { useEffect ,useState } from 'react'

function Carousel(props) {
    const cities = props.data
    const range = props.range
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(start + range)
    const [intervalId, setIntervalId] = useState()
    const interval = props.interval * 1000

    const cityView = (city) =>(
        <div className='CarouselEvent'>
            <p className='CarouselText'>{city.city}</p>
            <img className='CarouselImg' src={city.img} alt="" />
        </div>
    )

        useEffect(() => {
            let id = setInterval(function () {
                next()
            }, interval)

            setIntervalId(id)

            return () => clearInterval(intervalId);

        }, [start])


        function previous (){
            if(start >= range){
            setStart(start - range)
            setEnd(end - range)
        }
    }

    function next (){
        if(end < cities.length){
            setStart(start + range)
            setEnd(end + range)
        }
    }


    return (
        <div className='CarouselContainer'>
            <h2 className='CarouselTitle'>Popular MyTineraries</h2>
            <div className='CarouselSlide'>
                <ArrowsCarousel icon={"<"} click={previous} />
                <div className='CarouselContainerImg'>{cities.slice(start, end).map(cityView)}</div>
                <ArrowsCarousel icon={">"} click={next} />
            </div>
        </div>
    )
}

export default Carousel