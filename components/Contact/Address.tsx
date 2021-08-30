import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { v4 as uuid } from "uuid";

interface IAddress {
	icon: IconProp;
	text: string;
}

const Address = ({ icon, text }: IAddress) => {
	return (
		<address className="flex whitespace-pre justify-items-center content-center items-center my-2 sm:ml-14 ml-0 lg:text-2xl sm:text-xl text-xl py-2 w-52">
			{" "}
			<FontAwesomeIcon
				icon={icon}
				mask={faCircle}
				transform="shrink-5"
				style={{ width: "3rem", height: "3rem" }}
			/>{" "}
			<p className="ml-2"> {text} </p>
		</address>
	);
};

export default Address;
