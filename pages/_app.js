import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Hanoi pho</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp;
