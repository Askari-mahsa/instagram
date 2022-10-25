import React from "react";
// import { MagnifySearch } from "./SVGIconSearch/SVGIconSearch";
import "assets/styles/index.css";

export const Header = () => {
	return (
		<div className="flex-row-reverse">
			<div
				id="1"
				className="bg-gray-200 lg:h-[85px] lg:w-full xs:h-[50px] xs:w-full"
			></div>
			<div id="2" className="flex justify-between items-center p-8">
				<div id="2-1" className="self-center">
					<div id="basket/profile" className="flex self-center spacing">
						<div id="profile/flag" className="">
							<button>1</button>
						</div>
						<button className="">2</button>
					</div>
				</div>
				<div className="flex">
					<div id="searchmagnify" className="flex ali">
						<input
							type="text"
							className="lg:w-[600px] lg:h-[42px] xs:w-[524px] xs:h-[32px] placeholder:mr-2 text-right focus:outline-none focus-visible:none self-center lock text-sm text-gray-500 bg-gray-50  border border-gray-300"
							placeholder="جستجو در نخل"
							required
						/>
						<span
							id="magnify"
							className="self-center lg:h-[42px] xs:h-[32px] bg-gray-100"
						></span>
					</div>
					<img
						src="./logonakhl.png"
						className="lg:h-[55.78px] lg:w-[150px]"
					></img>
					<div id="2-2">
						<div id="2-2-l"></div>
						<div id="2-2-r"></div>
					</div>
				</div>
			</div>
			<div className="border-b-2 self-center"></div>
		</div>
	);
};
// export const Header = () => {
// 	return (
// 		<div>
// 			<button className="btn-primary">mahsa</button>
// 		</div>
// 	);
// };
