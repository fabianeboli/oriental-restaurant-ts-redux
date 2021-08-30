import React from "react";

interface IOverlay {
	children: React.ReactNode;
	visible: boolean;
	dispatch: any;
}

const Overlay = ({ children, visible, dispatch }: IOverlay) => {
	const isVisible = visible
		? "bg-opacity-60 bg-gray-700 "
		: "invisible";

	return (
		<div
			className={`delay-100 duration-200 z-10 fixed left-0 top-0 w-full h-full ${isVisible}`}
			onClick={dispatch}
		>
			{children}
		</div>
	);
};

export default Overlay;
