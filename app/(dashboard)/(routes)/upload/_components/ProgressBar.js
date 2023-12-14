const ProgressBar = ({ progressCount = 20 }) => {
  return (
    <div className="w-full lg:w-[70%] md:w-[80%] p-5 justify-center margin-auto">
      <span id="ProgressLabel" className="sr-only">
        Loading
      </span>

      <span
        role="progressbar"
        aria-labelledby="ProgressLabel"
        aria-valuenow="75"
        className="block rounded-full bg-gray-200"
      >
        <span
          className="block h-3 text-[10px] text-white rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-indigo-400 to-indigo-500"
          style={{ width: `${progressCount}%` }}
        >
          {Number(progressCount).toFixed(0)}%
        </span>
      </span>
    </div>
  );
};

export default ProgressBar;
