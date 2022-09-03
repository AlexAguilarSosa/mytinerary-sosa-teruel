import '../styles/Carousel.css'
import {Link as LinkRouter} from  'react-router-dom'
import ArrowsCarousel from './ArrowsCarousel'
import { useEffect ,useState } from 'react'

function Carousel(props) {
    const range = props.range
    const limitSlides = (props.slides * range)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(start + range)
    const [intervalId, setIntervalId] = useState()
    const data = props.data
    const interval = props.interval * 1000
    const cityView = (city) =>(
        <LinkRouter to={`/city/${city._id}`} className='CityCardLink'>
            <div className='CarouselEvent' key={city.city}>
                <p className='CarouselText'>{city.city}</p>
                <img className='CarouselImg' src={city.photo} alt="" />
            </div>
        </LinkRouter>
    )

    useEffect(() => {
        let id = setInterval(function () {
            next()
        }, interval)

        setIntervalId(id)

        return () => clearInterval(id)
    }, [start])


    function previous (){
        if(start >= range){
            setStart(start-range)
            setEnd(end-range)
        }else{
            setStart(limitSlides-range)
            setEnd(limitSlides)
        }
        clearInterval(intervalId)
    }

    function next (){
        if(end < limitSlides-range){
            setStart(start+range)
            setEnd(end+range)
        }else{
            setStart(0)
            setEnd(range)
        }
        clearInterval(intervalId)
    }


    return (
        <div className='CarouselContainer'>
            <h2 className='CarouselTitle'>Popular MyTineraries</h2>
            <div className='CarouselSlide'>
                <ArrowsCarousel icon={"<"} click={previous} />
                <div className='CarouselContainerImg'>
                    {data?.slice(start, end).map(cityView)}
                </div>
                <ArrowsCarousel icon={">"} click={next} />
            </div>
        </div>
    )
}

export default Carousel