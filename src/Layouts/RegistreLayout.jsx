import React from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { store } from "../components/Redux/Store";

export default function RegistreLayout() {
  return (
    <>
      <Provider store={store}>
        <Navbar auth={true} />
        <div className="w-50 m-auto my-5">
          <Outlet />
        </div>
      </Provider>
    </>
  );
}
