import React, { useContext } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { SideBar } from './components';
import UserContext from './context/userContext';

import {
  EditProfile,
  Home,
  Login,
  ParcelDetails,
  Parcels,
  Profile,
  Signup,
  SMS,
  ErrorPage,
} from './pages';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation();
  const {
    user: { isLoggedIn },
  } = useContext(UserContext);
  return (
    <>
      <ToastContainer />
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/verify" element={<SMS />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </>
        ) : (
          <Route
            path="/"
            element={(
              <div>
                <SideBar />
                {location.pathname === '/' ? <h2 className="title">اضغط على طرودي للبدء</h2> : null}
              </div>
            )}
          >
            <Route path="/parcels" element={<Parcels />} />
            <Route path="/parcels/:id" element={<ParcelDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editProfile" element={<EditProfile />} />
          </Route>
        )}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
