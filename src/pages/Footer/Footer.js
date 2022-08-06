import React from "react";
import { MBDIcon } from "assets/svg/svg";

// footer bar for preLogin and Login and...
const Footer = () => {
	return (
		<>
			<div
				className="flex flex-col fixed
                                inset-x-0 only:
                                bottom-0
                                p-4"
			>
				<div className="flex justify-center">
					<button
						className="font-semibold text-indigo-50 w-64 self-center
                                 flex justify-center bg-blue-700 p-2 m-5 text-[10px] rounded"
					>
						<MBDIcon className="fill-white" />
						&nbsp;Sign up with facebook
					</button>
				</div>
			</div>
		</>
	);
};

export default Footer;
