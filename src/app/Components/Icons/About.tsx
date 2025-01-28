import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import DownArrow2 from './DownArrow2'
import Title from '../Title'

const About = () => {
  return (
    <section className="h-screen w-full bg-white" >
      <Wrapper>
        <div className="mt-40">
        <Title color="black" h3Text="Esto es lo" spanText=" que hacemos" inline={false}/>

          <div className='flex items-baseline'>
          <h4 className="mt-6  text-orangeColor text-[19px] font-semibold leading-normal tracking-[6.46px] uppercase">NUESTROS SERVICIOS </h4>
          <span className="flex justify-center items-center bg-grayLight rounded-full w-12 h-12"><DownArrow2/></span>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default About