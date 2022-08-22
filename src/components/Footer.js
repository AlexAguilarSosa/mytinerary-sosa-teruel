import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
    return (
            <div className='FooterContainer'>
                <div>
                    <a href="#"><img className='FooterImg' src="/svg/whatsapp.svg" alt=""/></a>
                    <a href="#"><img className='FooterImg' src="/svg/instagram.svg" alt=""/></a>
                    <a href="#"><img className='FooterImg' src="/svg/facebook.svg" alt=""/></a>
                </div>
                <p className='FooterText'>
                MyTinerary Sosa-Teruel || Cohort-32
                </p>
            </div>
    )
}

