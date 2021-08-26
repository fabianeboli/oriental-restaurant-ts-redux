import React from "react";
import { useSelector } from "react-redux";
import { IReducers } from "../reducers/reducers";
import LandingPagePl from "../language/landingPage_pl.json";
import LandingPageEn from "../language/landingPage_en.json";
import { Language } from "../reducers/language.ts";

const LandingPage = () => {
	const { language } = useSelector((state: IReducers) => state.language);

	const translation =
		Language.polish === language ? LandingPagePl : LandingPageEn;

	return (
		<div className="w-full h-full bg-landing-page bg-cover bg-local ">
			<header className="md:left-32 md:top-64 md:absolute relative top-24 text-center">
				<p className="text-title font-finger-paint xl:text-11xl lg:text-10xl md:text-9xl text-shadow-title text-6xl ">
					{translation.title}
				</p>
				<p className="font-noto-sans text-title top-8 relative lg:text-4xl md:text-3xl text-xl text-shadow-title">
					{translation.subtitle}
				</p>
			</header>
			<div className="h-7 w-full bg-accent bg-emblem bg-contain absolute  bottom-0"></div>
		</div>
	);
};

export default LandingPage;
