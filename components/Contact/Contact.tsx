import { faCalendar, faClock, faHome, faPhoneAlt, faTty } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Address from "../Contact/Address.tsx";
import MapNoSSR from "../Contact/Map/MapNoSSR.tsx";

const Contact = () => {
	return (
		<div className="flex justify-around bg-primary text-tertiary py-24">
			<div className="relative bottom-5">
				<h2 id="Contact" className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl tracking-wide text-center pb-4">
					ODWIEDŹ NAS
				</h2>
				<Address icon={faPhoneAlt} text="123 123 123" />
				<Address icon={faTty} text="0 123 123 123" />
				<Address icon={faHome} text="ul. piłsudzkiego 36/38" />
				<Address icon={faClock} text={"wt-sob 11-20\n niedz. 12-20"}/>
			</div>
			<div className="m-5">
				<MapNoSSR />
			</div>
		</div>
	);
};

export default Contact;
