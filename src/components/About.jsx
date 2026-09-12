import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, description }) => {
  return (
    <Tilt className='xs:w-[280px] w-full'>
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
          className='bg-tertiary rounded-[20px] py-5 px-8 min-h-[280px] flex flex-col items-center justify-start text-center'
        >
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold mt-5'>
            {title}
          </h3>

          <p className='mt-3 text-secondary text-[14px] leading-[22px]'>
            {description}
          </p>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants = {textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
      <h2 className={`${styles.sectionHeadText} text-center mt-2`}>About me.</h2>
    </motion.div>

    <motion.div
      variants = {fadeIn("", "", 0.1, 1)}
      className='mt-8 flex flex-col gap-5 text-secondary text-center text-[17px] max-w-4xl mx-auto leading-[30px]'
    >
      <p>
        I am a Computer Science senior at the University of South Florida — 3.81 GPA, Dean&apos;s
        Honors — graduating in December 2026. I am currently a Software Engineering Intern at
        AbbVie and an AI/ML Research Assistant at USF&apos;s Bellini College of AI, Cybersecurity,
        and Computing.
      </p>
      <p>
        My work sits where machine learning meets the product. I have accelerated drug-discovery
        workflows by 20% with an MLOps pipeline built on I-JEPA PyTorch embeddings, pushed
        bioinformatics dashboards to 1M+ concurrent data points at 60 fps with WebGPU and Web
        Workers, and helped build a CanvasLTI platform that flags at-risk learners with 83.3%
        accuracy. React, TypeScript, Python and FastAPI on the surface; Docker, Kubernetes, AWS and
        CI/CD underneath.
      </p>
      <p className='text-white-100'>
        I am open to full-time software engineering and AI/ML roles.
      </p>
    </motion.div>

    <div className='mt-20 flex flex-wrap gap-10 justify-center'>
      {services.map((service, index) => ( <ServiceCard key = {index} index = {index} {...service} />))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about") // About is the name of the component and "about" is the name of the section in About
