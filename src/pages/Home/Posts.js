import React from "react";
import translate from "translate";
import "./Posts.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
	DotsMenu,
	HeartIcon,
	RocketDirect,
	CommentIcon,
	FlagIcon,
} from "../../assets/svg/svg";
translate.engine = "google"; 
translate.key = process.env.GOOGLE_KEY;
const like=()=>{
	style={backgroundColor: 'red'}
}
const Posts = () => {
	return (
		<>
			<div>
				<div className="flex gap-[280px]">
					<div className="flex mb-2 ml-4 ">
						<div className=" relative border-red-800 border-[2px] w-9 h-9 rounded-[100%]">
							<span className="absolute left-[3px] top-[2.5px] border-gray-400 border-[1px] w-[27px] h-[27px] rounded-[100%]"></span>
						</div>
						<p className="ml-1 text-xs self-center">username</p>
					</div>
					<div className="w-4 h-4 self-center">
						<DotsMenu />
					</div>
				</div>
			</div>

			<div className="App">
				<Carousel>
					<div id="slider">
						<img alt="1" src="1.jpeg"></img>
					</div>
					<div id="slider">
						<img alt="2" src="2.jpeg"></img>
					</div>
					<div id="slider">
						<img alt="3" src="3.jpeg"></img>
					</div>
				</Carousel>
			</div>

			<div className="flex gap-[265px]">
				<div className="flex">
					<div className="ml-4">
						<HeartIcon style={`backgroundColor: 'lime'`}/>
					</div>
					<div className="ml-4">
						<CommentIcon />
					</div>
					<div className="ml-4">
						<RocketDirect />
					</div>
				</div>
				<div>
					<div className="">
						<FlagIcon />
					</div>
				</div>
			</div>

			<div className="ml-4">
				<p>like counter</p>
				<div>username</div>
				<p>discripion</p>
				<p className="text-xs text-gray-500">view all 31 comment</p>
			</div>
			<div className="flex ml-4 mt-4">
				<div className="relative border-red-800 border-[2px] w-9 h-9 rounded-[100%]">
					<span className="absolute left-[3px] top-[2.5px] border-gray-400 border-[1px] w-[27px] h-[27px] rounded-[100%]"></span>
				</div>
				<div className="visible:border-white self-center ml-2">
					<input id="comment" placeholder="Add a comment..." />
				</div>
			</div>
			<div>
				<p className="text-[10px] ml-4 mt-2 text-gray-500">time of get post</p>
				<a>See translate</a>
			</div>
		</>
	);
};

export default Posts;
