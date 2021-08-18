import React from "react";
import Navigation from "./Navigation.tsx";

const Menu = () => {
	return (
		<div className="bg-tile-background">
			<Navigation isLogoVisible />
			<div className="flex justify-center text-center mt-10">
				<div className="mr-10">
					<p className="font-lato tracking-wide text-6xl border-b-2 border-secondary pb-3 border-opacity-25 w-50">
						MENU
					</p>
					<ul>
						<li className="hover:text-accent active:text-accent text-nav cursor-pointer font-noto-sans font-bold text-xl my-1">
							Kurczak
						</li>

						<li className="hover:text-accent active:text-accent text-nav cursor-pointer font-noto-sans font-bold text-xl my-1">
							Makaron Hanoi
						</li>
						<li className="hover:text-accent active:text-accent text-nav cursor-pointer font-noto-sans font-bold text-xl my-1">
							Kaczka
						</li>
					</ul>
				</div>

				<div className="flex flex-col">
					<h3 className="bg-accent px-40 py-1 rounded font-noto-sans font-bold text-xl text-white">
						Kurczak
					</h3>

					<div className="flex justify-between my-1 text-lg font-bold">
						<p>słodko-kwaśny</p>
						<p>15,00</p>
					</div>

					<div className="flex justify-between my-1 text-lg font-bold">
						<p>słodko-kwaśny</p>
						<p>15,00</p>
					</div>
				</div>

			</div>
			<div className="h-7 w-full bg-accent bg-emblem bg-contain relative bottom-0 mt-20"></div>

		</div>
	);
};

export default Menu;
