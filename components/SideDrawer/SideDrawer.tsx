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
		? "translate-x-0 "
		: "-translate-x-full ease-in-out";

	return (
		<Overlay visible={toggleSelector} dispatch={dispatch}>
			<aside
				className={`bg-gray-50 text-xl text-center absolute z-50  h-full lg:w-2/12 sm:w-1/3 w-1/2 ${hideSideDrawer} transition duration-500 ease-in-out bg-white`}
			>
				<button>
					<h4
						id="title"
						className="flex justify-around text-accent text-center tracking-wider sm:text-4xl text-3xl font-lato font-bold border-b-2 py-7 border-secondary border-opacity-40 w-100 mx-auto "
					>
						{title}
					</h4>{" "}
				</button>
				<ul className="py-4">{children}</ul>
			</aside>
		</Overlay>
	);
};

export default SideDrawer;
