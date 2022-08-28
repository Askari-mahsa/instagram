import React from "react";
import { useNavigate } from "react-router";

const SignUpForm = () => {
	const navigate = useNavigate();
	const Signup = () => {
		return navigate("/SignUp");
	};
	const login = useNavigate();
	const Login = () => {
		return login("/Login");
	};
	return (
		<div>
			<div className="container mx-auto">
				<div className="flex flex-col text-center">
					<img src="i.png" className="w-52 self-center"></img>
					<h3 className=" font-bold self-center text-xs text-gray-500 mt-2 mb-2 w-52">
						Sign up to see photos and videos from your friends.
					</h3>
				</div>
				<div className="flex flex-col justify-center">
					<div className="flex justify-center mt-3">
						<form className="flex flex-col justify-center self-center">
							<div className="flex items-center border w-[256px] text-gray-700 mb-3 rounded-[11px]">
								<input
									className="text-[10px] appearance-none bg-transparent bg-slate-100 mr-auto rounded-[9px] w-[254px] border-gray-500 border-none 
                                                text-gray-600 mr-3 py-2 px-2 leading-tight focus:outline-none"
									type="text"
									placeholder="Mobile Number or Email"
									aria-label="Mobile Number or Email"
								/>
							</div>
							<div className="flex items-center border w-[256px] text-gray-700 mb-3 rounded-[9px]">
								<input
									className="text-[10px] appearance-none bg-transparent bg-slate-100 mr-auto rounded-[9px] w-[254px] border-gray-500 border-none 
                                                text-gray-600 mr-3 py-2 px-2 leading-tight focus:outline-none"
									type="text"
									placeholder="Full Name"
									aria-label="Full name"
								/>
							</div>
							<div className="flex items-center border w-[256px] text-gray-700 mb-3 rounded-[9px]">
								<input
									className="text-[10px] appearance-none bg-transparent bg-slate-100 w-[254px] mr-auto rounded-[9px] border-gray-500 border-none 
                                                text-gray-600 mr-3 py-2 px-2 leading-tight focus:outline-none"
									type="text"
									placeholder="Username"
									aria-label="Username"
								/>
							</div>

							<div className="flex items-center border w-[256px] text-gray-700 rounded-[11px]">
								<input
									className="text-[10px] appearance-none bg-transparent border bg-slate-100 w-[254px] mr-auto rounded-[9px] via-slate-400 border-none 
                                                text-gray-600 mr-3 py-2 px-2 leading-tight focus:outline-none"
									type="password"
									placeholder="Password"
									aria-label="Password"
								/>
							</div>
						</form>
					</div>

					<div className="flex justify-center rounded-sm"></div>

					<div className=" flex justify-center divide-y divide-dashed"></div>
					<p className="w-64 self-center text-xs text-center mt-4 text-gray-500">
						People who use our service may have uploaded your contact
						information to Instagram.{" "}
						<a src className="font-semibold cursor-pointer">
							Learn More
						</a>
						<br /> By signing up, you agree to our{" "}
						<a
							src="https://help.instagram.com/581066165581870"
							className="font-semibold cursor-pointer"
						>
							Terms
						</a>
						,
						<a
							src="https://www.facebook.com/privacy/policy"
							className="font-semibold cursor-pointer"
						>
							{" "}
							Privacy Policy{" "}
						</a>
						and{" "}
						<a
							src="https://www.instagram.com/legal/cookies/"
							className="font-semibold cursor-pointer"
						>
							Cookies Policy
						</a>{" "}
						.
					</p>
					<button
						onClick={Signup}
						disabled={true}
						className="font-semibold text-indigo-50 w-64 
                                self-center flex justify-center bg-blue-700 p-2 m-5 text-xs rounded"
					>
						Sign Up
					</button>
					<div className="self-center">
						<p className="cursor-pointer">
							Have an account?{" "}
							<a className="text-blue-700" onClick={Login}>
								Log in
							</a>
						</p>
					</div>
				</div>

				<div
					className="flex flex-col fixed
                                inset-x-0 only:
                                bottom-0
                                p-4"
				></div>
			</div>
		</div>
	);
};

export default SignUpForm;
