import React from "react";
import { useNavigate } from "react-router";

const SignUpWithPhone = (props) => {
	const navigate = useNavigate();
	const VerifyCode = () => {
		return navigate("/Verify");
	};
	const {} = props;
	return (
		<div>
			<div className="container mx-auto">
				<div className="flex flex-col justify-center">
					<div className="relative flex justify-center">
						<form className="flex justify-center self-center mt-2 bg-gray-200">
							<div className="flex items-center border w-[256px] text-gray-700 rounded-[11px]">
								<button
									className="text-xs flex-shrink-0 px-2 text-blue-700"
									type="button"
								>
									IR +98
								</button>
								{/* <div className="flex flex-col w-[100%]">
			<div className="self-center w-[420px]"></div> */}
								<div className="absoulate text-gray-400 border-b-2 w-32 align-baseline self-center">
									|
								</div>
								<input
									className="text-[10px] appearance-none bg-transparent p-4 border-none 
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
						<a onClick={() => VerifyCode()}>Log in</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SignUpWithPhone;
