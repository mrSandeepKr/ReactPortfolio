import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {SiCodeforces} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/sandeep-kumar-3a26a6194/' target='blank'><BsLinkedin/></a>
        <a href='https://github.com/mrSandeepKr' target='blank'><BsGithub/></a>
        <a href='https://codeforces.com/profile/n00bmaster69' target='blank'><SiCodeforces/></a>
    </div>
  )
}

export default HeaderSocials