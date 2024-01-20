import React from "react";
import Navbar from "./_components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen justify-center items-center">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
