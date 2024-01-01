"use client";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import ShowIcon from "../../upload/_components/ShowIcon";
import { useState } from "react";
import { trucateFileName } from "../../../../utils/utilities";

const GetAllFileByUser = ({ data, changeStyle }) => {
  const icon = data?.type.split("/")[1];

  const { user } = useUser();

  const loginUser = user?.primaryEmailAddress?.emailAddress;
  return (
    <div
      className={`${
        changeStyle
          ? "flex m-5 lg:w-1/4 lg:h-1/4 w-full h-auto sm:w-full items-center justify-center"
          : "flex flex-row w-full justify-center items-center"
      } `}
    >
      {loginUser === data?.userEmail && (
        <div
          className={`${
            changeStyle
              ? "flex flex-col overflow-hidden rounded-lg shadow transition hover:shadow-lg justify-center items-center"
              : "w-full px-2 h-24 flex justify-center items-center"
          } `}
        >
          <div
            className={`${
              changeStyle ? "w-auto h-48" : "w-24 h-auto"
            } overflow-hidden flex justify-center p-5`}
          >
            {icon == "png" ||
            icon == "jpeg" ||
            icon == "gif" ||
            icon == "jpg" ? (
              <Image
                alt={data?.name ? data?.name : "Shared File"}
                src={data?.fileUrl}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "300px",
                  minWidth: "60px",
                }}
                objectFit="contain"
                className="overflow-hidden flex justify-center items-center rounded-md"
              />
            ) : (
              <ShowIcon
                icon={icon}
                style={{ minWidth: "50px", width: "50px" }}
              />
            )}
          </div>

          <div
            className={`${
              changeStyle
                ? "w-full items-center justify-between p-2"
                : "w-full flex-col justify-center flex items-start"
            } `}
          >
            <div className="flex justify-center  items-center w-full">
              <div
                className={`${
                  changeStyle ? "flex-col" : "flex-row  h-24 items-center"
                } flex justify-between w-full`}
              >
                <div className="text-[12px] text-ellipsis text-center">
                  {" "}
                  {trucateFileName(data?.name, 30, data)}
                  <br />{" "}
                </div>
                <div className="text-[12px] text-center ">
                  Type: {data?.type.split("/")[1]}, Size:
                  {(data?.size / 1024).toFixed(2)}
                  KB
                </div>
                <Link
                  href={`/file-preview/${data?.id}`}
                  className="bg-gray-400 ml-2  mt-2 text-white px-2 py-2 justify-center items-center h-auto text-center hover:bg-primary text-sm rounded-md"
                >
                  Send&nbsp;Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetAllFileByUser;
