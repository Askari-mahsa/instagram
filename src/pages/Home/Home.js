import React from 'react';
import { useState } from 'react';
// import {getProfileDetailService} from "../../Service/CallAPI"


import './Home.css'
import HeaderHome from './HeaderHome';
import Story from 'components/Story';
import Posts from "./Posts";
const Home = () => {
    // const [image,setImage]=useState([]);
    // const showStories=()=>{
    //     getProfileDetailService(image)
    //     .then(res=>{
    //         setImage(res.data.items)});
    // }
    // const [sliderRef] = useKeenSlider({
    //     breakpoints: {
    //       "(min-width: 400px)": {
    //         slides: { perView: 2, spacing: 5 },
    //       },
    //       "(min-width: 1000px)": {
    //         slides: { perView: 3, spacing: 10 },
    //       },
    //     },
    //     slides: { perView: 1 },
    //   })

    
    return (
        <div >
        <div className='header' >
        <HeaderHome />
        </div>
    
        <div className="mt-[120px]">
            <Story/>
        <div className="border-b-2 flex justify-center mb-2"></div> 
            <Posts/>
        </div>
        <div className='footer'>
        </div>
       

    
      
        
          
         
        </div>
    );
};


export default Home;





