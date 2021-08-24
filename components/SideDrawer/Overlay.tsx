import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideDrawer } from "../../reducers/SideDrawer.ts";

interface IOverlay {
	children: React.ReactNode;
}

const Overlay = ({ children }: IOverlay) => {
	const { isSideDrawerVisible } = useSelector((state: any) => state.sideDrawer);
	const dispatch = useDispatch();
	const isVisible = isSideDrawerVisible ? "visible" : "hidden";

	return (
		<div
			className={`bg-gray-700 bg-opacity-60 z-9 fixed left-0 top-0 w-full h-full ${isVisible}`}
			onClick={() => dispatch(toggleSideDrawer)}
		>
			{children}
		</div>
	);
};

export default Overlay;
