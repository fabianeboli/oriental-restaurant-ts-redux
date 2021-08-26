import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideDrawer } from "../../reducers/sideDrawer.ts";

interface IOverlay {
	children: React.ReactNode;
	visible: boolean;
	dispatch: any;
}

const Overlay = ({ children, visible, dispatch }: IOverlay) => {
	const isVisible = visible ? "visible" : "hidden";

	return (
		<div
			className={`bg-gray-700 bg-opacity-60 z-40 fixed left-0 top-0 w-full h-full ${isVisible}`}
			onClick={dispatch}
		>
			{children}
		</div>
	);
};

export default Overlay;
