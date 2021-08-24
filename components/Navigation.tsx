import { faBars, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideDrawer } from "../reducers/SideDrawer.ts";

interface INavigation {
	isMobile: boolean;
}

const Navigation = ({ isMobile = true }: INavigation) => {
	const dispatch = useDispatch()


	return (
		<>
			<nav className="flex justify-between flex-row py-5 lg:text-7xl md:text-6xl text-4xl top-0 right-0 fixed">
				<ul className="flex justify-end font-finger-paint text-nav text-shadow-title">
					<li className="mr-10 hover:text-accent duration-500">
						<a href="#Menu">Menu</a>
					</li>
					<li className="mr-5 hover:text-accent duration-500">
						<a href="#Contact">Kontakt</a>
					</li>
				</ul>

				<button
					className="fa-layers fa-fw visible md:hidden"
					onClick={() => dispatch(toggleSideDrawer)}
				>
					<FontAwesomeIcon icon={faCircle} transform="grow-1" color="#222418" />
					<FontAwesomeIcon icon={faBars} transform="shrink-5" color="#c42e15" />
				</button>
			</nav>
		</>
	);
};

export default Navigation;
