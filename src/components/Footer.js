import '../styles/Footer.css'
import {Link as LinkRouter} from  'react-router-dom'

export default function Footer() {
    let Pages = [
        {name: 'Home', to: '/'},
        {name: 'Cities', to: '/cities'},
        {name: 'New City', to: '/newcity'},
    ]

    const ButtonToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
            <div className='FooterContainer'>
                <div className='FooterTop'>
                    <div className='FooterNav'>
                        <h3 className='FooterH3'>Useful Links :</h3>
                        {Pages.map(page => <LinkRouter to={page.to} className='FooterLink'>{page.name}</LinkRouter>)}
                    </div>
                    <div className='FooterSocialLink'>
                        <LinkRouter to="#"><img className='FooterImg' src="/svg/whatsapp.svg" alt=""/></LinkRouter>
                        <LinkRouter to="#"><img className='FooterImg' src="/svg/instagram.svg" alt=""/></LinkRouter>
                        <LinkRouter to="#"><img className='FooterImg' src="/svg/facebook.svg" alt=""/></LinkRouter>
                    </div>
                </div>
                <div>
                    <p className='FooterText'>MyTinerary Sosa-Teruel || Cohort-32</p>
                </div>
                <button onClick={ButtonToTop} className='FooterButton'><img src="/svg/upArrow.svg" alt="" /></button>
            </div>
    )
}

