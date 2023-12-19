"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ShowIcon from "../../../upload/_components/ShowIcon";
import Link from "next/link";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { app } from "/firebaseConfig";
import GlobalApi from "../../../../../_components/GlobalApi";

const FileShareForm = ({ file }) => {
  const db = getFirestore(app);

  const [toggelPassword, setToggelPassword] = useState();
  const [receiverEmail, setReceiverEmail] = useState();
  const [note, setNote] = useState();
  const [showSaved, setShowSaved] = useState();
  const { fileUrl, sortUrl, userEmail, name, password, type, size } =
    file || {};
  const icon = type?.split("/")[1];
  const [passwordInput, setPasswordInput] = useState();

  //Saved passwrod to database
  const savedPassword = async () => {
    const fileDocRef = doc(
      db,
      process.env.NEXT_PUBLIC_DB_COLLECTION_NAME,
      file?.id
    );

    // Atomically add a new region to the "regions" array field.
    try {
      await updateDoc(fileDocRef, {
        password: passwordInput,
      });
      setShowSaved(true);
    } catch (error) {
      setShowSaved(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowSaved(false);
    }, 1000);
  }, [showSaved]);

  const sendMailHandler = (e) => {
    e.preventDefault();

    const data = {
      sortUrl,
      userEmail,
      name,
      password,
      type,
      size,
      receiverEmail,
      note,
      passwordInput,
      fileUrl,
    };
    try {
      GlobalApi.SendEmail(data).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section className="relative flex flex-wrap items-center justify-center p-4 w-full">
        <div className="w-full flex flex-col justify-center items-center border rounded-md px-4 py-1 m-4 sm:px-4 sm:py-4 lg:w-1/2 md:w-full ">
          <div className="w-full h-full pb-4 overflow-hidden">
            {icon == "png" ||
            icon == "jpeg" ||
            icon == "gif" ||
            icon == "jpg" ? (
              <Image
                alt={name}
                src={fileUrl}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                objectFit="contain"
                className="overflow-hidden flex justify-center items-center rounded-md "
              />
            ) : (
              <ShowIcon icon={icon} />
            )}
          </div>
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-base">
              <Link
                href={fileUrl ? fileUrl : "#"}
                className="text-primary hover:text-pdark"
              >
                {name}
              </Link>
            </h1>

            <p className="mt-4 text-[12px] text-gray-500">
              {type &&
                size &&
                `Type: ${type} | Size: ${(size / 1024).toFixed(2)}KB`}
            </p>
          </div>
        </div>

        <form
          id="emailform"
          className="mx-auto mb-4 max-w-md p-4 border rounded-md w-full"
        >
          <div>
            <label htmlFor="url" className="sr-only">
              Short URL
            </label>

            <div className="relative">
              <input
                type="text"
                value={sortUrl}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder={"Sort URL"}
                name="url"
                id="url"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="my-4">
            <label htmlFor="email" className="sr-only">
              Sender Email
            </label>

            <div className="relative">
              <input
                type="email"
                value={userEmail}
                name="sender"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Sender email"
                disabled
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="my-4">
            <label htmlFor="email" className="sr-only">
              Receiver Email
            </label>

            <div className="relative">
              <input
                type="email"
                value={receiverEmail}
                name="receiver"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Receiver email"
                onChange={(e) => setReceiverEmail(e.target.value)}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex justify-between my-4 items-center border p-2 rounded-md">
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type={toggelPassword ? "text" : "password"}
                value={passwordInput}
                name="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder={`${
                  password ? "Protected By: " + password : "Enter Password"
                }`}
                onChange={(e) => setPasswordInput(e.target.value)}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ${
                    toggelPassword ? "text-gray-800" : "text-gray-400"
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
            <div className="flex items-center justify-between my-4">
              <button
                type="button"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                onClick={() => savedPassword()}
              >
                {showSaved ? "Password Saved" : "save"}
              </button>
            </div>
          </div>

          <div className="">
            <label htmlFor="OrderNotes" className="sr-only">
              Add Some Info
            </label>

            <textarea
              id="OrderNotes"
              className="mt-2 p-4 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
              rows="4"
              name="note"
              placeholder="Enter any additional info..."
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </div>
          <div className="flex items-center justify-between my-4">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              onClick={(e) => sendMailHandler(e)}
            >
              Send Email
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default FileShareForm;
