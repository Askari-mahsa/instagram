import React from 'react';

import { HeaderProfileData } from './ProfileData';
const Profile = () => {
    const handleIconsClick = (e)=>{
        return console.log("ffff",e)
    }
    
    return (
        <>
        <div classNameName='container mx-auto'>
            <div className='contents w-1/2'>
                    
                    <div className="flex"> 
                
                        <div className='flex rounded-[100%] ml-5 mr-5 bg-red-700 mt-5'>
                            <img src="" className='w-20 h-20 rounded-[100%]'></img>
                        </div>
                        
                        <div className='flex flex-col self-center pl-10'>
                        
                            <div className='text-md'>
                                <p>username</p>
                            </div>
                            
                            <div className=''>
                                <button className='flex justify-center text-gray-700 text-xs pl-20 pr-20 pt-1 pb-1 border'>Edit Profile</button>
                            </div>
                        </div>
        
                    </div>
        
                    <div className=''>
                        <p className='ml-5 mt-4 mb-5 text-xs'>Bio</p>
                    </div>
                    <div className="border-b-2 flex justify-center"></div>
                   
                    <div className='flex justify-center space-x-10 mt-2 mb-2'>
                        <div className='text-xs'>
                            <p className='text-center'>3</p>
                            <p className='text-gray-600'>post</p>
                        </div>
                        <div className='text-xs'>
                            <p className='text-center'>12</p>
                            <p className='text-gray-600'>followers</p>
                        </div>
                        <div className='text-xs'>
                            <p className='text-center'>90</p>
                            <p className='text-gray-600'>following</p>
                        </div>
                    </div>
                    <div className="border-b-2 flex justify-center"></div>

                    <div className='flex justify-center text-sm space-x-[50px] mt-2 mb-2 text-gray-400'>
                    {HeaderProfileData.map((item,index)=>{
                        return   <button onClick={()=>handleIconsClick(item.id)} className='gap-x-10'>{item.icon}</button> 
                    })}
                    </div>

                    <div className="border-b-2 flex justify-center"></div>
                </div>
                
        </div>
           
        </>
    );
};

export default Profile;