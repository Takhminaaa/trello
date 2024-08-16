import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/UI/Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
