import React, {useState} from 'react'
import Navber from './components/Navber'
import MainContent from './components/About'
import Contact from './components/Contact';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Project from './components/Project';

const App = () => {

const [mode, setMode] = useState('light');
const[btn, setBtn] = useState("Enable Dark Mode")

const tooglemode = () => {
  if(mode === 'light')
  {
    setMode('#111439');
    setBtn('Enable Light Mode');
    document.body.style.backgroundColor = '#111439';
  }else{
    setMode('light');
    setBtn('Enable Dark Mode');
    document.body.style.backgroundColor = 'white';
  }
}

  return (
    <>
    <Router>
    <Navber name="Portfolio" about="About Us" contact="Contact Us" project="Project" mode={mode} tooglemode={tooglemode} btn={btn}/>
    <Routes>
      <Route path='/' element={<MainContent mode={mode}/>}></Route>
      <Route path='/contact' element={<Contact mode={mode}/>}></Route>
      <Route path='/project' element={<Project mode={mode}/>}></Route>
    </Routes>
    </Router>
    
    </>
  )
}

export default App