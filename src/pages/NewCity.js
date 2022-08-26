import '../styles/NewCity.css'
import Input from '../components/Input.js'

function newCity (){
    return(
            <div className="newCityContainer">
                <h1 className='NewCityH1'>New City</h1>
                <div className="mainNewCity">
                    <Input className='InputNewCity'/>
                </div>
            </div>
    )
}

export default newCity