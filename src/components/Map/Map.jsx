export const Map = ({ coordinate }) => {
  const KEY_API = process.env.REACT_APP_API_KEY;
  const BASE_URL = 'https://www.google.com/maps/embed/v1/place';

  return (
    <iframe
      title="map"
      width={'100%'}
      height={300}
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`${BASE_URL}?key=${KEY_API}
        &q=${coordinate.lat}+${coordinate.lng}`}>
    </iframe>
  )
};