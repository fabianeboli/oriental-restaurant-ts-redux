import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {
	return (
		<MapContainer
			center={[54.50895, 18.54312]}
			zoom={16}
			scrollWheelZoom={true}
			className="sm:h-30rem h-96 sm:w-40vw w-80 mx-auto rounded-md"
		>
			<TileLayer
				url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZmFiaWFuZTIxIiwiYSI6ImNrc2l1aDh1bjBkaHEydm5jZDl6OXc2OGoifQ.q4mphE4ijUOFW_Ad5TG3XQ`}
				attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
			/>
			<Marker position={[54.50895, 18.54312]} draggable={true} alt="Marker - Hanoi pho location" >
				{/* <Popup>Hanoi Pho</Popup> */}
			</Marker>
		</MapContainer>
	);
};

export default Map;
