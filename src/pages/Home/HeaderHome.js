import React from 'react';
import {RocketDirect} from "../../assets/svg/svg"
const HeaderHome = () => {
    return (
        <>  
            <div className='flex justify-between px-4'>
                <button><img className='w-[120px] ' alt="instagram" src='/i.png'></img></button>
                <div className="block self-center">
                    <RocketDirect/>
                </div>
               
            </div>

            <div className="border-b-2 flex justify-center"></div>      
        </>
    );
};

export default HeaderHome;