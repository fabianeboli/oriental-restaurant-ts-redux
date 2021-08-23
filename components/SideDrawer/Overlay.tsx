import React from "react";
import { ReactChildren } from "react";

interface IOverlay {
	children: React.ReactNode;
	clicked: boolean;
	toggle: any;
}

const Overlay = ({ children, clicked, toggle }: IOverlay) => {
	const isVisible = clicked ? "visible" : "hidden";

	return (
		<div
			className={`bg-gray-700 bg-opacity-40 fixed left-0 top-0 w-full h-full ${isVisible}`}
			onClick={() => toggle()}
		>
		
			{children}
		</div>
	);
};

export default Overlay;
