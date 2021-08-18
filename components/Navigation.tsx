import React from "react";

const Navigation = () => {
	return (
		<>
			<nav className="">
				<ul className="flex justify-end font-finger-paint text-nav text-4xl py-5">
					<li className="mr-5 hover:text-accent duration-500">
						<a href="#">Menu</a>
					</li>
					<li className="mr-5 hover:text-accent duration-500">
						<a href="#">Contact</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navigation;
