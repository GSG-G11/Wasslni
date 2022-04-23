import {
  checkPhoneNumber, editProfileQuery, getUserById, signUpDB,
} from './userQuieries';
import {
  parcelDetailsDB, checkRoleDB, deleteParcelDB, getParcelsQuery, addParcelQuery,
} from './parcelsQueries';
import { addRouteQuery } from './routeQueries';

export {
  checkPhoneNumber, signUpDB, getUserById, parcelDetailsDB,
  checkRoleDB, deleteParcelDB, getParcelsQuery, addParcelQuery, addRouteQuery,, editProfileQuery,
};
