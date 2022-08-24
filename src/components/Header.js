import '../styles/Header.css'
import React from 'react'
import {Link as LinkRouter} from  'react-router-dom'

function Header() {
  let Pages = [
    {name: 'Home', to: '/'},
    {name: 'Cities', to: '/cities'},
    {name: 'New City', to: '/newcity'},
  ]

  return (
    <div className='HeaderContainer'>
      <img src='https://simg.nicepng.com/png/small/212-2121737_vinilo-decorativo-palmera-palm-tree-in-the-sunset.png' alt='logo' className='LogoImg'/>
      <div className='HeaderNav'>
        {Pages.map(page => <LinkRouter to={page.to} className='TextDecoration'>{page.name}</LinkRouter>)}
      </div>
        <p>Log In!</p>
        <img src='https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png' alt='user' className='UserImg'/>
    </div>
  )
}
  export default Header
