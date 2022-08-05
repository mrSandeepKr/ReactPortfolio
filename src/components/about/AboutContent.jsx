import React from 'react'
import {FaAward, FaProjectDiagram, FaStopwatch20} from 'react-icons/fa'
import AboutCard from './AboutCard'
import AboutDescription from './AboutDescription'
import LetsTalkBtn from '../Common/LetsTalkBtn'

const AboutContent = () => {
  return (
    <div className="about__content">
      <div className='about__cards'>
        <AboutCard title = {'Experience'} subTitle = {'2 Years at MNC'} icon = {FaAward} />
        <AboutCard title = {'Projects'} subTitle = {'10+ projects'} icon = {FaProjectDiagram} />
        <AboutCard title = {'CP'} subTitle = {'Master - 2169 Rating'} icon = {FaStopwatch20} />
      </div>

      <AboutDescription/>
      <LetsTalkBtn/>
    </div>
  )
}

export default AboutContent