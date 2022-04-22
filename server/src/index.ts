import app from './app';

const port = app.get('port');

// fetch(
//   'https://api.mapbox.com/directions/v5/mapbox/driving/34.45%2C31.52%3B31.50%2C34.42?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=pk.eyJ1IjoiZmFkeWFsd2F6aXIiLCJhIjoiY2wyM2Q1aWtmMW92MjNibHBoMDUwam9udiJ9.zSFwxv09NAf6m6o2vbgC_g',
// )
//   .then((res) => res.json()).then((res) => console.log(res));
app.listen(port, () => console.log(`Running on http://localhost:${port}`));
