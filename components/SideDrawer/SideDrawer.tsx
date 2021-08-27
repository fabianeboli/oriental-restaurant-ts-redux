import React from "react";
import { Dispatch } from "redux";
import Overlay from "./Overlay.tsx";

interface ISideDrawer {
	title: string;
	children: React.ReactNode;
	toggleSelector: boolean;
	dispatch: Dispatch;
}

const SideDrawer = ({
	title,
	children,
	toggleSelector,
	dispatch,
}: ISideDrawer) => {

	const hideSideDrawer = toggleSelector
		? "visible "
		: "hidden";

	return (
		<Overlay visible={toggleSelector} dispatch={dispatch}>
			<aside
				className={`bg-gray-50 text-xl text-center absolute z-50  h-full md:w-2/12 w-1/2 ${hideSideDrawer} transition duration-700 ease-in-out bg-white`}
			>
				<button>
					<h4 className="flex justify-around text-accent text-center tracking-wider text-4xl font-lato font-bold border-b-2 py-7 border-secondary border-opacity-40 w-100 mx-auto ">
						{title}
					</h4>{" "}
				</button>
				<ul className="py-4">
					{children}
				</ul>
			</aside>
		</Overlay>
	);
};

export default SideDrawer;
