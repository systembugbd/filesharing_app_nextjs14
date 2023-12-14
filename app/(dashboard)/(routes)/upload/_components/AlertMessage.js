import { AlertCircle } from "lucide-react";

const AlertMessage = ({ alert }) => {
  return (
    <div
      className={`flex ${
        !alert[0]?.message && "hidden"
      } gap-2 items-center justify-center mt-5 ${
        alert[0]?.type == "red" ? "bg-red-500" : "bg-green-500"
      } rounded-full p-2 text-white `}
    >
      <AlertCircle />
      {alert[0]?.message}
    </div>
  );
};

export default AlertMessage;
