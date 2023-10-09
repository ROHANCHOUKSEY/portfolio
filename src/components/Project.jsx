import React from 'react'
import ecommerce from '../images/ecommerce.png'
import chat_hub from '../images/chat.png'
import text_utils from '../images/textutils.png'
import gethub from '../images/git_hub (1).png'
import Footer from '../components/Footer'
 
const Project = (props) => {

  let footerStyle = {
    color:props.mode==='#111439'?'white':'black'
  }

  return (
    <div>
      <div className='project_intro'>Projects</div>

      <div className="projects">
        <div className="project-box">
          <h1 className='project-heading'  style={{ marginBottom: '10px' }}>
            AudioHaven Hub
          </h1>
          <img src={ecommerce} alt='' className='project_image'/>
          <div className="project-details">
            <p>
              I developed <strong>AudioHaven Hub</strong>, an Ecommerce Website where customers can purchase a wide range of electronic products, including mobile phones, headphones, laptops, and many more. The primary goal was to create a user-friendly platform that enables seamless online shopping. The website incorporates Stripe for secure online payments.
            </p>
          </div>
          <a href="https://github.com/ROHANCHOUKSEY/new_shopping" target="_blank" rel="noopener noreferrer" className="github-link">
              <img  src={gethub} alt="GitHub icon" className="github-icon" style={{ width: '20px', height: '20px' }} />
          </a>
        </div>

        <div className="project-box">
          <h1 className='project-heading'  style={{ marginBottom: '10px' }}>Fast Chat</h1>          
          <img src={chat_hub} alt='' className='project_image'/>
          <div className="project-details">
            <p>
            <strong>Fast Chat</strong> is a real-time chat application that allows users to communicate with each other through text messages and share images. The primary goal was to create a seamless and user-friendly chat experience for individual.            
            </p>
          </div>
          <a href="https://chat-hub-rho.vercel.app/login" target="_blank" rel="noopener noreferrer" className="github-link" style={{marginLeft:'10px'}}>
              Visit Here
          </a>
        </div> 

        <div className="project-box">
          <h1 className='project-heading' style={{ marginBottom: '10px' }}>Text Utils</h1>
          <img src={text_utils} alt='' className='project_image'/>
          <div className="project-details">
            <p>
              <strong>TextUtils</strong> is a web-based text utility application that offers a range of text manipulation and analysis tools. With TextUtils, users can easily convert text to Uppercase and Lowercase, Copy Sentences,Clear the Text,Remove Special Character, Reverse Text,count words and Characters,  Remove extra spaces, and even estimate how many minutes it takes to read a given text.
            </p>
          </div>
          <a href="https://text-utils-lovat-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className="github-link" style={{marginLeft:'10px'}}>
              Visit Here
          </a>
        </div>


      </div>
      <div className="footer" style={footerStyle}>
      <Footer/>
      </div>
    </div>
  ) 
}

export default Project