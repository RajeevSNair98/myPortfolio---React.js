import React from 'react'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faAddressBook} from '@fortawesome/free-regular-svg-icons'


const Contact = () => {

            function sendEmail(e){
                e.preventDefault();
               
                let name = document.getElementById('name').value;
                let email = document.getElementById('email').value;
                let subject = document.getElementById('subject').value; 
                let message = document.getElementById('message').value; 
                let alertBox = document.getElementById('alert');

       
                if(name.length <= 2){
                    alertBox.innerText = 'Please enter your Name'
                    alertBox.style.display = 'block'
                }else if(!email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)){
                    alertBox.innerText = 'Please enter your Email'
                    alertBox.style.display = 'block'
                }else if(subject.length === 0){
                    alertBox.innerText = 'Please enter a Subject'
                    alertBox.style.display = 'block'
                }else if(message.length === 0){
                    alertBox.innerText = 'Please enter a Message'
                    alertBox.style.display = 'block'
                }
                else{
                        alertBox.classList.remove('alert-danger')
                        alertBox.classList.add('alert-success')
                        alertBox.innerText = 'Email sent. Will response to your queries shortly.'

                    setTimeout(function(){
                        alertBox.style.display = 'none'
                        alertBox.innerHTML = ''
                        alertBox.classList.remove('alert-success')
                        alertBox.classList.add('alert-danger')
                    }, 3000);

                    emailjs.sendForm('gmail', 'template_jtzl4sa', e.target , 'LiqAnH0Bnf6vI_2m5')
                    .then((result) => {
                    console.log(result.text);
                   }, (error) => {
                      console.log(error.text);
                    });
                     e.target.reset()
                     alert('Email sent successfully')
                }
            

            }

  return (
    <section className='contact py-5' id='contact'>
        <div className="container-lg py-4">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title text-center">
                    <h1 className="fw-bold mb-5 text-danger">CONTACT ME</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <div className="contact-item d-flex mb-3">
                        <div className="icon fs-4 text-danger">
                        <FontAwesomeIcon icon={faEnvelope} beatFade/>
                        </div>
                        <div className="text ms-3">
                            <h3 className='fs-5'>Email</h3>
                            <p className='text-muted'>rajeev.mpdm@gmail.com</p>
                        </div>
                    </div>

                    <div className="contact-item d-flex mb-3">
                        <div className="icon fs-4 text-danger">
                        <FontAwesomeIcon icon={faPhone} shake/>
                        </div>
                        <div className="text ms-3">
                            <h3 className='fs-5'>Phone</h3>
                            <p className='text-muted'>+91-7356595491</p>
                        </div>
                    </div>

                    <div className="contact-item d-flex mb-3">
                        <div className="icon fs-4 text-danger">
                        <FontAwesomeIcon icon={faAddressBook} beatFade/>
                        </div>
                        <div className="text ms-3">
                            <h3 className='fs-5'>Linkedin Id :</h3>
                            <a href='http://www.linkedin.com/in/rajeev-s-nair' className='text-muted'>www.linkedin.com/in/rajeev-s-nair</a>
                        </div>
                    </div>

                    <div className="contact-item d-flex mt-5 mb-3">
                        <div className="icon fs-4 text-danger">
                        <FontAwesomeIcon icon={faAddressBook} beatFade/>
                        </div>
                        <div className="text ms-3">
                            <h3 className='fs-5'>Github link :</h3>
                            <a href='https://github.com/RajeevSNair98' className='text-muted'>https://github.com/RajeevSNair98</a>
                        </div>
                    </div>

                </div>
                <div className="col-md-7">
                    <div className="contact-form">
                        <form onSubmit={sendEmail}>
                        <span className='alert alert-danger w-50' id='alert' style={{display:'none'}}>Enter your name</span>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                   <input type="text" className='form-control form-control-lg fs-6 border-0 shadow-sm'
                                    placeholder='Your Name' name='name' id='name' /> 
                                </div>
                                <div className="col-lg-6 mb-4">
                                <input type="email" className='form-control form-control-lg fs-6 border-0 shadow-sm'
                                    placeholder='Your Email' name='email' id='email' /> 
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mb-4">
                                <input type="text" className='form-control form-control-lg fs-6 border-0 shadow-sm'
                                    placeholder='Subject' name='subject' id='subject' /> 
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mb-4">
                                <textarea rows={5} className='form-control form-control-lg fs-6 border-0 shadow-sm'
                                    placeholder='Your Message' name='message' id='message'/> 
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <button type='submit' className='btn btn-danger px-3'>Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}


export default Contact
