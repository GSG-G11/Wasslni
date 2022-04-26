import React, { useRef, useEffect } from 'react';

import mapboxgl from 'mapbox-gl';
import './Map.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import PropTypes from 'prop-types';

function Map(props) {
  const {
    setLng, setLat, data, lat, lng,
  } = props;
  const mapContainer = useRef(null);
  const map = useRef(null);
  mapboxgl.accessToken = 'pk.eyJ1IjoiZmFkeWFsd2F6aXIiLCJhIjoiY2wyM2Q5d25pMDV2OTNjbzBtdDVrcWJ4ZyJ9.eVB-xAdq0rCO-IVUC8GcNg';
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [34.44390732688129, 31.491178194548752],
      zoom: 12,
    })
      .addControl(new mapboxgl.NavigationControl())
      .addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
          showUserHeading: true,
        }),
      );
    if (setLat && setLng) {
      map.current.on('load', () => {
        if (lat && lng) {
          new mapboxgl.Marker({
            color: '#CA011A',
          })
            .setLngLat([lng, lat]).addTo(map.current);
        }
        // Add a data source containing GeoJSON data.
        map.current.addSource('GazaStrip', {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',

              coordinates: [
                [
                  [34.219987, 31.323999],
                  [34.21952509697741, 31.323275716873013],
                  [34.23472679533637, 31.298122634118698],
                  [34.24015760983548, 31.29623429940648],
                  [34.26885462895751, 31.221982530946477],
                  [34.29135922659111, 31.24151928118303],
                  [34.31294465330831, 31.251006835168795],
                  [34.34198141738966, 31.27882568378223],
                  [34.36520981210805, 31.29023377080857],
                  [34.37139402363155, 31.304983086868248],
                  [34.36189627864826, 31.364537580296997],
                  [34.37281610910742, 31.37607465008034],
                  [34.380500181035046, 31.39028642511464],
                  [34.40041808213985, 31.410590095244586],
                  [34.40863664108343, 31.41488104010091],
                  [34.41340586640766, 31.418762116356746],
                  [34.423954040034744, 31.426301970859697],
                  [34.42695197531964, 31.42729801968551],
                  [34.436664927209875, 31.44013190633642],
                  [34.452246911911914, 31.451673636780654],
                  [34.47432388215307, 31.471715031196936],
                  [34.48330073185352, 31.47893132523606],
                  [34.5102702097378, 31.499677924774304],
                  [34.52988186472572, 31.505354690490563],
                  [34.54684979028741, 31.512794547488213],
                  [34.549759556545126, 31.51628739846818],
                  [34.553543430166485, 31.517729452177804],
                  [34.55393094004938, 31.521919208707644],
                  [34.55873815734523, 31.52626995797803],
                  [34.559153864410916, 31.527990888333036],
                  [34.56704597603854, 31.540961751358537],
                  [34.49225311206945, 31.59179311842564],
                  [34.488031, 31.586427],
                  [34.463765, 31.557621],
                  [34.465321, 31.555786],
                  [34.459641, 31.55161],
                  [34.455018, 31.546351],
                  [34.451257, 31.542583],
                  [34.44012, 31.530923],
                  [34.440759, 31.530405],
                  [34.437887, 31.528034],
                  [34.433776, 31.523473],
                  [34.427888, 31.516787],
                  [34.425708, 31.514447],
                  [34.417599, 31.505966],
                  [34.41454, 31.502913],
                  [34.40048, 31.487185],
                  [34.388488, 31.476749],
                  [34.382161, 31.469988],
                  [34.33088, 31.418157],
                  [34.219987, 31.323999],
                ],
              ],
            },
          },
        });
        map.current.addLayer({
          id: 'GazaArea',
          type: 'fill',
          source: 'GazaStrip', // reference the data source
          layout: {},
          paint: {
            'fill-color': '#0080ff', // blue color fill
            'fill-opacity': 0.0001,
          },
        });
        map.current.addLayer({
          id: 'outline',
          type: 'line',
          source: 'GazaStrip',
          layout: {},
          paint: {
            'line-color': '#CA011A',
            'line-width': 3,
          },
        });
        map.current.on('click', 'GazaArea', (e) => {
          if (map.current._markers[0]) {
            map.current._markers[0].remove();
          }

          new mapboxgl.Marker({
            color: '#CA011A',
          })
            .setLngLat([e.lngLat.lat, e.lngLat.lng])
            .addTo(map.current);
          map.current._markers[0]._lngLat = e.lngLat;
          map.current._markers[0]._update();
          setLat(e.lngLat.lat);
          setLng(e.lngLat.lng);
        });
        map.current.on('mouseenter', 'GazaArea', () => {
          map.current.getCanvas().style.cursor = 'pointer';
        });
        map.current.on('mouseleave', 'GazaArea', () => {
          map.current.getCanvas().style.cursor = 'auto';
        });
      });
    } else if (data) {
      map.current.on('load', () => {
        new mapboxgl.Marker({
          color: '#CA011A',
        })
          .setLngLat(data[0])
          .addTo(map.current);
        new mapboxgl.Marker({
          color: '#CA011A',
        })
          .setLngLat(data[data.length - 1])
          .addTo(map.current);

        map.current.addSource('Gazastrip', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: data,
            },
          },
        });
        map.current.addLayer({
          id: 'Gazastrip',
          type: 'line',
          source: 'Gazastrip',
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#CA011A',
            'line-width': 2,
          },
        });
      });
    } else {
      new mapboxgl.Marker({
        color: '#CA011A',
      })
        .setLngLat([lng, lat]).addTo(map.current);
    }
  });
  return <div ref={mapContainer} className="map-container" />;
}

Map.propTypes = {
  setLng: PropTypes.func,
  setLat: PropTypes.func,
  lat: PropTypes.number,
  lng: PropTypes.number,
  data: PropTypes.array,
};
export default Map;
