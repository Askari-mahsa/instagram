import React from "react";
import Requests from "./Requests";

const Notification = () => {
	return (
		<>
			<div id="header" className=" bg-white sticky top-0 m-4">
				<p className="font-bold">Activity</p>
			</div>
			<div className="flex flex-col">
				<div id="followRequest" className="">
					<div className="flex mb-2 ml-4 ">
						<div className=" relative border-red-800 border-[2px] w-11 h-11 rounded-[100%]">
							<span className="absolute left-[2px] top-[2px] border-gray-400 border-[1px] w-[36px] h-[36px] rounded-[100%]"></span>
						</div>
						<div id="followRequest" className="ml-3 self-center">
							<p className="ml-1 text-xs self-center">Follow requests</p>
							<p className="ml-1 text-[10px] text-gray-500 self-center">
								approve or ignor requests
							</p>
						</div>
					</div>
				</div>
			</div>

			<div id="this Week">
				<div id="header" className=" bg-white sticky top-0 m-4">
					<p className="text-sm font-bold">This Week</p>
				</div>
				<Requests />
			</div>
			<div id="this Mounth">
				<div id="header" className=" bg-white sticky top-0 m-4">
					<p className="text-sm font-bold">This Mounth</p>
				</div>
				<Requests />
			</div>
		</>
	);
};

export default Notification;
