import React from "react";
import Navigation from "./Navigation.tsx";

const LandingPage = () => {
	return (
		<div className="w-full h-full bg-landing-page bg-center  bg-cover bg-fixed">
			<Navigation />

			<header className="left-32 top-44 absolute text-center">
				<p className="text-title font-finger-paint lg:text-9xl md:text-8xl sm:text-5xl text-shadow-title ">
					Hanoi pho
				</p>
				<p className="font-noto-sans text-title top-8 relative lg:text-2xl md:text-xl sm:text-xl text-shadow-title">
					Wietnamsko-chińska restauracja
				</p>
			</header>
			<div className="h-7 w-full bg-accent bg-emblem bg-contain absolute bottom-0"></div>
		</div>
	);
};

export default LandingPage;
