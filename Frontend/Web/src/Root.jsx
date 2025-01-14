import React from 'react';
import Navbar from './General-Components/Navbar/Navbar';
import Footer from './General-Components/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

function Root() {
  const location = useLocation();

  // Define the base admin route
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isSigninRoute = location.pathname.startsWith("/signin");
  const isVerifyRoute = location.pathname.startsWith("/verify");
  const isSignupRoute = location.pathname.startsWith("/signup");

  return (
    <>
      {/* Conditionally hide Navbar and Footer for admin routes */}
      {!isAdminRoute && !isSigninRoute && !isVerifyRoute && !isSignupRoute && <Navbar />}
      <Outlet />
      {!isAdminRoute && !isSigninRoute && !isVerifyRoute && !isSignupRoute && <Footer />}
    </>
  );
}

export default Root;
