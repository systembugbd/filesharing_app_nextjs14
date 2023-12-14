const UploadSuccess = () => {
  return (
    <div className="h-screen justify-center items-center flex">
      {/* Success */}
      <div className="inline-flex flex-col items-center justify-center rounded-full  px-10 py-3 text-xl text-emerald-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="-ms-1 me-1.5 h-20 w-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <p className="whitespace-nowrap text-3xl">File Uploaded Successfully</p>
      </div>
    </div>
  );
};

export default UploadSuccess;
