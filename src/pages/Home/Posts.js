import React from 'react';
import { images } from 'assets/images/images';
import "./Posts.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Posts = () => {

    return (
        <>
          
            <div className="App">
                <Carousel >
                    <div id='slider'><img alt='1'src='1.jpeg'></img></div>
                    <div id='slider'><img alt='2'src='2.jpeg'></img></div>
                    <div id='slider'><img alt='3'src='3.jpeg'></img></div>
                </Carousel>
               
            </div>
        </>
    );
};

export default Posts;