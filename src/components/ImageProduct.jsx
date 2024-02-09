import React, { useState } from 'react'
import Slider from './Slider'
import './Styles/ImageProduct.css'


export default function ImageProduct(props) {
  const [ImgBg, BigImage]= useState(props.data[0][0])
  const [IsSlider, SetOpenSlider] = useState(false)

  const SetBigImage = (ImgLink)=>{
    BigImage(ImgLink)
  }

  return (
    <>
    <figure className='ImageContainer'>
        <img className='BigImage' src={ ImgBg} alt="photos de chaussure" onClick={()=>  SetOpenSlider(true)}/>
        <div className='ImageItems'>
          <div className='ImgContainer' onClick={()=> SetBigImage(props.data[0][0])}>
            <img src={props.data[0][1]} alt="photos de chaussure" />
          </div>
          <div className='ImgContainer' onClick={()=> SetBigImage(props.data[1][0])}>
            <img src={props.data[1][1]} alt="photos de chaussure" />
          </div>
          <div className='ImgContainer' onClick={()=> SetBigImage(props.data[2][0])}>
            <img src={props.data[2][1]} alt="photos de chaussure" />
          </div>
          <div className='ImgContainer' onClick={()=> SetBigImage(props.data[3][0])}>
            <img src={props.data[3][1]} alt="photos de chaussure" />
          </div>
        </div>
    </figure>
            
    {IsSlider &&  <Slider OpenSlider={SetOpenSlider} ImageEnCours={ImgBg} data={props.data} IsMobile={false}/> }
    </>
  )
}
