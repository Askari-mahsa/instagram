import React from "react";

const SignUpForm = () => {
	return (
		<div>
			<div className="container mx-auto">
				<div className="flex flex-col text-center">
					<h3 className="self-center text-xs text-gray-500 mt-2 mb-2">
						Addyour name so friends can find you.
					</h3>
				</div>
				<div className="flex flex-col justify-center">
					<div className="flex justify-center mt-3">
						<form className="flex flex-col justify-center self-center">
							<div className="flex items-center border w-[256px] text-gray-700 mb-3 rounded-[11px]">
								<input
									className="text-[10px] appearance-none bg-transparent bg-slate-100 w-[300px] border-gray-500 border-none 
                                                text-gray-600 mr-3 py-2 px-2 leading-tight focus:outline-none"
									type="text"
									placeholder="Full Name"
									aria-label="Full name"
								/>
							</div>

							<div className="flex items-center border w-[256px] text-gray-700 rounded-[11px]">
								<input
									className="text-[10px] appearance-none bg-transparent border bg-slate-100 w-[300px] via-slate-400 border-none 
                                                text-gray-600 mr-3 py-2 px-2 leading-tight focus:outline-none"
									type="password"
									placeholder="Password"
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
						<a>Next</a>
					</button>
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
