import {
	faBars,
	faCircle,
	faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Language } from "../reducers/language.ts";
import { IReducers } from "../reducers/reducers.ts";
import { toggleSideMenu } from "../reducers/sideDrawer.ts";
import { toggleSideLanguage } from "../reducers/sideDrawer.ts";
import NavigationEn from "../language/navigation_en.json";
import NavigationPl from "../language/navigation_pl.json";

const Navigation = () => {
	const { language } = useSelector((state: IReducers) => state.language);
	const dispatch = useDispatch();

	const translation =
		Language.polish === language ? NavigationPl : NavigationEn;

	return (
		<>
			<nav className="bg-secondary flex justify-between flex-row py-3 md:text-4xl text-2xl top-0 right-0 w-screen z-10 shadow-md fixed">
				<ul className="flex justify-end font-lato text-nav ">
					<li className="mx-10 hover:text-accent duration-500">
						<a href="#Menu">{translation.menu}</a>
					</li>
					<li className="mr-5 hover:text-accent duration-500">
						<a href="#Contact">{translation.contact}</a>
					</li>
				</ul>

				<button
					className="fa-layers fa-fw visible md:hidden"
					onClick={() => dispatch(toggleSideMenu)}
				>
					<FontAwesomeIcon icon={faCircle} transform="grow-1" color="#222418" />
					<FontAwesomeIcon icon={faBars} transform="shrink-5" color="#c42e15" />
				</button>
				<button
					className="fa-layers fa-fw mr-5"
					onClick={() => dispatch(toggleSideLanguage)}
				>
					<FontAwesomeIcon icon={faCircle} transform="grow-1" color="#222418" />
					<FontAwesomeIcon
						icon={faLanguage}
						transform="shrink-7"
						color="#c42e15"
					/>
				</button>
			</nav>
		</>
	);
};

export default Navigation;
