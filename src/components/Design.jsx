import React, { useState } from 'react';
import Footer from '../components/Footer';
import shoes from '../Figma/1.png';
import watch from '../Figma/3.png';
import dress from '../Figma/Desktop - 1.png';
import spotify from '../Figma/Spotify.png';
import shoes_website from '../Figma/shoes.png';

const Project = (props) => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setIsImageOpen(true);
    setSelectedImage(image);
  };

  const closeImage = () => {
    setIsImageOpen(false);
    setSelectedImage(null);
  };

  let footerStyle = {
    color: props.mode === '#111439' ? 'white' : 'black'
  };

  return (
    <div>
      <div className='project_intro'>Design</div>

      <div className="image-gallery">
        <img
          src={spotify}
          className="figma_design"
          alt="Spotify"
          onClick={() => openImage(spotify)}
        />
        <img
          src={shoes}
          className="figma_design"
          alt="Shoes"
          onClick={() => openImage(shoes)}
        />
        <img
          src={watch}
          className="figma_design"
          alt="Watch"
          onClick={() => openImage(watch)}
        />
        <img
          src={dress}
          className="figma_design"
          alt="Dress"
          onClick={() => openImage(dress)}
        />

        <img
          src={shoes_website}
          className="figma_design"
          alt="Dress"
          onClick={() => openImage(shoes_website)}
        />
      </div>

      {isImageOpen && selectedImage && (
        <div className="image-modal">
          <div style={{cursor:'pointer'}} className="close-button" onClick={closeImage}>
            X
          </div>
          <img
            src={selectedImage}
            alt="Selected"
            className="modal-image"
            style={{width:'90%', maxWidth:'700px',}}
          />
        </div>
      )}

      <div className="footer" style={footerStyle}>
        <Footer />
      </div>
    </div>
  );
};

export default Project;
