import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import Image from "next/image";

const TopHeader = ({ setToggleSidebar }) => {
  return (
    <div className="flex justify-between md:justify-end p-4 border-b items-center min-h-[81px]">
      <AlignJustify
        className="md:hidden cursor-pointer"
        onClick={() => setToggleSidebar()}
      />
      <Image
        alt="logo"
        src="/logo.svg"
        width={140}
        height={95}
        className="md:hidden"
      />

      <UserButton />
    </div>
  );
};

export default TopHeader;
