import React from "react";
import Header from "../Global/Header";
import Footers from "../Footer/Footers";
import Appbar from "../Global/Appbar";

function Layout({ children }) {
  return (
    <>
      <Appbar />
      {children}
      <Footers />
    </>
  );
}

export default Layout;
