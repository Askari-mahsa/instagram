import React from 'react';
import { useState } from 'react';
// import {getProfileDetailService} from "../../Service/CallAPI"
import { images } from 'assets/images/images';

import Slider from 'rc-slider';
const Home = () => {
    // const [image,setImage]=useState([]);
    // const showStories=()=>{
    //     getProfileDetailService(image)
    //     .then(res=>{
    //         setImage(res.data.items)});
    // }
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };
    
    return (
        < >
        {/* header bala */}
        <div className="border-b-2 flex justify-center"></div>
            <div id="stories" className=' w-60 h-30'>
                <img src=""></img>
                    
                <div className="imgslider">
                    
                    {/* <Slider> */}
{/* 
                        {images.map((item) => (
                            
                        <div key={item.id}>
                            <img className="w-15 h-15 border-2 border-gray-500" src={item.src} alt="empty" ></img>
                        </div>
                        ))} */}
            {/* </Slider> */}

                    
                </div>

            </div>
            <div className="border-b-2 flex justify-center"></div>
            
        </>
    );
};


export default Home;





