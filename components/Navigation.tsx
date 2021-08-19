import React from "react";

interface INavigation {
	isLogoVisible: boolean;
}

const Navigation = ({ isLogoVisible = false}: INavigation) => {
	return (
		<>
			<nav className="flex justify-between flex-row-reverse py-5 lg:text-5xl md:text-4xl sm:text-3xl sticky top-0">
				
				

				<ul className="flex justify-end font-finger-paint text-nav">
					<li className="mr-5 hover:text-accent duration-500">
						<a href="#">Menu</a>
					</li>
					<li className="mr-5 hover:text-accent duration-500">
						<a href="#">Contact</a>
					</li>
				</ul>

				{isLogoVisible && (
					<>
						<h4 className="text-accent font-finger-paint ">
							Hanoi pho
						</h4>
					</>
				)}

			</nav>
		</>
	);
};

export default Navigation;
