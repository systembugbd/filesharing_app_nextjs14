import { File, X } from "lucide-react";
import Image from "next/image";
import React from "react";

const FilePreview = ({ file, removeFile }) => {
  return (
    <div className="flex justify-between items-center lg:w-[50%] md:w-[80%] p-5 m-5 border rounded border-blue-200">
      <div className="flex gap-2">
        <Image
          src="/file.png"
          width={50}
          height={50}
          alt="file"
          className="object-contain"
        />
        <span className="flex flex-col text-left">
          {file?.name}
          <span className="text-[12px] text-gray-400">
            Type: {file?.type.split("/")[1]}, Size:{" "}
            {(file?.size / 1024).toFixed(2)}
            KB
          </span>
        </span>
        <span></span>
      </div>
      <div
        onClick={() => removeFile()}
        className="text-red-500 hover:rounded-full hover:border cursor-pointer hover:bg-red-500 hover:text-white"
      >
        <X />
      </div>
    </div>
  );
};

export default FilePreview;
