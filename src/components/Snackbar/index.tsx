import { useContext, useEffect } from "react";
import SnackbarContext from "src/context/snackbar";
import { SnackbarTypes } from "src/shared/types/snackbar";

const Snackbar = () => {
  const { isOpen, message, duration, type, hide } = useContext(SnackbarContext);

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        hide();
      }, duration);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`flex justify-between items-center fixed z-50 top-6 left-1/2 -translate-x-1/2 mx-0 rounded-lg drop-shadow-md max-w-[600px] w-1/2 py-3 px-6 text-white ${
        type === SnackbarTypes.SUCCESS ? "bg-green-600" : "bg-red-600"
      } `}
    >
      <span>{message}</span>
      <button
        onClick={hide}
        className={`flex items-center justify-center text-xl w-6 h-6 rounded-full ${
          type === SnackbarTypes.SUCCESS
            ? "hover:bg-green-700"
            : "hover:bg-red-700"
        } transition-colors`}
      >
        &times;
      </button>
    </div>
  );
};

export default Snackbar;
