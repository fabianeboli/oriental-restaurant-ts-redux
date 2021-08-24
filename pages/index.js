import Head from "next/head";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Contact from "../components/Contact/Contact.tsx";
import LandingPage from "../components/LandingPage.tsx";
import Menu from "../components/Menu.tsx";
import Navigation from "../components/Navigation.tsx";
import SideDrawer from "../components/SideDrawer/SideDrawer.tsx";
import reducers from "../reducers/reducers.ts";


const store = createStore(
	reducers,
);

export default function Home() {
	return (
		<Provider store={store}>
			<Navigation />
			<LandingPage />
			<Menu />
			<Contact />
			<SideDrawer />
		</Provider>
	);
}
