import React from 'react';

import {images} from '../../constants';
import {SubHeading} from '../../components';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import './Gallery.css';

const Gallery = () => {
    const scrollRef = React.useRef(null);
    const scroll = (direction) =>{
        const {current} = scrollRef;
        if (direction === 'left'){
            current.scrollLeft -= 300;
        } else{
            current.scrollLeft += 300;
        }
    }

    const imagesArr = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];
 return (
     <div className="app__gallery flex__center">
         <div className="app__gallery-content">
             <SubHeading title="Instagram"/>
             <h1 className="headtext__cormorant">Photo Gallery</h1>
             <p className="p__opensans" style={{color:'#aaa', marginTop:'2rem'}}>Aute est ea cillum incididunt nostrud consectetur eu officia quis. Consectetur reprehenderit magna adipisicing culpa.</p>
             <button className="custom__button" type="button">View More</button>
         </div>
         <div className="app__gallery-images">
             <div className="app__gallery-images_container" ref={scrollRef}>
                 {imagesArr.map((image, index) => (
                     <div className="app__gallery-images_card flex__center" key={`gallery_image-${index+1}`}>
                         <img src={image} alt="image"/>
                         <BsInstagram className="app__gallery__image-icon"/>
                     </div>
                 ))}
             </div>
             <div className="app__gallery-images_arrows">
                 <BsArrowLeftShort className="app__gallery__arrow-icon" onClick={() => scroll('left')}/>
                 <BsArrowRightShort className="app__gallery__arrow-icon" onClick={() => scroll('right')}/>
             </div>
         </div>
     </div>
 )
};

export default Gallery;
