import '../styles/CallToAction.css'
import {Link as LinkRouter} from 'react-router-dom'

function callToAction (){
    return(
        <>
        <h3 className='CallH3'>Discover a New World</h3>
        <LinkRouter to='cities' className='CallButton'><strong>Show Me!</strong></LinkRouter>
        </>
    )
}
export default callToAction