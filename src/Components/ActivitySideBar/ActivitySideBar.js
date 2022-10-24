import React from "react";
import { Titles } from "./Titles";
import "../../assets/styles/index.css";
export const ActivitySideBar = () => {
	return (
		<div className="Box xs:invisible mt-[72px] lg:w-[432px] lg:h-[645px]">
			<div className="flex mx-4 justify-between items-center">
				<div className="self-center">
					<img className="self-center" alt="Edit"></img>
				</div>
				<div className="flex  ">
					<p className="BigTitle my-8 mx-8 ">مریم السادات </p>

					<img
						className=" self-center h-[55px] w-[55px] border rounded-full "
						alt="username"
					></img>
				</div>
			</div>
			<div className="border-b-2 self-center"></div>
			{Titles.map((item) => {
				return (
					<div className="BigTitle my-8 mx-8 cursor" onClick={item.component}>
						{item.name}
					</div>
				);
			})}
		</div>
	);
};
