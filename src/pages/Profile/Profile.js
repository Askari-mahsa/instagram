import React from 'react';

const Profile = () => {
    return (
        <>
        <div classNameName='container mx-auto'>
            <div className='contents w-1/2'>{/* <PersonInfo /> */}
                    
                    <div className="flex justify-center mt-3 space-x-[50%]"> {/* profile_pic */}
                
                        <div className='flex rounded-full bg-red-700'>
                            <img alt="profirl" src="" className=''></img>
                        </div>
                        
                        <div className='flex flex-col bg-yellow-200'>{/* username_EditPro */}
                        
                            <div className='bg-green-200 '>{/* username */}
                                <p>username</p>
                            </div>
                            
                            <div className='bg-gray-200'>{/* EditPro_button */}
                                <button className='text-gray-700 bordert'>Edit Profile</button>
                            </div>
                        </div>
        
                    </div>
        
                    <div className=''>
                        <p className='ml-5 mt-4'>Bio</p>
                    </div>
                    <div className="border-b-2 flex justify-center"></div>
                    <div className='flex justify-center space-x-1'>
                        <div className='Post'>
                            <p>3</p>
                            <p>post</p>
                        </div>
                        <div className='followers'>
                            <p>12</p>
                            <p>followers</p>
                        </div>
                        <div className='following'>
                            <p>90</p>
                            <p>following</p>
                        </div>
                    </div>
                    <div className="border-b-2 flex justify-center"></div>
                    <div className="border-b-2 flex justify-center"></div>
                </div>
        </div>
           
        </>
    );
};

export default Profile;