import React, { useState } from 'react';
import Footer from '../components/Footer';
import shoes from '../Figma/1.png';
import watch from '../Figma/3.png';
import dress from '../Figma/Desktop - 1.png';
import spotify from '../Figma/Spotify.png'

const Project = (props) => {
  let footerStyle = {
    color: props.mode === '#111439' ? 'white' : 'black'
  };

  // Define a state variable to track whether the image is clicked or not
  const [imageClicked, setImageClicked] = useState(false);

  const [fullImg, setFullImg] = useState(''); // Store the full image source

  const openFullImg = (pic) => {
    setFullImg(pic);
    setImageClicked(true);
  };

  const closeFullImg = () => {
    setFullImg('');
    setImageClicked(false);
  };

  return (
    <div>
      <div className='project_intro'>Design</div>

      <div className={`full-image ${imageClicked ? 'show' : 'hide'}`}>
        <img src={fullImg} id="fullImg" alt="Full Image" />
        <span onClick={closeFullImg}>X</span>
      </div>

      <div className="image-gallery">
        <img src={spotify} onClick={() => openFullImg(shoes)} alt="Shoes" />
        <img src={shoes} onClick={() => openFullImg(shoes)} alt="Shoes" />
        <img src={watch} onClick={() => openFullImg(watch)} alt="Watch" />
        <img src={dress} onClick={() => openFullImg(dress)} alt="Dress" />
      </div>

      <div className="footer" style={footerStyle}>
        <Footer />
      </div>
    </div>
  );
};

export default Project;
