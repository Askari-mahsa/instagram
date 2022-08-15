import React from "react";
// import { useState } from 'react';
// import {getProfileDetailService} from "../../Service/CallAPI"

import "./Home.css";
import HeaderHome from "./HeaderHome";
import Story from "components/Story";
import Posts from "./Posts";
const Home = () => {
	return (
		<div className="w-[100%]">
			<div className="w-[50%]">
				<HeaderHome />
			</div>
			<div>
				<Story />
				<div className="border-b-2 flex justify-center w-[400px] mb-2"></div>
				<Posts />
			</div>
			<div className="footer"></div>
		</div>
	);
};

export default Home;
