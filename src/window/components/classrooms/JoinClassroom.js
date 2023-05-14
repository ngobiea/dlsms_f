import React, { useContext } from "react";
import { MdClose } from "react-icons/md";

import AppContext from "../../context/app";
import Input from "../App/Input";
import TextArea from "../App/TextArea";

const JoinClassroomForm = () => {
  const {
    register,
    handleSubmit,
    errorMessage,
    errors,
    createClassroom,
    errorType,
    setJoinClassModal,
    getClassroomCode,
  } = useContext(AppContext);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full py-12 overflow-x-hidden  bg-black bg-opacity-50 backdrop-filter overflow-y-auto md:inset-0 h-full max-h-full">
      <div className="container mx-auto mt-24 w-11/12 md:w-2/3 max-w-lg">
        <div className="relative py-8 px-5 md:px-10 bg-white opacity-100 shadow-md rounded border border-gray-400">
          <button
            onClick={() => {
              setJoinClassModal(false);
            }}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400  bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <MdClose className="text-lg text-title" />
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-title dark:text-white">
              Join a classroom with a code
            </h3>
            <form onSubmit={handleSubmit(getClassroomCode)}>
              <Input
                reg={register}
                labelText={"Classroom Code"}
                inputValue={"code"}
                valid={{ required: true }}
                errorMessage={"Classroom code is required and unique"}
                errors={errors}
              />
              <div className="flex w-full justify-center">
                <button
                  type="submit"
                  className="text-white  bg-sidebar hover:bg-sidebarHover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Join Classroom
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JoinClassroomForm;