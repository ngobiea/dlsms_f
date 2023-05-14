import React,{useContext} from "react";
import { MdClose } from "react-icons/md";
import AuthContext from "../../context/auth";

const ErrorMessage = ({ errorMessage }) => {
    const { setErrorMessage } = useContext(AuthContext);
  return (
    <div
      id="alert-2"
      className="flex p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <span className="sr-only">Info</span>
      <div className="ml-3 text-sm font-bold">{errorMessage}</div>
          <button
              onClick={()=>{setErrorMessage('')}}
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
        data-dismiss-target="#alert-2"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <MdClose />
      </button>
    </div>
  );
};

export default ErrorMessage;
