import React from "react";
import Header from "../Global/Header";
import Footers from "../Footer/Footers";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footers />
    </>
  );
}

export default Layout;
