import {
  checkPhoneNumber, getUserById, signUpDB, editPasswordDB, editProfileQuery,
} from './userQuieries';
import {
  parcelDetailsDB, checkRoleDB, deleteParcelDB, getParcelsQuery, addParcelQuery, changeStatusQuery,
} from './parcelsQueries';
import { addRouteQuery } from './routeQueries';

export {
  checkPhoneNumber, signUpDB, getUserById, parcelDetailsDB, checkRoleDB, deleteParcelDB, getParcelsQuery, addParcelQuery, changeStatusQuery, editPasswordDB, addRouteQuery, editProfileQuery,

};
