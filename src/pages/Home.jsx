import React, { useState } from 'react'
import Header from '../components/Header'
import ImageProduct from '../components/ImageProduct'
import ImageDescription from '../components/ImageDescription'
import Cart from '../components/Cart'
import Slider from '../components/Slider'
import Img1Bg from '../assets/image-product-1.jpg'
import Img2Bg from '../assets/image-product-2.jpg'
import Img3Bg from '../assets/image-product-3.jpg'
import Img4Bg from '../assets/image-product-4.jpg'
import Img1Sm from '../assets/image-product-1-thumbnail.jpg'
import Img2Sm from '../assets/image-product-2-thumbnail.jpg'
import Img3Sm from '../assets/image-product-3-thumbnail.jpg'
import Img4Sm from '../assets/image-product-4-thumbnail.jpg'

// créer un taleau qui contient les images
const DataImage = [[Img1Bg, Img1Sm],[Img2Bg, Img2Sm],[Img3Bg, Img3Sm],[Img4Bg, Img4Sm]]

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <ImageProduct data={DataImage}/>
        <Slider ImageEnCours={DataImage[0][0]} data={DataImage} IsMobile={true}/>
        <section className='DecriptionContainer'>
            <ImageDescription /> 
            <Cart />
        </section>
      </main>
    </>
  )
}
