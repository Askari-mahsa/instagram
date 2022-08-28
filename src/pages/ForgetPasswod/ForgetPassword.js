import React from "react";
import { Lock } from "../../assets/svg/svg";
import { useNavigate } from "react-router";
const ForgetPassword = () => {
	const navigate = useNavigate();
	const Back = () => {
		return navigate("/Login");
	};
	return (
		<>
			<div className="container mx-auto">
				<div className="flex flex-col justify-center">
					<div className="flex flex-col">
						<div className="self-center mt-4">
							<Lock />
						</div>
						<p className="self-center mt-4 font-semibold">
							Trouble Logging In?
						</p>
						<p
							className="text-gray-400 w-64 self-center text-center
						 text-xs mt-4"
						>
							Enter your email, phone, or username and we'll send you a link to
							get back into your account.
						</p>
					</div>
					<div className="flex justify-center">
						<form className="flex justify-center self-center mt-2 bg-gray-200">
							<div className="flex items-center border w-[256px] text-gray-700 rounded-[11px]">
								<input
									className="block text-[10px] appearance-none bg-transparent p-4 border-none 
                                                text-gray-600 mr-3 py-2 px-2 leading-tight focus:outline-none"
									type="text"
									placeholder="Email,Phone, or Username"
									aria-label="Full name"
								/>
							</div>
						</form>
					</div>

					<div className="flex justify-center rounded-sm"></div>

					<div className=" flex justify-center divide-y divide-dashed"></div>
					<button
						disabled={true}
						className="font-semibold text-indigo-50 w-64 
                                self-center flex justify-center bg-blue-700 p-2 m-5 text-xs rounded"
					>
						<a>Send Login Link</a>
					</button>
					<a
						href="https://help.instagram.com/374546259294234"
						className="cursor-pointer text-blue-900 text-xs self-center"
					>
						Can't reset your password?
					</a>
					<div className="flex justify-center mt-5">
						<div className="border-b-2 w-[110px] align-baseline self-center"></div>
						<p className="text-xs text-gray-400">&nbsp;OR&nbsp;</p>
						<div className="border-b-2 w-[110px] self-center"></div>
					</div>
					<a className=" cursor-pointer font-semibold text-sm mt-2 self-center">
						Create New Account
					</a>
				</div>
				<div
					className="flex flex-col fixed
                                inset-x-0 only:
                                bottom-0
                                p-4"
				>
					<p
						onClick={Back}
						className="cursor-pointer font-semibold text-sm mt-2 self-center"
					>
						Back To Login
					</p>
				</div>
			</div>
		</>
	);
};
export default ForgetPassword;
