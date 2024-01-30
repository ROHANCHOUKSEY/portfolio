import React from "react";
import Footer from "./Footer";
import mailImage from "../images/email.png";
import mobileImage from "../images/mobile.png";
import whatsappImage from "../images/what'app.png";
import addressImage from "../images/location.png";
import linkedinImage from "../images/linkdin.png";
import githubImage from "../images/github.png";

const Contact = (props) => {
  let footerStyle = {
    color: props.mode === "#111439" ? "white" : "black",
  };

  let changecolor = {
    color: props.mode === "#111439" ? "white" : "black",
  };

  return (
    <div>
      <h1 className="heading_Contact">Contact Us</h1>

      <div className="contact-container">
        <div className="contact-images">
          <div className="contact-image">
            <img src={mailImage} alt="Mail" />
            <p style={changecolor}>rohanchouksey02@gmail.com</p>
          </div>
          <div className="contact-image">
            <img src={mobileImage} alt="Mobile" />
            <p style={changecolor}>7898924256</p>
          </div>
          <div className="contact-image">
            <img src={whatsappImage} alt="WhatsApp" />
            <p style={changecolor}>7898924256</p>
          </div>
          <div className="contact-image">
            <img src={addressImage} alt="Address" />
            <p style={changecolor}>Bhopal, Madhya Pradesh</p>
          </div>
        </div>

        <div className="contact-details-box">
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstName" style={changecolor}>
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                  style={{ width: "400px" }}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastName" style={changecolor}>
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  style={{ width: "400px" }}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email" style={changecolor}>
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" style={changecolor}>
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                placeholder="Message"
                rows="4"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="other-contacts">
        <h2 style={changecolor}>Other Contacts</h2>
        <div className="other-contact-images">
          <div className="other-contact-image">
            <a
              href="https://www.linkedin.com/in/rohan-chouksey-9a7995203/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinImage} alt="LinkedIn" />
            </a>
          </div>
          <div className="other-contact-image">
            <a
              href="https://github.com/ROHANCHOUKSEY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubImage} alt="GitHub" />
            </a>
          </div>
          {/* Add more as needed */}
        </div>
      </div>

      <div className="footer" style={footerStyle}>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
