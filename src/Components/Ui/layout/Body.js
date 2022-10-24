import { ActivitySideBar } from "Components/ActivitySideBar/ActivitySideBar";
import { Header } from "Components/Header/Header";
import { Report } from "Pages/Report/Report";
import React from "react";

export const Body = () => {
	return (
		<div>
			<Header />
			<div className="flex ">
				<Report />
				<ActivitySideBar />
			</div>
		</div>
	);
};
