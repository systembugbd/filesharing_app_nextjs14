import Image from "next/image";
import React from "react";

const ShowIcon = ({ icon }) => {
  const iconArr = ["docx", "mp4", "pdf", "word", "xls", "xl", "doc", "zip"];
  return (
    <div className="flex justify-center items-center">
      {iconArr.includes(icon) ? (
        <Image
          src={`/icon/${icon}.png`}
          width={200}
          height={200}
          style={{ minWidth: "60px" }}
        />
      ) : (
        <Image
          src={`/icon/file.png`}
          width={200}
          height={200}
          style={{ minWidth: "60px" }}
        />
      )}
    </div>
  );
};

export default ShowIcon;
