import dynamic from "next/dynamic";
import React from "react";

const MapNoSSR = () => {
	const Map = React.useMemo(() => dynamic(
		() => import('./Map.tsx'), // replace '@components/map' with your component's location
		{ 
		  loading: () => <p>A map is loading</p>,
		  ssr: false // This line is important. It's what prevents server-side render
		}
	  ), [/* list variables which should trigger a re-render here */])
	  return <Map />
}

export default MapNoSSR
