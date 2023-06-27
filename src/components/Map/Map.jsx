import { MapFrame } from "./Map.styled";

export const Map = ({ coordinate }) => {
  const KEY_API = 'AIzaSyCrs9IgGlZ0hl2-4pueyi1ESmZ7nR5YSq4';
  const BASE_URL = 'https://www.google.com/maps/embed/v1/place';

  return (
    <MapFrame
      title="map"
      width={'100%'}
      height={300}
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`${BASE_URL}?key=${KEY_API}
        &q=${coordinate.lat}+${coordinate.lng}`}>
    </MapFrame>
  )
};