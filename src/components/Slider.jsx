import React, { useState } from 'react'
import './Styles/Slider.css'
import IconClose from '../assets/icon-close.svg'
import NextIcon from '../assets/icon-next.svg'
import PreviousIcon from '../assets/icon-previous.svg'

function indexOf2DArray(array, value) {
  for (let i = 0; i < array.length; i++) {
      let innerArray = array[i];
      for (let j = 0; j < innerArray.length; j++) {
          if (innerArray[j] === value) {
              return i
          }
      }
  }
  return -1 ; // Retourne -1 si l'élément n'est pas trouvé
}

export default function Slider({OpenSlider, ImageEnCours, data, IsMobile}) {

  const index = indexOf2DArray(data,ImageEnCours)

  const [currentIndex, SetCurrentIndex] = useState(index)
  const [CurrentImage, SetCurrentImage]= useState(ImageEnCours)

  const NextPicture = () => {
    if(currentIndex == 3){
      SetCurrentIndex(0)
      SetCurrentImage(data[0][0])
    } 
    else{
      SetCurrentImage(data[currentIndex+1][0])
      SetCurrentIndex(currentIndex + 1)
    }
  }
  const PreviousPicture = () => {
    if(currentIndex == 0){
      SetCurrentIndex(3)
      SetCurrentImage(data[3][0])
    } 
   else{
    SetCurrentImage(data[currentIndex - 1][0]) 
    SetCurrentIndex(currentIndex - 1)
   } 
   
  }

  return (
    <>
      {IsMobile ? 
        <div className='SlideImageContainerMobile' > 
          <img className='CurrentImage' src={CurrentImage} alt="" />
          <div className='Next' onClick={NextPicture}> <img  src={NextIcon} alt="Next Picture" /></div>
          <div className='Previous' onClick={PreviousPicture}> <img  src={PreviousIcon} alt="Previous Picture" /></div>   
        </div>
      :
        <div className='SliderContainer'>  
            <div className='SlideImageContainer' > 
                <div className='CloseButton' onClick={() => { OpenSlider(false)} }> 
                    <img src={IconClose} alt="" />
                </div>
                <img className='CurrentImage' src={CurrentImage} alt="" />
                <div className='Next' onClick={NextPicture}> <img  src={NextIcon} alt="Next Picture" /></div>
                <div className='Previous' onClick={PreviousPicture}> <img  src={PreviousIcon} alt="Previous Picture" /></div>   
            </div>

            <div className='ImageItemsSlider'>
              <div className='ImgSliderContainer'
                   onClick={()=> { SetCurrentImage(data[0][0])
                                   SetCurrentIndex(0) }}>
                <img src={data[0][1]} alt="photos de chaussure" />
              </div>
              <div className='ImgSliderContainer' 
                   onClick={()=> { SetCurrentImage(data[1][0])
                                   SetCurrentIndex(1)}}>
                <img src={data[1][1]} alt="photos de chaussure" />
              </div>
              <div className='ImgSliderContainer'
                   onClick={()=> { SetCurrentImage(data[2][0])
                                   SetCurrentIndex(2)}}>
                <img src={data[2][1]} alt="photos de chaussure" />
              </div>
              <div className='ImgSliderContainer' 
                   onClick={()=>{ SetCurrentImage(data[3][0])
                                  SetCurrentIndex(3)}}>
                <img src={data[3][1]} alt="photos de chaussure" />
              </div>
            </div>
        </div>
      }
    </>
  )
}
