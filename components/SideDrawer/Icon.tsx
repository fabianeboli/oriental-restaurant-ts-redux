import { faArrowLeft, faArrowRight, faBookOpen, faCheck, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IIcon {
	rotate: boolean
}

const Icon = ({rotate}: IIcon) => {
	return (
		<span className="fa-layers fa-fw mr-5">
			<FontAwesomeIcon icon={faBookOpen} transform="grow-4" color="#282B1B" />
			<FontAwesomeIcon icon={faArrowLeft}  inverse transform="right-1 shrink-3 rotate-180" />
		</span>
	);
};

export default Icon;
