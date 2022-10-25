import React from "react";
import {
	ServicesFooter,
	OurDateTree,
	ServiceDateTree,
	SaleDateTree,
	LogoServices,
	Phone,
} from "./ArraysOfFooter";
import { LogoImgFooter, ProfileData } from "./ArraysOfFooter";

export const Footer = () => {
	return (
		<div>
			<div className="border-b-2 self-center mt-4"></div>

			<div>
				<div className="flex justify-between items-center">
					<button className="Button mx-[65.99px] my-[42.5px]">
						<span></span>بازگشت به بالای صفحه
					</button>

					<div className="flex flex-col mx-[18.13px] my-[13px]">
						<img
							className=" w-[265.78px] h-[94.76px]"
							src="logonakhl.png"
							alt="logonakhl"
						/>
						<div>
							<p className="flex justify-around text-right">
								تلفن پشتیبانی:034-91001230
							</p>
							<div>
								{console.log("first")}
								<Phone />
							</div>
						</div>
					</div>
				</div>

				<div>
					{LogoServices.map((item) => {
						<div>
							<img className="h-[56px] w-[56px] mt-2 ">{item.src} </img>
							<p className="SmallTitle font-medium">{item.name}</p>
						</div>;
					})}
				</div>
				<div>
					<div id="left">
						<div>
							{LogoImgFooter.map((item) => {
								<img src={item.src} />;
							})}
						</div>
						<div>
							<div>
								<img></img>
							</div>
							<p>نخل را در شبکه های اجتماعی همراهی کنید</p>
						</div>
					</div>
					<div id="right" className="flex flex-col">
						<p className="BigTitle font-bold">{}</p>
						{OurDateTree.map((item) => {
							<p className="MidTitle font-medium">sub</p>;
						})}{" "}
					</div>
					;
					{ServiceDateTree.map((item) => {
						<div id="right" className="flex flex-col">
							<p className="BigTitle font-bold">title</p>
							<p className="MidTitle font-medium">sub</p>
						</div>;
					})}
					{SaleDateTree.map((item) => {
						<div id="right" className="flex flex-col">
							<p className="BigTitle font-bold">title</p>
							<p className="MidTitle font-medium">sub</p>
						</div>;
					})}
				</div>
			</div>
		</div>
	);
};
