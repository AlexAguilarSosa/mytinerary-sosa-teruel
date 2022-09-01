import '../styles/HeroPage.css'
import CallToAction from '../components/CallToAction.js';
import CarouselEvents from '../components/CarouselEvents';


export default function HeroPage() {
    return (
        <>
        <div className='HeroContain'>
            <h1 className='HeroH1'>MyTinerary</h1>
            <CallToAction />
        </div>
            <div className='CarouselContainer'>
                <CarouselEvents />
            </div>
        </>
    )
}
