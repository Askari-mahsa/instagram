import React from "react";
import { SummaryOrdersArray } from "./SummaryOrdersArray";
export const Report = () => {
	return (
		<div>
			<div className="mt-[72px] lg:w-[890px] lg:h-[773px] xs:w-[578px] spacing">
				<div className="lg:flex ">
					<div className="BigBox lg:mr-4 xs:mb-4 ">
						<div className="flex justify-between items-center">
							<div>
								<button className="Button">مشاهده جزییات سفارش </button>
							</div>
							<div className="self-center  mt-4 mr-4">
								<p className="BigTitle">اخرین سفارش</p>
							</div>
						</div>
						<div className="flex justify-between items-center spacing mt-[35.5px]">
							<div className="flex flex-col">
								<div className="MidTitle">شماره سفارش</div>
								<div className="MidTitle">تاریخ</div>
							</div>
							<div className="flex flex-col">
								<div className="MidTitle">در انتظار تایید</div>
								<div className="MidTitle">تومان</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="SmallBox">
							<div className="flex justify-between items-center">
								<div>
									<button className="Button">مشاهده گنجینه </button>
								</div>
								<div className="self-center  mt-4 mr-4">
									<p className="BigTitle">سکه های شما</p>
								</div>
							</div>
							<div className="flex justify-end self-center mr-8 mt-4">
								<p className="flex self-center mr-4 ">سکه{}</p>
								<img className="h-[85px] w-85px" src="seke.png" alt="sekeh" />
							</div>
						</div>
						<div className="SmallBox mt-4">
							<div className="flex justify-between items-center">
								<div>
									<button className="Button">همه سفارش ها </button>
								</div>
								<div className="self-center  mt-4 mr-4">
									<p className="BigTitle">خلاصه سفارشات</p>
								</div>
							</div>

							{SummaryOrdersArray.map((item) => {
								<div className="flex justify-between self-center mx-4 mt-4">
									<div>
										<div>
											<p className=" MidTitle SummaryOrders ">{item.name}</p>
											<p className=" SmallTitle SummaryOrders "></p>
										</div>
										<img className="SummaryOrdersImg" />
									</div>
									;
								</div>;
							})}
						</div>
					</div>
				</div>
				<div className="xs:w-[526px]">
					<p className="text-right mt-[24px]">پیشنهاداتی برای شما</p>
				</div>
				<div className="Box flex flex-col items-center h-[287px] w-[209px]">
					<div>
						<p>فروش ویژه</p>
					</div>
					<div>
						<img alt="picture" />
					</div>
					<div>
						<img alt="product" src=""></img>
						{}
					</div>
					<div className="flex ">
						<div className="SmallTitle">تومان{}</div>
						<div>
							<img alt="plusButton"></img>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
