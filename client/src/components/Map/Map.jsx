import React, { useRef, useEffect, useContext } from 'react';

import mapboxgl from 'mapbox-gl';
import './Map.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import PropTypes from 'prop-types';
import gazaBoarders from './gazaBoarders';
import UserContext from '../../context/userContext';

function Map(props) {
  const { setPosition, data } = props;
  const { user, setUser } = useContext(UserContext);
  const { lat, lng } = user;
  const mapContainer = useRef(null);
  const map = useRef(null);
  mapboxgl.accessToken = 'pk.eyJ1IjoiZmFkeWFsd2F6aXIiLCJhIjoiY2wyM2Q5d25pMDV2OTNjbzBtdDVrcWJ4ZyJ9.eVB-xAdq0rCO-IVUC8GcNg';
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [34.44390732688129, 31.491178194548752],
      zoom: 10,
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
    if (setPosition) {
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

              coordinates: gazaBoarders,
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
            'line-width': 0,
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
          setUser({ ...user, lat: e.lngLat.lat, lng: e.lngLat.lng });
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
  setPosition: PropTypes.bool,
  data: PropTypes.array,
};
export default Map;
