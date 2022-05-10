import decode from 'jwt-decode';

const getUserInfo = () => {
  const token = document.cookie.split('=')[1];
  if (token) { return decode(token); }
  return null;
};
export default getUserInfo;
