/**
 * la liste des artciles sur cart doit etre dans un tableau 
 * utiliser .map pour afficher les articles
 * utiliser usestate pour mettre a jour les article sur cart
 */

import React, { useState } from 'react'
import "./Styles/ShowCart.css"
import IconDelete from '../assets/icon-delete.svg'
import basket from '../assets/image-product-1-thumbnail.jpg'
import { useCart } from './DataContext'

export default function ShowCart() {

  const { panier} = useCart()

  // const {articles, setArticles} = useState(['article1','article2','article2'])

  // const DeleteArticle = (DeletingArticle)=>{
  //     const newArticles = articles.filter ((article) => article !== DeletingArticle)
  //     setArticles(newArticles)
  // }
 
  return (
    <div className='CartContainer'>
        <p className='CartContainerTitle'>Cart</p>

        {panier > 0 ?
          <div className='ProductCart'>
            {/*  utiliser .map pour afficher les articles 
            articles.map() */}
              <div className='ProductItem'> 
                  <img  className='ProductItemImg' src={basket} alt="produit" />
                  <p>Fall Limitted Edition sneakers $125.00 x {panier} <span className='TotalPrice'> ${125*panier}.00</span> </p>
                  <img  className='ImgDelete' src={IconDelete} alt="delete"/>
                  {/* <img  className='ImgDelete' src={IconDelete} alt="delete" onClick={()=> DeleteArticle(article a supprimer)} /> */}
              </div>
              <button className='CheckoutBtn' type='button'>Checkout</button>    
          </div> 
          :
          <div className='ProductCartEmpty'>
            <p>Your Cart is Emplty</p>
          </div>
        }
    </div>
  )
}
