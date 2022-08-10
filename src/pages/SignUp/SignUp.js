import React, { useState } from "react";
import HeaderSignUp from "./HeaderSignUp";
import Footer from "pages/Footer/Footer";
import SignUpEmail from "./SignUpEmail";
import SignUpWithPhone from "./SignUpWithPhone";
const SignUp = (props) => {
	const [tab, setTab] = useState("phone");

	const handlePhoneTab = () => {
		setTab("phone");
	};

	const handleEmailTab = () => {
		setTab("Email");
	};

	return (
		<div>
			<div className="container mx-auto">
				<div className="flex flex-col justify-center">
					<HeaderSignUp
						handlePhoneTab={handlePhoneTab}
						handleEmailTab={handleEmailTab}
					/>
				</div>
				{tab === "phone" ? (
					<SignUpWithPhone />
				) : tab === "Email" ? (
					<SignUpEmail />
				) : (
					<span style={{ color: "red", fontSize: "12px" }}>Not Found</span>
				)}
			</div>

			<Footer />
		</div>
	);
};

export default SignUp;
