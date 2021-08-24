import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideDrawer } from "../../reducers/SideDrawer.ts";
import Overlay from "./Overlay.tsx";

interface ISideDrawer {
	toggle: boolean;
	setToggle: any;
}
// zrob z reduxem
const SideDrawer = (props: ISideDrawer) => {
	const { isSideDrawerVisible } = useSelector((state: any) => state.sideDrawer);
	const dispatch = useDispatch();

	const hideSideDrawer = isSideDrawerVisible
		? "visible transition duration-700 ease-in-out  "
		: "hidden transition duration-700 ease-in-out  ";

	return (
		<Overlay clicked={isSideDrawerVisible} toggle={props.setToggle}>
			<aside
				className={`bg-gray-50 text-xl text-center absolute z-10  h-full w-1/2 ${hideSideDrawer} bg-white`}
			>
				<button onClick={() => dispatch(toggleSideDrawer)}>
					<h4 className="flex justify-around text-accent text-center tracking-wider text-4xl font-lato font-bold border-b-2 py-7 border-secondary border-opacity-40 w-100 mx-auto ">
						Menu
					</h4>{" "}
				</button>
				<ul className="py-4">
					<li
						onClick={() => dispatch(toggleSideDrawer)}
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
