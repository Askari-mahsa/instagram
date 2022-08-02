import React from "react";

const Requests = () => {
	return (
		<>
			{/* map on data instagram */}
			<div className="flex flex-col">
				<div id="followRequest" className="">
					<div className="flex mb-2 ml-4">
						<div className="flex ">
							<div className=" relative border-red-800 border-[2px] w-11 h-11 rounded-[100%]">
								<span className="absolute left-[2px] top-[2px] border-gray-400 border-[1px] w-[36px] h-[36px] rounded-[100%]"></span>
							</div>
							<div id="followRequest" className="ml-3 self-center flex">
								<p className="text-xs self-center">username</p>
								<p className="ml-1 text-[10px] text-gray-500 self-center">
									is on instagram
								</p>
							</div>
						</div>
						<div className="flex items-center gap-2 ml-10">
							{/* follow=confirm */}
							<button className="bg-blue-600 text-white text-xs font-bold h-7 w-[70px] items-center rounded-full">
								Follow
							</button>
							{/* following=Delete */}
							<button className="bg-gray-300 text-gray-800 text-xs h-7 w-[80px] font-bold items-center rounded-full">
								Following
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Requests;
