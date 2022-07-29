import React from 'react';
import { images } from 'assets/images/images';
import Slider from "react-slick";

 
const Posts = () => {
    var settings = {
        dots: true
      };

    return (
        <div>
            <div id="stories" className=' w-60 h-30'>
               
               {/* <img src=""></img>
                   
               <div className="">
                   
                        */}
                       <Slider className='flex'>
                            {/* {images.map((item) => (
                                
                                <div key={item.id}> */}
                                <div>
                                    <img className="w-10 h-10 border-2 border-gray-500" src="i.png" alt="empty" ></img>
                                </div>
                                <div>
                                 <img className="w-15 h-15 border-2 border-gray-500" src="i.png" alt="empty" ></img>
                                </div> 
                                 <div>
                                 <img className="w-15 h-15 border-2 border-gray-500" src="i.png" alt="empty" ></img>
                                </div>
                                

            
                                {/* </div> */}
                                {/* ))} */}
                       </Slider>
                     
               </div>

           {/* </div> */}
        </div>
    );
};

export default Posts;