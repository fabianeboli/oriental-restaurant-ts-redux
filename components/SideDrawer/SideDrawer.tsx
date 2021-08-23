import React, { useState } from "react";
import Icon from "./Icon.tsx";
import Overlay from "./Overlay.tsx";

interface ISideDrawer {
	toggle: boolean;
	setToggle: any; 
}

const SideDrawer = (props: ISideDrawer) => {
	const hideSideDrawer = props.toggle
		? "visible transition duration-700 ease-in-out  "
		: "hidden transition duration-700 ease-in-out  ";

	return (
		<Overlay clicked={props.toggle} toggle={props.setToggle}>
			<aside
				className={`bg-gray-50 text-xl z-10 text-center absolute h-full w-1/2 ${hideSideDrawer} bg-white`}
			>
				<button onClick={() => props.setToggle()}>
					<h4 className="flex justify-around text-accent text-center tracking-wider text-4xl font-lato font-bold border-b-2 py-7 border-secondary border-opacity-40 w-100 mx-auto ">
						<Icon />
						Menu
					</h4>{" "}
				</button>
				<ul className="py-4">
					<li
						onClick={() => props.setToggle()}
						className="py-2 text-primary text-xl"
					>
						Kurczak
					</li>
					<li>Kaczka</li>
					<li>Wołowina</li>
					<li>Makaron Hanoi</li>
				</ul>
			</aside>
		</Overlay>
	);
};

export default SideDrawer;
