import React from "react";
import { useNavigate } from "react-router";
const Verify = () => {
	const navigate = useNavigate();
	const ChangeNumber = () => {
		return navigate("/");
	};
	const Next = () => {
		// const navigate = useNavigate();
		return navigate("/Home");
	};
	return (
		<div className="container mx-auto">
			<div className="flex flex-col text-center mt-4">
				<h3 className="self-center font-bold text-xs mt-2 mb-2">
					Enter Confirmation Code
				</h3>
				<h6 className="self-center text-xs text-gray-500 w-[260px]">
					enter the code we sent to +989032653459 {}
					<a
						className="text-blue-700 font-bold text-xs cursor-pointer"
						onClick={ChangeNumber}
					>
						Change Number
					</a>
					&nbsp;or&nbsp;
					<a className="text-blue-700 font-bold text-xs cursor-pointer">
						Resend SMS
					</a>
				</h6>
			</div>
			<div className="flex flex-col justify-center">
				<div className="flex justify-center">
					<form className="flex justify-center self-center mt-2 bg-gray-200">
						<div className="flex items-center border w-[256px] text-gray-700 rounded-[11px]">
							<input
								className="block text-[10px] appearance-none bg-transparent p-4 border-none 
                                                text-gray-600 mr-3 py-2 px-2 leading-tight focus:outline-none"
								type="text"
								placeholder="Confirmation Code"
								aria-label="Full name"
							/>
						</div>
					</form>
				</div>

				<div className="flex justify-center rounded-sm"></div>

				<div className=" flex justify-center divide-y divide-dashed"></div>
				<button
					disabled={true}
					className="cursor-pointer font-semibold text-indigo-50 w-64 
                                self-center flex justify-center bg-blue-700 p-2 m-5 text-xs rounded"
				>
					<a onClick={Next}>Next</a>
				</button>
			</div>
			<div
				className="flex flex-col fixed
                                inset-x-0 only:
                                bottom-0
                                p-4"
			></div>
		</div>
	);
};

export default Verify;
