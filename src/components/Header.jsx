import React from 'react'
import ImageAvatar from '../assets/image-avatar.png'
import IconCart from '../assets/icon-cart.svg'
import IconMenu from '../assets/burger-menu-svgrepo-com.svg'
import logo from '../assets/logo.svg'
import './Styles/Header.css'
import { useCart } from './DataContext'

function Header() {

  const { panier} = useCart()
 
  return (
    <header >
        <div className='leftNav'>
          <img className='MenuMobile' src={IconMenu} alt="menu mobile" />
          <img src={logo} alt="" />
            <ul className='menu'>
                <li>Collections</li>
                <li>Men</li>
                <li>Woman</li>
                <li>About</li>
                <li>Contact</li>
            </ul> 
        </div>
        <div className='rightNav'>
          <div className='panier'>
           {panier !=0  && <span className='cart'>{panier}</span>} 
            <img src={IconCart} alt="icone de panier" className='iconePanier'/>
          </div>
            
            <img src={ImageAvatar} alt='photo de profil' className='avatar'/>
        </div>
    </header>
  )
}

export default Header