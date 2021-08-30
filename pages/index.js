import { Provider } from "react-redux";
import {useState, useRef, useEffect} from 'react';
import { createStore } from "redux";
import Contact from "../components/Contact/Contact.tsx";
import LandingPage from "../components/LandingPage.tsx";
import Menu from "../components/Menu.tsx";
import Navbar from "../components/Navbar.tsx";
import SideLanguage from "../components/SideDrawer/SideLanguage.tsx";
import SideMenu from "../components/SideDrawer/SideMenu.tsx";
import reducers from "../reducers/reducers.ts";

const store = createStore(reducers);
// !TODO add icons to navigation near categories
// !FIX category should automatically change when changing language
// !TODO add animations
// !TODO add SEO


export default function Home() {
	const [navBackground, setNavBackground] = useState(false);
	const navRef = useRef();
	navRef.current = navBackground;
	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 20;
			if (navRef.current !== show) {
				setNavBackground(show);
			}
		};
		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<Provider store={store}>
				<Navbar
					backgroundColor={navBackground ? "bg-primary shadow-md" : "transparent"}
					style={{ transition: "1s ease" }}
				/>
				<LandingPage />
				<Menu />
				<Contact />
				<SideMenu />
				<SideLanguage />
			</Provider>
		</>
	);
}
