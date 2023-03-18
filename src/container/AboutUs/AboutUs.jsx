import React from 'react';

import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
        <div className="app__aboutus-overlay flex__center">
            <img src={images.G} alt="G"/>
        </div>
        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <h1 className="headtext__cormorant">About Us</h1>
                <img className="spoon__img" src={images.spoon} alt="spoon"/>
                <p className="p__opensans">Tempor officia Lorem reprehenderit adipisicing deserunt incididunt enim anim
                    amet consectetur. Veniam ut incididunt incididunt est. Enim eiusmod voluptate anim est reprehenderit
                    qui.</p>
                <button className="custom__button" type="button">Know more</button>
            </div>

            <div className="app__aboutus-content_knife flex__center">
                <img src={images.knife} alt="knife"/>
            </div>

            <div className="app__aboutus-content_history">
                <h1 className="headtext__cormorant">Our History</h1>
                <img className="spoon__img" src={images.spoon} alt="spoon"/>
                <p className="p__opensans">Tempor officia Lorem reprehenderit adipisicing deserunt incididunt enim
                    anim amet consectetur. Veniam ut incididunt incididunt est. Enim eiusmod voluptate anim est
                    reprehenderit qui.</p>
                <button className="custom__button" type="button">Know more</button>
            </div>

        </div>


    </div>
);

export default AboutUs;
