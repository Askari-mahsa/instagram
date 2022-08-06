import React, { useState } from "react";
import HeaderSignUp from "./HeaderSignUp";
import Footer from "pages/Footer/Footer";
import SignUpEmail from "./SignUpEmail";
import SignUpWithPhone from "./SignUpWithPhone";
const SignUp = (props) => {
	const [tab, setTab] = useState(true);
	return (
		<div>
			<div className="container mx-auto">
				<div className="flex flex-col justify-center">
					<HeaderSignUp tab={tab} setTab={setTab} />
				</div>
				{!tab ? <SignUpEmail /> : <SignUpWithPhone />}
			</div>

			<Footer />
		</div>
	);
};

export default SignUp;
