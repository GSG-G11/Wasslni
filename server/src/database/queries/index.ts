import { checkPhoneNumber, getUserById, signUpDB } from './userQuieries';
import {
  parcelDetailsDB, checkRoleDB, deleteParcelDB, getParcelsQuery, addParcelQuery, changeStatusQuery,
} from './parcelsQueries';

export {
  checkPhoneNumber, signUpDB, getUserById, parcelDetailsDB,
  checkRoleDB, deleteParcelDB, getParcelsQuery, addParcelQuery, changeStatusQuery,
};
