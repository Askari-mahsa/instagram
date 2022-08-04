import React from "react";
import HeaderSignUp from "./HeaderSignUp";
import { LoginIcon } from "pages/Profile/ProfileData";

const SignUp = () => {
	return (
		<div>
			<div classNameName="container mx-auto">
				<div className="flex flex-col justify-center">
					<HeaderSignUp />

					<div className="relative flex justify-center">
						<form class="flex justify-center self-center mt-2 bg-gray-200">
							<div class="flex items-center border w-[256px] text-gray-700 rounded-[11px]">
								<button
									class="text-xs flex-shrink-0 px-2 text-blue-700"
									type="button"
								>
									IR +98
								</button>
								<div className="absoulate text-gray-400">|</div>
								<input
									class="text-[10px] appearance-none bg-transparent p-4 border-none 
                                            text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none"
									type="text"
									placeholder="Phone Number"
									aria-label="Full name"
								/>
							</div>
						</form>
					</div>

					<div className="flex justify-center rounded-sm">
						<p className="text-[10px] text-center mt-2 text-gray-400 w-60">
							You may receive SMS updates from Instagram and can opt out at any
							time
						</p>
					</div>

					<div className=" flex justify-center divide-y divide-dashed"></div>
					<button
						disabled={true}
						className="font-semibold text-indigo-50 w-64 
                                self-center flex justify-center bg-blue-700 p-2 m-5 text-xs rounded"
					>
						<a href="https://google.com">Log in</a>
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
							<LoginIcon className="fill-white" />
							&nbsp;Sign up with facebook
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
