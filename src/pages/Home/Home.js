import React from "react";
// import { useState } from 'react';
// import {getProfileDetailService} from "../../Service/CallAPI"

import "./Home.css";
import HeaderHome from "./HeaderHome";
import Story from "components/Story";
import Posts from "./Posts";
const Home = () => {
	return (
		<div className="flex flex-col w-[100%]">
			<div className="self-center w-[420px]">
				<HeaderHome />
				<Story />
				<div className="border-b-2 w-[420px] mb-2"></div>
				<Posts />
				<div className="footer"></div>
			</div>
		</div>
	);
};

export default Home;
