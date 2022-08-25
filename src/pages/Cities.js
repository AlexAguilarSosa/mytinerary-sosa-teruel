import CardEvents from '../components/CardEvents'
import '../styles/Cities.css'


function cities (){
    return(
            <div className='CitiesContainer'>
                <h1 className='CitiesH1'>Cities</h1>
                <div className='mainCities'>
                    <CardEvents />
                </div>
            </div>
    )
}

export default cities