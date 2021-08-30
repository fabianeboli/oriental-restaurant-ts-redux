import {
	faClock,
	faHome,
	faPhoneAlt,
	faShippingFast,
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
		<section className="bg-primary text-tertiary">
			<div className="flex md:flex-row flex-col justify-around  py-24">
				<div className="relative bottom-5">
					<h2
						id="Contact"
						className="xl:text-8xl lg:text-7xl md:text-6xl text-2xl tracking-wide text-center pb-4"
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
			<section className="mx-10 pb-14 text-right md:text-lg text-md">
				<p className="py-5">{translation.delivery}</p>
				<p>{translation.deliveryCost}</p>
			</section>
		</section>
	);
};

export default Contact;
