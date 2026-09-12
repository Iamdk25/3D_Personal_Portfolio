import React from 'react'
import { Tooltip } from 'react-tooltip';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    
    <motion.div variants = {fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options = {{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
    <motion.div variants = {textVariant()}>
      <p className={`${styles.sectionHeadText} text-center`}>Work</p>
      <h2 className={`${styles.sectionSubText} mt-4 text-center`}>Projects I have led and shipped</h2>
    </motion.div> 

    <div className='w-full flex'>
      <motion.p variants = {fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-center font-medium text-[17px] max-w-6xl leading-[30px]'>
      Three projects I have built end to end — a deterministic RAG learning platform, a full-stack expense manager used by 1,000+ people, and a predictive market-analysis tool. Each card links to the source on GitHub, and I am always open to collaborating on something new.

      </motion.p>
    </div>

    <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project, index) => (
        <ProjectCard key={index} index={index} {...project} />
      ))}

    </div>
    </>
  )
}

export default SectionWrapper(Works, "projects");