import React from 'react'
import image9 from '../images/image9.png'
import image10 from '../images/image10.png'
import image11 from '../images/image11.png'
import image12 from '../images/image12.png'
import './Projects.css'

const Projects = () => {
  return (
    <section className='services bg-white py-5' id='projects'>
    <div className="container-lg">
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="section-title text-center">
                    <h1 className="fw-bold mb-5 text-danger py-3">PROJECTS</h1>
                </div>
            </div>
        </div>
        <div className="row text-center">
            <div className="col-md-6 col-lg-6 p-2">
                <div className="service-item shadow-sm p-1 rounded border border-light">
                    <div className="icon">
                        <img style={{height:'150px'}} src={image9} className='img-fluid' alt="" />
                    </div>
                    <h5>My Portfolio (React.js)</h5>
                    <p className='fs-6'>A simple portfolio app developed using React.js  </p>
                </div>
            </div>

            <div className="col-md-6 col-lg-6 p-2 c1">
            <a  href="https://github.com/RajeevSNair98/task-manager-app--react.js">
            <div className="service-item shadow-sm p-1 rounded border border-light">
                <div className="icon">
                        <img style={{height:'150px'}} src={image10} className='img-fluid' alt="" />
                    </div>
                    <h5>Task Manager (React.js)</h5>
                    <p className='fs-6'>Todo app where we can set our daily tasks</p>
                </div>
            </a>
               
            </div>

            <div className="col-md-6 col-lg-6 p-2 c1">
                <a href="https://github.com/RajeevSNair98/BMI_Calculator---Javascript">
                <div className="service-item shadow-sm p-1 rounded border border-light">
                <div className="icon">
                        <img style={{height:'150px'}} src={image11} className='img-fluid' alt="" />
                    </div>
                    <h5>BMI Calculator (Javascript)</h5>
                    <p className='fs-6'>Calculator which can find the body mass index of our body</p>
                </div>
                </a>
            </div>

            <div className="col-md-6 col-lg-6 p-2 c1">
                <a href="https://github.com/RajeevSNair98/Module_2-3_Blog_website">
                <div className="service-item shadow-sm p-1 rounded border border-light">
                <div className="icon">
                        <img style={{height:'150px'}} src={image12} className='img-fluid' alt="" />
                    </div>
                    <h5>Blog Website (HTML, CSS, Bootstrap, Javascript)</h5>
                    <p className='fs-6'>A simple blog website containing blogs about frontend technologies</p>
                </div>
                </a>
            </div>


        </div>
    </div>
</section>
  )
}

export default Projects
