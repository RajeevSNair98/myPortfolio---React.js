import React from 'react'
import './WhatiDo.css'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'
import image7 from '../images/image7.png'
import image8 from '../images/image8.png'

const WhatiDo = () => {
  return (
    <section className='whatido bg-white py-5' id='services'>
        <div className="container-lg">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title text-center">
                        <h1 className="fw-bold mb-5 text-danger py-3">SERVICES</h1>
                    </div>
                </div>
            </div>
            <div className="row text-center ">
                <div className="col-md-6 col-lg-4 p-2">
                    <div className="item shadow-sm p-1 rounded">
                        <div className="icon">
                            <img style={{height:'150px'}} src={image3} className='img-fluid' alt="" />
                        </div>
                        <h5>Web Development</h5>
                        <p className='fs-6 text-muted'> Create user-friendly and efficient websites that are visually appealing and easy to navigate</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 p-2">
                    <div className="item shadow-sm p-1 rounded">
                    <div className="icon">
                            <img style={{height:'150px'}} src={image4} className='img-fluid' alt="" />
                        </div>
                        <h5>Frontend Development</h5>
                        <p className='fs-6 text-muted'>Great web design without functionality is like a sports car with no engine</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 p-2">
                    <div className="item shadow-sm p-1 rounded">
                    <div className="icon">
                            <img style={{height:'150px'}} src={image5} className='img-fluid' alt="" />
                        </div>
                        <h5>Backend Development</h5>
                        <p className='fs-6 text-muted'>Development and maintenance of the central database,ensuring requests from the frontend</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 p-2">
                    <div className="item shadow-sm p-1 rounded">
                    <div className="icon">
                            <img style={{height:'150px'}} src={image6} className='img-fluid' alt="" />
                        </div>
                        <h5>Hosting</h5>
                        <p className='fs-6 text-muted'>Stores and maintains website files on server, making it accessible on the internet</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 p-2">
                    <div className="item shadow-sm p-1 rounded">
                    <div className="icon">
                            <img style={{height:'150px'}} src={image7} className='img-fluid' alt="" />
                        </div>
                        <h5>Ad Design</h5>
                        <p className='fs-6 text-muted'>Able to create effective and innovative designs to convey desired idea</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 p-2">
                    <div className="item shadow-sm p-1 rounded">
                    <div className="icon">
                            <img style={{height:'150px'}} src={image8} className='img-fluid' alt="" />
                        </div>
                        <h5>Web Development</h5>
                        <p className='fs-6 text-muted'>Give your company an identity so you can grow your business</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default WhatiDo
