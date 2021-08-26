import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import menuPl from "../language/menu_pl.json";
import menuEn from "../language/menu_en.json";
import { IReducers } from "../reducers/reducers";
import { Language } from "../reducers/Language.ts";

const Menu = () => {
	const { language } = useSelector((state: IReducers) => state.language);

	const translation = language === Language.polish ? menuPl.menu : menuEn.menu;
	const [selectedCategory, setSelectedCategory] = useState<string>(
		translation.category[0].name
	);

	return (
		<>
			<div className="bg-tile-background bg-repeat bg-contain py-24">
				<main className="flex justify-center text-center mt-10 flex-none">
					<section className="relative bottom-10 mr-20 md:block hidden ">
						<p
							id="Menu"
							className="font-lato tracking-widest text-7xl font-bold border-b-2 border-tertiary pb-3 border-opacity-25 w-96 "
						>
							MENU
						</p>
						<ul>
							{translation.category.map(({ name }) => (
								<li
									onClick={() => setSelectedCategory(name)}
									className="hover:text-accent active:text-accent focus:text-accent text-black cursor-pointer font-noto-sans font-bold text-2xl mb-2"
								>
									{name}
								</li>
							))}
						</ul>
					</section>

					<div className="flex flex-col">
						<div className="bg-accent w-full md:px-44 sm:px-20 px-14 py-1 rounded font-noto-sans font-bold text-xl text-white">
							<p className=" ">{selectedCategory}</p>
						</div>
						<ul>
							{translation.category
								.filter(({ name }) => name === selectedCategory)
								.map(({ dishes }) =>
									dishes.map(({ name, price }) => (
										<li className="flex justify-between my-4 md:text-lg text-sm font-bold py-1 ">
											<p>{name}</p>
											<p>{price.toFixed(2)}PLN</p>
										</li>
									))
								)}
						</ul>
					</div>
				</main>
			</div>
			<div className="h-7 w-full bg-accent bg-emblem bg-contain relative bottom-0"></div>
		</>
	);
};

export default Menu;
