import React from "react";
import { MBDIcon } from "assets/svg/svg";
import { useNavigate } from "react-router";
import { useState } from "react";
const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [notification, setNotification] = useState(false);
	const handleSubmitButton = (e) => {
		e.preventDefault();
		const email = "admin";
		const pass = "admin";

		if (username === email && password === pass) {
			navigate("/Profile");
		} else {
			setNotification(true);
		}
	};
	const loginChange = (e) => {
		setUsername(e.target.value);
		setNotification(false);
	};
	const navigate = useNavigate();
	const transfer = () => {
		return navigate("/SignUp");
	};

	return (
		<>
			<div className="container mx-auto">
				<div className="flex flex-col justify-center">
					<div className="text-gray-400 text-center m-10">
						<div className="fixed inset-x-0 only:top-3">
							<select className="bg-indigo-0 bg-[#ffffff] text-xs">
								<option value="Enlish text-xs">Enlish</option>
								<option value="Persian text-xs">Persian</option>
								<option value="Turkish text-xs">Turkish</option>
							</select>
						</div>
					</div>
					<img className="self-center w-48" alt="instagram" src="/i.png" />

					<button className="font-semibold text-indigo-50 w-64 self-center flex justify-center bg-blue-700 p-2 m-5 text-xs rounded">
						<MBDIcon className="flex" />
						<a href="https://www.facebook.com/">Continue with Facebook</a>
					</button>

					<div className="flex justify-center">
						<div className="border-b-2 w-32 align-baseline self-center"></div>
						<p className="text-xs text-gray-400">&nbsp;OR&nbsp;</p>
						<div className="border-b-2 w-32 self-center"></div>
					</div>
					<div className="flex justify-center">
						<form
							// onSubmit={handleSubmitButton}
							className="bg-white px-8 pt-6 pb-0 mb-0"
						>
							<div className="mb-2">
								<input
									className="bg-gray-100 w-64 py-3 px-3 border-2 border-zinc-200 text-xs
                            text-gray-400 leading-tight focus:outline-none focus:shadow-outline rounded"
									id="username"
									type="text"
									value={username}
									placeholder="Phone number,username, or email"
									onChange={(e) => loginChange(e)}
								/>
							</div>
							<div>
								<input
									className="bg-gray-100 w-64 border-2 border-zinc-200 text-xs
                            py-3 px-3 text-gray-400 mb-3 leading-tight focus:outline-none focus:shadow-outline rounded"
									id="password"
									type="password"
									value={password}
									placeholder="Password"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
						</form>
					</div>
					<div></div>
					<div className="flex justify-center">
						<a className="cursor-pointer text-blue-700 text-xs mb-5">
							Froget password?
						</a>
					</div>

					<div className="divide-y divide-dashed flex justify-center"></div>
					<button
						onClick={handleSubmitButton}
						className="font-semibold text-indigo-50 w-64 self-center flex justify-center bg-blue-700 p-2 m-5 text-xs rounded"
					>
						Log in
					</button>
					{/* {notification&&<div>
                                    <span className='closebtn'onChange={(e)=>loginChange(e)} style={{color:"red",fontSize:"12px"}} >
                                     username or password is incorrect.</span>
					}             */}
					<div className="flex justify-center">
						<p className=" text-gray-400 text-sm">Don't have an account?</p>
						<a
							onClick={() => transfer()}
							className="font-semibold cursor-pointer text-blue-700 text-xs"
						>
							&nbsp;Sign Up
						</a>
					</div>

					<div
						className="flex flex-col fixed
             inset-x-0 only:
             bottom-0
             p-4"
					>
						<p className="text-gray-400 flex justify-center text-xs">from</p>

						<div className="flex justify-center">
							<img className="w-5" src="/download.png" alt="meta"></img>
							<p className="text-sm">Meta</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
