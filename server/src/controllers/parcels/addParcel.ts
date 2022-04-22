import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
import {
  addParcelQuery, addRouteQuery, checkPhoneNumber, getUserById,
} from '../../database/queries';
import { addParcelSchema, cloudinaryImg } from '../../utils';

dotenv.config();
// eslint-disable-next-line consistent-return
const addParcel = async (req, res) => {
  const { userId: sellerId } = req;
  const { rows: sellerData } = await getUserById(sellerId);
  const { lng: sellerLng, lat: sellerLat } = sellerData[0];
  const {
    name, deliveryPrice, price, status, phoneNumber, image,
  } = req.body;
  await addParcelSchema.validateAsync(req.body);
  const { rowCount, rows: buyerData } = await checkPhoneNumber(phoneNumber);
  if (!rowCount) {
    return res.status(400).json({ message: ' buyer phone number was not found' });
  }
  const { id: buyerId, lng: buyerLng, lat: buyerLat } = buyerData[0];
  const urlImg = await cloudinaryImg(image);
  const response = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${sellerLng}%2C${sellerLat}%3B${
      buyerLng
    }%2C${
      buyerLat
    }?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=${process.env.access_token_mapbox}`,
  );
  const data = await response.json();
  const { routes } = data;
  const { distance: distanceKM, duration: durationMINS, geometry: { coordinates } } = routes[0];

  const { rows } = await addParcelQuery(({
    name, deliveryPrice, price, status, urlImg, buyerId, sellerId,
  }));
  const { id: parcelId } = rows[0];
  const { rows: dd } = await addRouteQuery({
    distanceKM, durationMINS, coordinates, parcelId,
  });
  console.log(dd[0].coordinates);

  res.status(201).json({ message: 'The parcel has been added successfully ' });
};
export default addParcel;