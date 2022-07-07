import React from 'react';
import { Link } from 'react-router-dom';
// import {getAppLink} from "../../Service/CallAPI"

const PreLogin = () => {
    return (
        <>
        
           <div class="flex flex-col justify-center">
                <div class="text-gray-400 text-center m-10">
                    <div class="fixed inset-x-0 only:top-3">
                    <select class="bg-indigo-0 bg-[#ffffff] text-xs">
                        <option value="Enlish text-xs">Enlish</option>
                        <option value="Persian text-xs">Persian</option>
                        <option value="Turkish text-xs">Turkish</option>
                    </select> 
                    </div>
                       
                 </div>
                <img class="self-center w-48"alt="instagram" src='/i.png'/>
                <p class="text-gray-400 text-center text-xs" >Sign up to see photos and videos from your friends.</p>
               
               <button class="text-indigo-50 flex justify-center bg-blue-700 p-2 m-10 text-xs"
                ><a href='https://play.google.com/store/apps/details?id=com.instagram.android&hl=en&gl=US'>Get the instagram app</a></button>
               
                
            
            <div class="flex justify-center">
                <a class="font-semibold cursor-pointer text-blue-700 text-xs">Log in&nbsp;</a>
                <p class="text-xs"> or </p> 
                <a class='font-semibold cursor-pointer text-blue-700 text-xs'>&nbsp;Sign Up</a>
            </div>
            
            
            <div class="flex flex-col fixed
             inset-x-0 only:
             bottom-0
             p-4">
                <p class='text-gray-400 flex justify-center text-xs'>from</p>

                <div class="flex justify-center">
                    <img class="w-5"src='/download.png' alt='meta'></img>
                    <p class="text-sm">Meta</p>
                </div>

            </div>
        </div>
               
            
        </>
    );
};

export default PreLogin;