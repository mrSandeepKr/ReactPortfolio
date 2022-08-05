import React from 'react'
import AboutMeImg from './../../assets/aboutMeImg.jpeg'

const AboutMeImage = () => {
  return (
    <div className='about__me'>
      <div className= 'about__me-image'>
          <img src ={AboutMeImg} alt='About Image'/>
      </div>
    </div>
  )
}

export default AboutMeImage