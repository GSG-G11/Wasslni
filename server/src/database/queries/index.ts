import {
  checkPhoneNumber, getUserById, signUpDB, editPasswordDB,
} from './userQuieries';
import {
  parcelDetailsDB, checkRoleDB, deleteParcelDB, getParcelsQuery, addParcelQuery,
} from './parcelsQueries';

export {
  checkPhoneNumber, signUpDB, getUserById, parcelDetailsDB,
  checkRoleDB, deleteParcelDB, getParcelsQuery, addParcelQuery, editPasswordDB,
};
