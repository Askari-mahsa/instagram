import React from "react";
// import { useState } from 'react';
// import {getProfileDetailService} from "../../Service/CallAPI"

import "./Home.css";
import HeaderHome from "./HeaderHome";
import Story from "components/Story";
import Posts from "./Posts";
const Home = () => {
	return (
		<div>
			<div className="header">
				<HeaderHome />
			</div>
			<div className="mt-[55px]">
				<Story />
				<div className="border-b-2 flex justify-center mb-2"></div>
				<Posts />
			</div>
			<div className="footer"></div>
		</div>
	);
};

export default Home;
