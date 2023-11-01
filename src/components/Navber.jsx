import React from "react";
import { Link } from "react-router-dom";

const Navber = (props) => {
  return (
    <>
      <nav className={`navber navber-${props.mode} bg-${props.mode}`}>
        <div className="topleft">
          <div className="name" style={{color:'cadetblue'}}>{props.name}</div>
        </div>
        <div className="topright">
          <Link className={`about text-${props.mode==='light'?'black':'light'}`} to={'/'}>{props.about}</Link>
          <Link className={`contact text-${props.mode==='light'?'black':'light'}`} to={'/contact'} >{props.contact}</Link>
          <Link className={`project text-${props.mode==='light'?'black':'light'}`} to={'/project'}>{props.project}</Link>
          <Link className={`project text-${props.mode==='light'?'black':'light'}`} to={'/design'}>{props.design}</Link>
          <div className={`form-check form-switch text-${props.mode==='light'?'black':'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.tooglemode} role="switch" id="flexSwitchCheckDefault"/>
              <label className={`form-check-label`}  htmlFor="flexSwitchCheckDefault">{props.btn}</label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navber;
