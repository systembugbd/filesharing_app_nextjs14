"use client";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { app } from "./../../../firebaseConfig";
import Image from "next/image";
import ShowIcon from "../../(dashboard)/(routes)/upload/_components/ShowIcon";
import Link from "next/link";
import Spinner from "./../../_components/Spinner";
import {
  ArrowLeftRightIcon,
  LucideToggleLeft,
  LucideToggleRight,
  SwitchCameraIcon,
} from "lucide-react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { trucateFileName } from "../../utils/utilities";

const FilePreview = ({ params }) => {
  const db = getFirestore(app);
  const [file, setFile] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [changeDesign, setChangeDesign] = useState(true);
  const fileId = params.fileId;
  const icon = file?.type.split("/")[1];
  const [toggelPassword, setToggelPassword] = useState();
  const [passwordInput, setPasswordInput] = useState("");
  const [showSaved, setShowSaved] = useState();

  useEffect(() => {
    fileId && getRequestedFile(fileId);
  }, []);
  const getRequestedFile = async (fileId) => {
    const docRef = doc(db, "fileSharingUpload", fileId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setFile(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {file ? (
        <div className="flex text-center justify-center items-center flex-col">
          <div
            className="bg-green-200 rounded-full p-4 mt-2 cursor-pointer"
            onClick={() => setChangeDesign(!changeDesign)}
          >
            {!changeDesign ? <LucideToggleRight /> : <LucideToggleLeft />}
          </div>
          <div className="text-2xl font-bold text-center p-4">
            <span className="text-primary">{file?.userName}</span> shared a file
            with you to Download
          </div>
          {file?.password && (
            <div className="text-sm text-gray-400">
              The file is password protected, Please enter the password to
              download the file.
            </div>
          )}

          <div
            className={`${
              !changeDesign
                ? "w-full max-w-sm bg-white border border-gray-200 mt-4 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                : "justify-center items-center flex w-auto border p-10 m-4"
            } `}
          >
            <div
              className={`${
                !changeDesign
                  ? "flex flex-col items-center m-2"
                  : "flex justify-center items-center gap-8 flex-col lg:flex-row"
              } `}
            >
              <div
                className={`${
                  !changeDesign ? "h-auto rounded-lg" : "h-auto rounded-lg"
                } `}
              >
                <div
                  className={`${
                    !changeDesign
                      ? "w-full h-full overflow-hidden flex justify-center p-5 items-center"
                      : "w-full h-full overflow-hidden flex justify-center items-center"
                  } `}
                >
                  {icon == "png" ||
                  icon == "jpeg" ||
                  icon == "gif" ||
                  icon == "jpg" ? (
                    <Image
                      alt={file?.name ? file?.name : "Shared File"}
                      src={file?.fileUrl}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "auto",
                        height: "auto",
                        maxWidth: "300px",
                      }}
                      objectFit="contain"
                      className="overflow-hidden flex justify-center items-center rounded-md"
                    />
                  ) : (
                    <ShowIcon icon={icon} />
                  )}
                </div>
              </div>
              <div className="h-auto rounded-lg bg-gray-200 m-4">
                <article
                  className={`${
                    !changeDesign
                      ? ""
                      : "hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                  }`}
                >
                  <div className="m-4 rounded-[10px] bg-white sm:p-6">
                    <time
                      dateTime="2022-10-10"
                      className="block text-xs text-gray-500"
                    >
                      {Date(2016, 11, 17, 0, 0, 0, 0)}
                      <br />

                      {file?.type && file?.size
                        ? file?.type +
                          " | " +
                          (file?.size / 1080).toFixed(2) +
                          "KB"
                        : ""}
                    </time>

                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                      {trucateFileName(file?.name, 15, file)}
                    </h3>

                    {file?.password && (
                      <div className="flex justify-between my-4 items-center p-2 rounded-md">
                        <label htmlFor="password" className="sr-only">
                          Password
                        </label>

                        <div className="relative w-full">
                          <input
                            type={toggelPassword ? "text" : "password"}
                            value={passwordInput ? passwordInput : ""}
                            name="password"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="This file is password Protected, Please Enter Password"
                            onChange={(e) => setPasswordInput(e.target.value)}
                          />

                          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-4 w-4 ${
                                toggelPassword
                                  ? "text-gray-800"
                                  : "text-gray-400"
                              } hover:text-gray-800 cursor-pointer`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              onClick={() => setToggelPassword(!toggelPassword)}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="mt-4 flex flex-wrap gap-1 justify-center items-center">
                      {(file?.password && file?.password == passwordInput) ||
                      (file?.password == "" && passwordInput == "") ? (
                        <button
                          onClick={() => window.open(file?.fileUrl)}
                          className={`disabled:bg-gray-200 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                        >
                          Download
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default FilePreview;
