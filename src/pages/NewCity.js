import '../styles/NewCity.css'
import Input from '../components/Input.js'

function newCity (){
    return(
            <div className="NewCityContainer">
                <h1 className='NewCityH1'>New City</h1>
                <div className='FormImgContainer'>
                    <div className="MainNewCity">
                        <Input />
                    </div>
                    <div className='NewCityImgContainer'>
                        <img className='NewCityImg' src="/svg/travelImg.svg" alt="" /> 
                    </div>
                </div>
                
            </div>
    )
}

export default newCity