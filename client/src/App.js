import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { SideBar } from './components';
import UserContext from './context/userContext';
import UserProvider from './context/userProvider';
import {
  EditPassword,
  EditProfile,
  Home, Login, ParcelDetails, Parcels, Profile, Signup, SMS,
} from './pages';

function App() {
  const { user: { isLoggedIn } } = useContext(UserContext);
  return (
    <Routes>
      {
        !isLoggedIn
          ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/verify" element={<SMS />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </>
          )
          : (
            <Route
              path="/"
              element={<SideBar />}
            >
              <Route path="/parcels" element={<Parcels />}>
                <Route path="/parcels/:id" element={<ParcelDetails />} />
              </Route>
              <Route path="/profile" element={<Profile />} />
              <Route path="/editPassword" element={<EditPassword />} />
              <Route path="/editProfile" element={<EditProfile />} />
            </Route>
          )
      }
      <Route
        path="*"
        element={(
          <>
            <Navigate to="/page-not-found" />
            <h1>404</h1>
          </>
)}
      />

    </Routes>
  );
}

export default App;
