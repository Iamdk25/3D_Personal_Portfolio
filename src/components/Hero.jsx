import React from 'react'
import { motion } from "framer-motion";

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className= "flex flex-col justify-center items-center mt-5">
          <div className= "w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className= "w-1 sm:h-80 h-40 violet-gradient" />
        </div>
      
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> Hi, I&apos;m <span className = "text-[#915eff]">Divyarajsinh.</span></h1>
          <p className= {`${styles.heroSubText} mt-2 text-white-100`}>
            I build full-stack AI systems — PyTorch and RAG pipelines behind
            React interfaces that stay fast at a million data points.
          </p>
          <p className='mt-6 text-secondary text-[14px] sm:text-[17px] leading-[26px] max-w-2xl'>
            Software Engineering Intern at AbbVie · AI/ML Research Assistant at USF ·
            Computer Science senior graduating December 2026
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
     
  )
}

export default Hero
