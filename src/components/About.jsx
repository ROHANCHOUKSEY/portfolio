import React from 'react' 
// import develop from '../images/developer-removebg-preview.png' 
import Footer from './Footer'

const MainContent = (props) => {

    let myStyle = {
        backgroundColor:props.mode === '#111439' ? '#111439' : 'white',
        color:props.mode === '#111439' ? 'white' : 'black',
    }
    
    return(
    <>  
        <div className='maincontent'>
            <p className='headding'>WELECOME TO MY PORTFOLIO</p>
            <div className="intro-skill-container">
            <div className="intro" style={myStyle}>
            Hi, My name is <span style={{ color: 'purple', gap: '1px' }}> Rohan Chouksey</span>,
            <br/>I am Currently Pursuing My B.Tech Degree In Computer Science and Engineering<br/> at Laxmi Narain College Of Technology And Science.
            </div>
            {/* <img src={develop} alt="Developer" className="developer-img" /> */}
            <div className="academic-info" style={myStyle}>
                        <h2>Academic Information</h2>
                        <p>4th Year Student</p>
                        <p>7th Semester</p>
                        <p>Current CGPA: 8.53</p>
            </div>
            </div>


        <div className="skill">
            <div className='skills'>MY JOURNEY THROUGH TECHNOLOGY HAS EQUIPPED ME WITH A VERSATILE SKILL SET, INCLUDING:</div>
        </div>
        
        
        <div class="accordion" id="accordionExample" style={{width:'51%', marginLeft:'2%', marginTop:'2%'}}>
                <div class="accordion-item" style={{border:'none'}}>
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                PROGRAMMING LANGUAGE
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                <ul>
                    <li>C/C++</li>
                    <li>Java</li>
                    <li>Object Oriented Programming</li>
                </ul>
                </div>
                </div>
                </div>
                <div class="accordion-item" style={{border:'none'}}>
                <h2 class="accordion-header" >
                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                WEB DEVELOPMENT
                </button> 
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>Figma(Ui/Ux)</li>
                </ul>
                </div>
                </div>
                </div>
                <div class="accordion-item" style={{border:'none'}}>
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                PROBLEM SOLVING
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                <ul>
                    <li>Leet Code(150+ Question)</li>
                    <li>Geeks For Geeks</li>
                    <li>Hacker Rank</li>
                </ul>
                </div>
                </div>
                </div>

                <div class="accordion-item" style={{border:'none'}}>
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                PROJECT
                </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                <ul>
                    <li>Ecommerce Website</li>
                    <li>Chat Hub</li>
                    <li>Text Utils</li>
                    <div className='project_details'> "If you want to explore this projects, you can visit the Project Section"</div>
                </ul>
                </div>
                </div>
                </div>  
        </div>
        
        <Footer/>
        </div>
    </>
    )
}

export default MainContent;  