import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IAddress {
	icon: IconProp;
	text: string;
}

const Address = ({ icon, text }: IAddress) => {
	return (
		<address className="flex whitespace-pre-wrap justify-items-center content-center items-center ml-2 my-2 lg:text-2xl sm:text-xl py-2 ml-14">
			{" "}
			<FontAwesomeIcon
				icon={icon}
				mask={faCircle}
				size="2x"
				transform="shrink-5"
			/>{" "}
			<p className="ml-2"> {text} </p>
		</address>
	);
};

export default Address;
