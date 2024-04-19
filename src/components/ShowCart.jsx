import React from 'react'
import "./Styles/ShowCart.css"
import IconDelete from '../assets/icon-delete.svg'
import basket from '../assets/image-product-1-thumbnail.jpg'

export default function ShowCart({OpenCart}) {
  return (
    <div className='CartContainer'>
        <p className='CartContainerTitle'>Cart</p>
        <div className='ProductCart'>
            <div className='ProductItem'>
                <img  className='ProductItemImg' src={basket} alt="produit" />
                <p>Fall Limitted sneakers </p>
                <img  className='ImgDelete' src={IconDelete} alt="delete" />
            </div>
            <button className='CheckoutBtn' type='button'>Checkout</button>    
        </div>
    </div>
  )
}
