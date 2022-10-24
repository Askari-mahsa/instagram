import { logo } from "./SVGIcon";
import { Exit } from "Pages/Exit/Exit";
import { Order } from "Pages/Order/Order";
import { Saved } from "Pages/Saved/Saved";
import { PasswordManager } from "Pages/PasswordManager/PasswordManager";
import { Report } from "Pages/Report/Report";
import { ConnectedDevises } from "Pages/ConnectedDevises/ConnectedDevises";
import { EditInfo } from "Pages/EditInfo/EditInfo";
import { HojrehManager } from "Pages/HojrehManager/HojrehManager";
import { Inbox } from "Pages/Inbox/Inbox";
export const Titles = [
	{
		id: 1,
		name: "خلاصه فعالیتها",
		icon: logo,
		path: Report,
	},
	{
		id: 2,
		name: "سفارش ها ",
		icon: <logo />,
		component: <Order />,
	},
	{
		id: 3,
		name: "نشان شده ها",
		icon: <logo />,
		component: <Saved />,
	},
	{
		id: 4,
		name: "گنجینه ",
		icon: <logo />,
		component: <Inbox />,
	},
	{
		id: 5,
		name: "دستگاه ها ",
		icon: <logo />,
		component: <ConnectedDevises />,
	},
	{
		id: 6,
		name: "مدیریت رمز عبور ",
		icon: <logo />,
		component: <PasswordManager />,
	},
	{
		id: 7,
		name: "ویرایش اطلاعات",
		icon: <logo />,
		component: <EditInfo />,
	},
	{
		id: 8,
		name: "مدیریت حجره",
		icon: <logo />,
		component: <HojrehManager />,
	},
	{
		name: "خروج از حساب کاربری",
		icon: <logo />,
		component: <Exit />,
	},
];
