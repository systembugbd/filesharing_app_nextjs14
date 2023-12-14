"use client";

import { useState } from "react";
import AlertMessage from "./AlertMessage";
import FilePreview from "./FilePreview";
import ProgressBar from "./ProgressBar";

const UploadForm = ({
  UploadBtnClickHandle,
  progressCount,
  uploadCompleted,
}) => {
  const [file, setFile] = useState();
  const [errorMessage, setErrorMessage] = useState({
    message: "",
    type: "red",
  });
  const [successMessage, setSuccessMessage] = useState({
    message: "",
    type: "green",
  });

  const uploadFileHandler = (files) => {
    if (files && files.size > 5000000) {
      setErrorMessage((prev) => [
        { ...prev, message: "Maximum file size is 5MB" },
      ]);
      setTimeout(() => {
        setErrorMessage({});
      }, 1000);

      return;
    }

    //set file if is not empty and show success message
    setFile(files);
    if (progressCount == 100 && uploadCompleted == true) {
      setFile("");
    }
    setSuccessMessage((prev) => [
      { ...prev, message: `1 File added successfully` },
    ]);

    //remove success message after 3sec
    setTimeout(() => {
      setSuccessMessage({});
    }, 1000);
  };

  // console.log(errorMessage, successMessage);
  return (
    <div className="flex items-center justify-center text-center flex-col w-full">
      <div className="w-full lg:w-[70%] md:w-[80%] p-5">
        <div className="text-gray-500 mb-5 text-2xl">
          Start <span className="text-primary font-bold">Uploading</span> file
          and <span className="text-primary font-bold">Share</span> it
        </div>
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-blue-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-primary dark:text-blue-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-inecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-xl text-primary dark:text-gray-400">
              Click to <span className="font-semibold">Upload</span> or
              <span className="font-semibold"> Drag</span> and
              <span className="font-semibold"> Drop</span>
            </p>
            <p className="text-xs text-primary dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX SIZE 5MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) => uploadFileHandler(e.target.files[0])}
          />
        </label>
      </div>
      {file ? (
        <FilePreview file={file} removeFile={() => setFile(null)} />
      ) : null}
      {progressCount > 0 && progressCount < 100 ? (
        <ProgressBar progressCount={progressCount} />
      ) : (
        <button
          disabled={!file}
          className={`bg-primary 
        } text-gray-50 px-8 py-2 rounded-full disabled:bg-gray-400`}
          onClick={() => UploadBtnClickHandle(file)}
        >
          Upload
        </button>
      )}

      {errorMessage.message != "" ? (
        <AlertMessage alert={errorMessage} />
      ) : null}
      {successMessage.message != "" ? (
        <AlertMessage alert={successMessage} />
      ) : null}
    </div>
  );
};

export default UploadForm;
