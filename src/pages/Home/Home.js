import React from 'react';
import { useState } from 'react';
import {getProfileDetailService} from "../../Service/CallAPI"



const Home = () => {
    const [image,setImage]=useState([]);
    const showStories=()=>{
        getProfileDetailService(image)
        .then(res=>{
            setImage(res.data.items)});
    }
    
    return (
        < >
        {/* header bala */}
        <div className="border-b-2 flex justify-center"></div>
            <div id="stories" className='bg-gray-600 w-60 h-30'>
                mahsa
                    
                <div className="imgslider">
                    {/* <Slider {...settings}>
                        {image.map((item) => (
                        <div key={item.id}>
                        <img className="w-15 h-15 border-2 border-gray-500" src={item.profile_pic_url}  alt={item.alt} />
                        </div>
                        ))}
                    </Slider> */}
                </div>

            </div>
            <div className="border-b-2 flex justify-center"></div>
            
        </>
    );
};

export default Home;