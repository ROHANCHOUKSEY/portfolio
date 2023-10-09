import React from 'react'
// import loc from '../images/location-removebg-preview.png'
import loc from '../images/1.png'
// import mob from '../images/mobile-removebg-preview.png'
import mob from '../images/2.png'
// import whatapp from '../images/whatsapp-removebg-preview.png'
import whatapp from '../images/3.png'
// import mail from '../images/mail.png'
import mail from '../images/4.png'
import lik from '../images/linkdin-removebg-preview.png'
import git from '../images/github-removebg-preview.png'
import insta from '../images/insta-removebg-preview.png'
import Footer from './Footer'
 
const Contact = (props) => {
  return (
    <>
    <div className='contactHeading'>CONTACT US</div>
    <div className="container">
      <div className='address'>
          <h2 className='information text-danger'><img src={loc} style={{height:'67px'}} alt="" />ADDRESS</h2>
          <p className={`full_add text-${props.mode==='#111439'?'light':'dark'}`}>Narsinghpur,Madhya Pradesh</p>
      </div>
      
      <div className="mobile">
      <h2 className= 'information text-danger' ><img src={mob} style={{height:'49px', marginRight:'13px'}} alt=""/>MOBILE</h2>
      <p className={`mobileno text-${props.mode==='#111439'?'light':'dark'}`}>7898924256</p>
      </div>

      <div className="whatapp">
      <h2 className= 'information text-danger'><img src={whatapp} style={{height:'40px', marginRight:'13px'}} alt="" />WHAT'SAPP</h2>
      <p className={`whatappno text-${props.mode==='#111439'?'light':'dark'}`}>7898924256</p>
      </div>

      <div className="email">
      <h2 className= 'information text-danger'><img src={mail} style={{height:'66px', marginRight:'4px'}} alt="" />EMAIL</h2>
      <p className={`email_id text-${props.mode==='#111439'?'light':'dark'}`}>rohanchouksey02@gmail.com</p>
      </div>
    </div>

    <h2 className='follow'>Other Contacts</h2>

    <div className="type_follow">
    <a href="https://www.linkedin.com/in/rohan-chouksey-9a7995203" target="_blank" rel="noopener noreferrer">
    <img src={lik} style={{height:'32px', width:'32px', backgroundColor:'black', borderRadius: '11px'}} alt="LinkedIn Logo" />
    </a>

    <a href="https://github.com/ROHANCHOUKSEY" target="_blank" rel="noopener noreferrer">
    <img src={git} style={{height:'32px', width:'32px', backgroundColor:'black', borderRadius: '11px'}} alt="LinkedIn Logo" />
    </a>
    
    <a href="https://www.instagram.com/rohanchouksey02/" target="_blank" rel="noopener noreferrer">
    <img src={insta} style={{height:'32px', width:'32px', backgroundColor:'black', borderRadius: '11px'}} alt="LinkedIn Logo" />
    </a>

    </div>
    
    <div className={`formcontainer bg-${props.mode === 'light' ? '#111439' : 'light'}`}>
      <p className='send-message'>Send Message</p>
      <p className='Name_heading'>Name</p>
      <div className="form_name">
      <input type='text'  placeholder='First Name'/>
      <input type='text'  placeholder='Last Name'/>
      </div>
      <p className='Email_heading'>Email</p>
      <input  type="text" className='Email' placeholder='Email'/>
      <p className='Message_heading'>Message</p>
      <textarea className='Message' />
      <button type='button' className='send_button'>Send Message</button>
    </div> 
    <Footer/>
    </>
  ) 
}

export default Contact 