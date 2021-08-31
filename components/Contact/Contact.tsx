import {
	faClock,
	faHome,
	faPhoneAlt,
	faTty,
	faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useSelector } from "react-redux";
import { Language } from "../../reducers/language.ts";
import { IReducers } from "../../reducers/reducers.ts";
import Address from "../Contact/Address.tsx";
import MapNoSSR from "../Contact/Map/MapNoSSR.tsx";
import ContactEn from "../../language/contact_en.json";
import ContactPl from "../../language/contact_pl.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
	const { language } = useSelector((state: IReducers) => state.language);

	const translation = Language.polish === language ? ContactPl : ContactEn;

	return (
		<section className="bg-primary text-green-50">
			<div className="flex md:flex-row flex-col justify-around  py-24">
				<div className="relative bottom-5">
					<h2
						id="Contact"
						className="text-green-50 xl:text-8xl lg:text-7xl md:text-6xl text-2xl tracking-wider text-center pb-7"
					>
						{translation.visit}
						<a href="https://www.facebook.com/hanoi.pho1970">
							<FontAwesomeIcon
								transform="shrink-4"
								icon={faFacebook}
							></FontAwesomeIcon>
						</a>
					</h2>
					<Address icon={faPhoneAlt} text="123 123 123" />
					<Address icon={faTty} text="0 123 123 123" />
					<Address icon={faHome} text="ul. piłsudzkiego 36/38, Gdynia" />
					<Address icon={faClock} text={translation.time} />
					<Address icon={faUmbrellaBeach} text={translation.summerTime} />
				</div>
				<div className="m-5">
					<MapNoSSR />
				</div>
			</div>
			<section className="flex md:flex-row justify-around items-center flex-col-reverse mx-10 pb-14 text-right md:text-lg text-md">
				<div>
					<img src="/images/desktop/OnTheWay.svg" alt="girl on the bike" />
				</div>
				<div>
					<h3 className="text-green-50 text-bold text-center text-7xl tracking-wider">
						{translation.delivery}
					</h3>
					<div className="flex justify-center my-10 text-center">
						<div className="mr-10">
							<h4 className="text-accent lg:text-5xl md:text-5xl text-xl font-bold font-lato pb-6 tracking-wide">
								Gdynia
							</h4>
							<h5 className="font-bold text-white">
								{translation.deliveryRequirementGdynia}
							</h5>
						</div>
						<div>
							<h4 className="text-accent lg:text-5xl md:text-5xl text-xl font-bold font-lato pb-6 tracking-wide">
								Sopot
							</h4>
							<h5 className="font-bold text-white">
								{translation.deliveryRequirementSopot}
							</h5>
						</div>
					</div>
					<div></div>
					<div className="flex justify-around  pb-10">
						<p className="text-2xl text-white font-bold">{translation.deliveryCostName}</p>
						<p className="text-2xl text-accent font-bold">{translation.deliveryCostPrice}</p>
					</div>
					<p className="text-center pb-5">
						{translation.driverInfo}
					</p>
					<p className="text-center">
						{translation.takeaway}
					</p>
					
				</div>
			</section>
		</section>
	);
};

export default Contact;
