import Head from "next/head";
import {Html } from "next/document";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Contact from "../components/Contact/Contact.tsx";
import LandingPage from "../components/LandingPage.tsx";
import Menu from "../components/Menu.tsx";
import Navigation from "../components/Navigation.tsx";
import SideLanguage from "../components/SideDrawer/SideLanguage.tsx";
import SideMenu from "../components/SideDrawer/SideMenu.tsx";
import reducers from "../reducers/reducers.ts";

const store = createStore(reducers);
// !TODO add icons to navigation near categories
// !FIX category should automatically change when changing language 
// !TODO add animations 
// !TODO add SEO 
export default function Home() {
	return (

		
		<Provider store={store}>
			<Navigation />
			<LandingPage />
			<Menu />
			<Contact />
			<SideMenu />
			<SideLanguage/>
		</Provider>
	);
}
