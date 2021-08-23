import { faBars, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import SideDrawer from "./SideDrawer/SideDrawer.tsx";

interface INavigation {
	isMobile: boolean;
}

const Navigation = ({ isMobile = true }: INavigation) => {
	const [toggle, setToggle] = useState<boolean>(false);
	
	const toggleState = (): boolean => {
		setToggle(!toggle);
		return toggle;
	}

	return (
		<>
			<nav className="flex justify-between flex-row-reverse py-5 lg:text-7xl md:text-6xl text-4xl sticky z-10  top-0">
			<SideDrawer toggle={toggle} setToggle={toggleState}/>
				<ul className="flex justify-end font-finger-paint text-nav text-shadow-title">
					<li className="mr-10 hover:text-accent duration-500">
						<a href="#">Menu</a>
					</li>
					<li className="mr-5 hover:text-accent duration-500">
						<a href="#">Contact</a>
					</li>
				</ul>

				{isMobile && (
					<>
						<button
							onClick={() => setToggle(!toggle)}	
							className="fa-layers fa-fw"
						>
							<FontAwesomeIcon
								icon={faCircle}
								transform="grow-1"
								color="#222418"
							/>
							<FontAwesomeIcon
								icon={faBars}
								transform="shrink-5"
								color="#c42e15"
							/>
						</button>
					</>
				)}
			</nav>
		</>
	);
};

export default Navigation;
