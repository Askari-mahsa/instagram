import React from "react";

const HeaderSignUp = () => {
	return (
		<div>
			<div className="flex flex-col justify-center">
				<div>
					<h1 className="flex justify-center mt-2 mb-2 font-bold text-xs">
						Register
					</h1>
					<div className="border-b-2 flex justify-center"></div>
					<div className="text-gray-400 text-center mb-3">
						<div>
							<select className="bg-indigo-0 bg-[#ffffff] text-xs mb-8">
								<option value="Enlish text-xs">Enlish</option>
								<option value="Persian text-xs">Persian</option>
								<option value="Turkish text-xs">Turkish</option>
							</select>
						</div>
					</div>

					<div className="flex justify-center">
						<div className="text-sm font-medium text-center text-gray-400 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
							<ul className="flex flex-wrap -mb-px">
								<div>
									<li className="">
										<a
											href="#"
											className="text-xs inline-block p-4 rounded-t-lg border-b-2 w-32 
                                            border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
										>
											PHONE
										</a>
									</li>
								</div>
								<div>
									<li>
										<a
											href="#"
											className="text-xs inline-block p-4 rounded-t-lg 
                                            border-b-2 w-32 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
										>
											EMAIL
										</a>
									</li>
								</div>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderSignUp;
