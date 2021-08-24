import React from "react";

const LandingPage = () => {
	return (
		<div className="w-full h-full bg-landing-page bg-cover bg-local ">

			<header className="md:left-32 md:top-64 md:absolute relative top-24 text-center">
				<p className="text-title font-finger-paint xl:text-11xl lg:text-10xl md:text-9xl text-shadow-title text-6xl ">
					Hanoi pho
				</p>
				<p className="font-noto-sans text-title top-8 relative lg:text-4xl md:text-3xl text-xl text-shadow-title">
					Wietnamsko-chińska restauracja
				</p>
			</header>
			<div className="h-7 w-full bg-accent bg-emblem bg-contain absolute z-0 bottom-0"></div>
		</div>
	);
};

export default LandingPage;
