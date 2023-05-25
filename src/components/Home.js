import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Typewriter} from 'react-simple-typewriter';
import {motion} from 'framer-motion';
import './Home.css'
import image1 from '../images/image1.jpg'


const Home = () => {

  const name = 'Rajeev S Nair'

  return (
   <section className='home' id='home'>
    <div className="container-lg">
        <div className="row min-vh-100 align-items-center align-content-center hc-1">
            <div className="col-md-6 ">
                <motion.div className="home-img text-center"
                 initial={{opacity:0}}
                 animate={{opacity:1}}
                 transition={{delay:.1, duration:2}}
                >
                    <motion.img animate={{}} src={image1} alt="" className='rounded-circle mw-100' />
                </motion.div>
            </div>
                <div className="col-md-6 order-md-first">
                    <div className="home-text mx-5">
                        <p className='text-white mb-1'>Hello I'm</p>
                        <h1 className='text-danger text-uppercase fs-1 fw-bold'>{name}</h1>
                        <h2>
        <span style={{ color: 'white' }}>
          <Typewriter
            words={['MERN Stack Developer', 'React Developer', 'Node.js Developer', 'Frontend Designer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={50}
            deleteSpeed={100}
            delaySpeed={500}
          />
        </span>
      </h2>
                        <p className='mt-4 text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="http://www.linkedin.com/in/rajeev-s-nair">
                    <button className='btn btn-primary px-3 mt-3' >See my Linkedin profile</button>
                    </a>
                    
                    </div>
                </div>
        </div>
    </div>
   </section>
  )
}

export default Home
