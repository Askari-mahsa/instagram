import React from "react";
import { useNavigate } from "react-router-dom";
const PreLogin = () => {
	const navigate = useNavigate();
	const enter = () => {
		navigate("/signup");
	};
	return (
		<>
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
				<p className="text-gray-400 text-center text-xs">
					Sign up to see photos and videos from your friends.
				</p>

				<button className="text-indigo-50 flex justify-center bg-blue-700 p-2 m-10 text-xs">
					<a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en&gl=US">
						Get the instagram app
					</a>
				</button>

				<div className="flex justify-center">
					<a className="font-semibold cursor-pointer text-blue-700 text-xs">
						Log in&nbsp;
					</a>
					<p className="text-xs"> or </p>
					<a
						className="font-semibold cursor-pointer text-blue-700 text-xs"
						onClick={() => enter()}
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
		</>
	);
};

export default PreLogin;
