import React from 'react';

import {images} from '../../constants';
import {SubHeading} from '../../components';
import './Chef.css';

const Chef = () => (
    <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.chef} alt="chef"/>
        </div>
        <div className="app__wrapper_info">
            <SubHeading title="Chef's word"/>
            <h1 className="headtext__cormorant">What we Believe in</h1>

            <div className="app__chef-content">
                <div className="app__chef-content_quote">
                    <img src={images.quote} alt="quote"/>
                    <p className="p__opensans">Deserunt adipisicing laboris voluptate nulla.</p>
                </div>
                <p className="p__opensans"> Ipsum veniam eu et occaecat occaecat deserunt occaecat in voluptate ea qui.
                    Dolore velit adipisicing tempor.</p>
            </div>
            <div className="app__chef-sign">
                <p>Kevin Luo</p>
                <p className="p__opensans">Chef & Founder</p>
                <img src={images.sign} alt=""/>
            </div>

        </div>
    </div>
);

export default Chef;
