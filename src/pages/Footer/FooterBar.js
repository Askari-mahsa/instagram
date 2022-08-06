import React from "react";
import { ProfileData } from "./ProfileData";
import { MBDIcon } from "assets/svg/svg";

// footer bar for main menu
const FooterBar = () => {
	const handleIconsClick = (e) => {
		return console.log("ffff", e);
	};
	return (
		<div>
			<div className="flex justify-center text-sm space-x-[50px] mt-2 mb-2 text-gray-400">
				{ProfileData.map((item, index) => {
					return (
						<button
							onClick={() => handleIconsClick(item.id)}
							className="gap-x-10"
						>
							{item.icon}
						</button>
					);
				})}
				<button className="gap-x-10">
					<img className="w-2 h-2" src="" alt="img"></img>
				</button>
			</div>
		</div>
	);
};

export default FooterBar;
