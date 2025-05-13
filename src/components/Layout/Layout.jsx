import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import s from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={s.wrapper}>
      <AppBar />
      <Outlet />
      <Suspense fallback={null}></Suspense>
    </div>
  );
};

export default Layout;
