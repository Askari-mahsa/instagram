import React, { useState } from "react";
import translate from "translate";
import "./Posts.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slider from "./Slider";
import {
	DotsMenu,
	HeartIcon,
	RocketDirect,
	CommentIcon,
	FlagIcon,
	HeartIconLiked,
} from "../../assets/svg/svg";
translate.engine = "google";
translate.key = process.env.GOOGLE_KEY;

const Posts = () => {
	const [dislike, setDisLike] = useState(true);
	const [like, setLike] = useState(false);
	const color = () => {
		setLike(true);
		setDisLike(false);
	};
	return (
		<div className="w-[100%] justify-center">
			<div className="">
				<div className="flex gap-[280px]">
					<div className="flex mb-2 ml-4 ">
						<div className=" relative border-red-800 border-[2px] w-9 h-9 rounded-[100%]">
							<span className="absolute left-[3px] top-[2.5px] border-gray-400 border-[1px] w-[27px] h-[27px] rounded-[100%]">
								<img alt="img" src="5.jpeg" className="rounded-[100%]"></img>
							</span>
						</div>
						<p className="ml-1 text-xs self-center">username</p>
					</div>
					<div className="w-4 h-4 self-center">
						<DotsMenu />
					</div>
				</div>
			</div>

			<div className="App w-[100%]">
				<Slider />
			</div>

			<div className="flex gap-[265px]">
				<div className="flex">
					<div className="ml-4" onClick={color}>
						<HeartIcon />
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
				<p className="text-sm">Like counter</p>
				<div>username</div>
				<p>discripion</p>
				<p className="text-xs text-gray-500">view all 31 comment</p>
			</div>
			<div className="flex ml-4 mt-4">
				<div className="relative border-red-800 border-[2px] w-9 h-9 rounded-[100%]">
					<span className="absolute left-[3px] top-[2.5px] border-gray-400 border-[1px] w-[27px] h-[27px] rounded-[100%]">
						<img alt="img" src="5.jpeg" className="rounded-[100%]"></img>
					</span>
				</div>
				<div className="visible:border-white self-center ml-2">
					<input id="comment" placeholder="Add a comment..." />
				</div>
			</div>
			<div>
				<p className="text-[10px] ml-4 mt-2 text-gray-500">time of get post</p>
				<a className="ml-4">See translate</a>
			</div>
		</div>
	);
};

export default Posts;
