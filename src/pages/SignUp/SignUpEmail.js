// import { getDefaultNormalizer } from "@testing-library/react";
import { MBDIcon } from "assets/svg/svg";
import React from "react";
import HeaderSignUp from "./HeaderSignUp";
const buttonLable = [
	"@gmail.com",
	"@hotmail.com",
	"@yahoo.com",
	"@outlook.com",
];

const SignUpEmail = () => {
	return (
		<div>
			<div classNameName="container mx-auto">
				<div className="flex flex-col justify-center">
					<HeaderSignUp />

					<div className="flex justify-center">
						<form class="flex justify-center self-center mt-2 bg-gray-200">
							<div class="flex items-center border w-[256px] text-gray-700 rounded-[11px]">
								<input
									class="block text-[10px] appearance-none bg-transparent p-4 border-none 
                                                text-gray-600 mr-3 py-2 px-2 leading-tight focus:outline-none"
									type="text"
									placeholder="Email Address"
									aria-label="Full name"
								/>
							</div>
						</form>
					</div>
					<div className="mb-4 flex self-center mt-3 max-w-[250px] overflow-x-auto">
						{buttonLable.map((item) => (
							<button
								className="border border-gray-400 text-[10px] p-4 
                                                            text-gray-700 mr-3 py-1 px-2 rounded-[5px] leading-tight focus:outline-none"
							>
								{item}
							</button>
						))}
					</div>

					<div className="flex justify-center rounded-sm"></div>

					<div className=" flex justify-center divide-y divide-dashed"></div>
					<button
						disabled={true}
						className="font-semibold text-indigo-50 w-64 
                                self-center flex justify-center bg-blue-700 p-2 m-5 text-xs rounded"
					>
						<a href="https://google.com">Next</a>
					</button>
				</div>
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
			</div>
		</div>
	);
};

export default SignUpEmail;
