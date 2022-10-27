import React from 'react';
import { NaverMap, RenderAfterNavermapsLoaded } from 'react-naver-maps';

const MenuBar = () => {
	return (
		<RenderAfterNavermapsLoaded
			ncpClientId={process.env.REACT_APP_API_KEY}
			error={<p>Maps Load Error</p>}
			loading={<p>Maps Loading...</p>}
		>
			<NaverMap
				mapDivId="map"
				defaultCenter={{ lat: 37.49988, lng: 127.03856 }}
				defaultZoom={16}
				zoomControl={true}
			/>
		</RenderAfterNavermapsLoaded>
	);
};

export default MenuBar;
