import React from 'react'
import { motion } from 'framer-motion'
import image2 from '../images/image2.jpg'

const About = () => {
  return (
    <section id='about' className='about_wrapper py-5'>
        <div className="container">
            <div className="row align-items-center">
                <motion.div className="col-md-6"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:.1, duration:1}}
                >
                    <img src={image2} animate={{}} className='img-fluid' style={{height:'700px'}} alt="" />  
                </motion.div>
                <motion.div className="col-md-6"
                 initial={{opacity:0}}
                 animate={{opacity:1}}
                 transition={{delay:.1, duration:2}}
                 >
                    <h1 className='text-center text-danger fw-bold'>ABOUT ME</h1>
                    <h4 className='py-3 text-center'>i'm a Fresher Developer</h4>
                    <p className='fs-6'>As a MERN Stack Developer, my objective is to leverage my skills in MongoDB, ExpressJS, ReactJS, and NodeJS to design and develop web applications that meet the needs of businesses and users alike.
                    </p>
                    <p className='fs-6'>I constantly learn and stay up-to-date with the latest technologies and industry trends to create efficient, scalable, and maintainable solutions that deliver exceptional user experiences.
                    </p>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default About
