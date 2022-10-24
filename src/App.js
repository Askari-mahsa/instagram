import "./assets/styles/App.css";
import { Route, Routes } from "react-router";
import { Exit } from "Pages/Exit/Exit";
import { Order } from "Pages/Order/Order";
import { Saved } from "Pages/Saved/Saved";
import { PasswordManager } from "Pages/PasswordManager/PasswordManager";
import { Report } from "Pages/Report/Report";
import { ConnectedDevises } from "Pages/ConnectedDevises/ConnectedDevises";
import { EditInfo } from "Pages/EditInfo/EditInfo";
import { HojrehManager } from "Pages/HojrehManager/HojrehManager";
import { Inbox } from "Pages/Inbox/Inbox";
import { Header } from "Components/Header/Header";
import { ActivitySideBar } from "Components/ActivitySideBar/ActivitySideBar";
import { Component } from "react";
import { Body } from "Components/Ui/layout/Body";
export const routes = [
	{
		element: ActivitySideBar,
		path: "/ActivitySideBar",
	},
	{
		element: Inbox,
		path: "/Inbox",
	},
	{
		element: HojrehManager,
		path: "/HojrehManager",
	},
	{
		element: Report,
		path: "/Report",
	},
	{
		element: Body,
		path: "/",
	},
	{
		element: Exit,
		path: "/Exit",
	},
	{
		element: Order,
		path: "/Order",
	},
	{
		element: Saved,
		path: "/Saved",
	},
	{
		element: PasswordManager,
		path: "/PasswordManager",
	},
	{
		element: Report,
		path: "/Report",
	},
	{
		element: ConnectedDevises,
		path: "/ConnectedDevises",
	},
	{
		element: EditInfo,
		path: "/EditInfo",
	},
];

const App = () => {
	return (
		<div>
			<Body />
		</div>
	);
};

export default App;
