import React from 'react';

const Profile = () => {
    return (
        <>
            {/* <Header /> */}
            <div className="PersonInfo">

                <div className='profile_pic'>
                    <img className=''></img>
                </div>

                <div className='username_EditPro'>
                    <div className='username'>
                        <p>username</p>
                    </div>
                    <div className='EditPro_button'>
                        <button>Edit Profile</button>
                    </div>
                </div>

            </div>
            <div className='Bio'>
                <p>Bio</p>
            </div>
            <div className='PFF'>
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
        </>
    );
};

export default Profile;