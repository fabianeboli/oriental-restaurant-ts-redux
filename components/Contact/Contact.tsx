import {
	faClock,
	faHome,
	faPhoneAlt,
	faTty,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useSelector } from "react-redux";
import { Language } from "../../reducers/language.ts";
import { IReducers } from "../../reducers/reducers.ts";
import Address from "../Contact/Address.tsx";
import MapNoSSR from "../Contact/Map/MapNoSSR.tsx";
import ContactEn from "../../language/contact_en.json";
import ContactPl from "../../language/contact_pl.json";

const Contact = () => {
	const { language } = useSelector((state: IReducers) => state.language);

	const translation = Language.polish === language ? ContactPl : ContactEn;

	return (
		<div className="flex md:flex-row flex-col justify-around bg-primary text-tertiary py-24">
			<div className="relative bottom-5">
				<h2
					id="Contact"
					className="xl:text-8xl lg:text-7xl md:text-6xl text-2xl tracking-wide text-center pb-4"
				>
					{translation.visit}
				</h2>
				<Address icon={faPhoneAlt} text="123 123 123" />
				<Address icon={faTty} text="0 123 123 123" />
				<Address icon={faHome} text="ul. piłsudzkiego 36/38, Gdynia" />
				<Address icon={faClock} text={translation.time} />
			</div>
			<div className="m-5">
				<MapNoSSR />
			</div>
		</div>
	);
};

export default Contact;
