"use client";
import { useState } from "react";
import SideNav from "../_components/SideNav";
import TopHeader from "../_components/TopHeader";

const layout = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div>
      <div
        className={`h-full ${
          toggleSidebar ? "" : "hidden"
        } md:flex md:w-64 bg-gray-100 flex-col fixed inset-y-0 z-50 `}
      >
        <SideNav setToggleSidebar={() => setToggleSidebar(false)} />
      </div>

      <div className="md:ml-64">
        <TopHeader setToggleSidebar={() => setToggleSidebar(true)} />
        {children}
      </div>
    </div>
  );
};

export default layout;
