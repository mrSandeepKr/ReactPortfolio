import React from 'react'
import CV from './../../assets/Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download="Sandeep\'s resume" className='btn'>Download CV</a>
        <a href='#contact' className='btn-primary btn'>Let's Talk</a>
    </div>
  )
}

export default CTA