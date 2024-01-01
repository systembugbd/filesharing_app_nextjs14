"use client";
import { File, Shield, Upload, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SideNav = ({ setToggleSidebar, params }) => {
  const menuItem = [
    {
      id: 1,
      copy: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 2,
      copy: "Files",
      icon: File,
      path: "/files",
    },
    {
      id: 3,
      copy: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(params);
  return (
    <div className="shadow-sm h-full w-full border-r">
      <div className="p-4 border-b h-[81px]">
        <Link href="/files" className="hidden md:flex">
          <Image alt="logo" src="/logo.png" width={50} height={50} />
        </Link>
        <X
          onClick={() => setToggleSidebar()}
          className="absolute top-6 left-3 cursor-pointer md:hidden"
        />
      </div>
      <div className="flex flex-col">
        {menuItem.map((item, index) => (
          <div
            key={index}
            className={`p-4 cursor-pointer "bg-gray-50 text-gray-500 hover:bg-gray-50 hover:text-primary ${
              activeIndex == index ? "bg-blue-50 text-primary border-b" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <Link
              href={item.path}
              className="flex gap-2"
              onClick={() => setToggleSidebar()}
            >
              <item.icon />
              <span>{item.copy}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
