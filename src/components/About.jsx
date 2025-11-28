import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.5)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 90,
            scale: 100,
            speed: 1000,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants = {textVariant()}>
      <p className={`${styles.sectionHeadText} text-center`}>Introduction</p>
      <h2 className={`${styles.sectionSubText} mt-4 text-center`}>Overview</h2>
    </motion.div>

    <motion.p variants = {fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-center text-[17px] max-w-10xl leading-[30px]'>
I am the best student ever. Saksham and Anubhav are not my friends.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => ( <ServiceCard key = {index} index = {index} {...service} />))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about") // About is the name of the component and "about" is the name of the section in About