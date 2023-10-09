import React from 'react'

const Footer = (props) => {
  return (
    <div className={`footer text-${props.mode==='#111439' ? 'light' : 'dark'}`}>
        <p>© 2023 Copyright : Portfolio.com</p>
    </div>
  )
}

export default Footer