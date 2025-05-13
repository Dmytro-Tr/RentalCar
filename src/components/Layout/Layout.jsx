import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
      <Suspense fallback={null}></Suspense>
    </>
  );
};

export default Layout;
