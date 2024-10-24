// components/Map.js
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '750px',
  height: '450px',
  border: '2px solid #3872ac',
};

const locations = [
    { name: 'Statue of Liberty', address: 'Liberty Island, New York, NY 10004', url: 'https://www.nps.gov/stli/index.htm' },
    { name: 'Central Park', address: 'New York, NY 10024', url: 'https://www.centralparknyc.org/' },
    { name: 'Philadelphia Museum of Art', address: '2600 Benjamin Franklin Pkwy, Philadelphia, PA 19130', url: 'https://www.philamuseum.org/' },
    { name: 'Independence Hall', address: '520 Chestnut St, Philadelphia, PA 19106', url: 'https://www.nps.gov/inde/index.htm' },
    { name: 'Prudential Center', address: '25 Lafayette St, Newark, NJ 07102', url: 'https://www.prudentialcenter.com/' },
    { name: 'Branch Brook Park', address: 'Branch Brook Park, Newark, NJ 07104', url: 'https://www.branchbrookpark.org/' },
  ];
  
const Map = () => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    const geocoder = new window.google.maps.Geocoder();

    const geocodeLocations = async () => {
      const markerPromises = locations.map(async (location) => {
        const result = await new Promise((resolve, reject) => {
          geocoder.geocode({ address: location.address }, (results, status) => {
            if (status === 'OK') {
              resolve({ 
                position: results[0].geometry.location, 
                title: location.name, 
                url: location.url 
              });
            } else {
              reject(status);
            }
          });
        });
        return markers;
      });

      const results = await Promise.all(markerPromises);
      setMarkers(results);
    };

    geocodeLocations();
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCzBaYZJLP50YjWcDyyKzdPewfJeTuW1w0">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: 37.4419, lng: -122.1419 }}
        zoom={13}
        onLoad={(mapInstance) => setMap(mapInstance)}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            title={marker.title}
            onClick={() => setSelectedMarker(marker)}
          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              <h3>{selectedMarker.title}</h3>
              <p><a href={selectedMarker.url} target="_blank" rel="noopener noreferrer">View location</a></p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;






 