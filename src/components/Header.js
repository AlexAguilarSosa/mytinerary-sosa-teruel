import '../styles/Header.css'
import React, { useState } from 'react'
import {Link as LinkRouter} from  'react-router-dom'

function Header() {
  let Pages = [
    {name: 'Home', to: '/'},
    {name: 'Cities', to: '/cities'},
    {name: 'New City', to: '/newcity'},
  ]
  
  const [open, setOpen] = useState(false)
  
  const handleOpenMenu = () => {
    if (open){
      setOpen(false)
    } else {
      setOpen(true)
    }
  }
  
  return (
    <div className='HeaderContainer'>
      <button className='buttonNavbar TextDecorationBurger' onClick={handleOpenMenu}>
        <img className='imgBurger' src='img/menulogo.png' alt='burger'></img>
      <div>
        {
          open ? <div>
            {Pages.map(page => 
              <LinkRouter to={page.to} className='TextDecorationBurger menuLinks'>{page.name}</LinkRouter>
            )}
          </div> : null
        }
      </div>
      </button>
      <img src='img/palm-tree.png' alt='logo' className='LogoImg'/>
      <div className='HeaderNav'>
        {Pages.map(page => <LinkRouter to={page.to} className='TextDecoration'>{page.name}</LinkRouter>)}
      </div>
        <div className='imgPConteiner'>
          <div  className='ImgP'>
            <p>Log In</p>
          </div>
            <img src='img/user.png' alt='user' className='UserImg'/>
        </div>
    </div>
  )
}
  
export default Header