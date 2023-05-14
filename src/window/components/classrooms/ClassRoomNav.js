import React, { useContext } from "react";
import { MdOutlineGroupAdd } from "react-icons/md";
import AppContext from "../../context/app";
const ClassroomNav = () => {
  const { setCreateClassModal,userType, setJoinClassModal } = useContext(AppContext);
  return (
    <nav className="bg-gray-100 fixed w-full z-20 top-10 left-0 border-b border-gray-200">
      <div className="flex flex-wrap items-center justify-between  p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap ml-24">
          ClassRooms
        </span>
        <div
          onClick={() => {
            if (userType === "tutor") {
            setCreateClassModal(true);
              
            }else if(userType === "student"){
              setJoinClassModal(true);
            }
          }}
          className="flex md:order-2 cursor-pointer mr-3 box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);"
        >
          <button
            type="button"
            className="text-gray-900  bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
          >
            <MdOutlineGroupAdd className="text-2xl mr-1" />
            {userType === "tutor" ? "Create Classroom" : "Join Classroom"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default ClassroomNav;
