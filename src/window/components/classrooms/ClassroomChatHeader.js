import React from "react";
import MiniClassRoomCard from "../../components/classrooms/MiniClassRoomCard";
import { RiArrowDownSLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const ClassroomChatHeader = ({ show, setShow }) => {
  const showClass =
    "z-10 fixed top-20 right-7 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44";
  const hideClass =
        "z-10 fixed hidden top-20 right-7 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44";
    const activeClass = "text-lg text-green-900 border-b-2 border-green-800";
    const inActiveClass = "text-lg text-green-900";
  return (
    <div className="flex  justify-between px-2 pt-3 pb-2 border-b-2 border-gray-200">
      <div className="relative flex items-center space-x-4">
        <MiniClassRoomCard title={"FC"} classes={"small"} />
        <NavLink
          to={"/classroom/:id/chat"}
          className={(navData) =>
            navData.isActive ? activeClass : inActiveClass
          }
        >
          Chat
        </NavLink>
        <NavLink
          to={"/classroom/:id/file"}
          className={(navData) =>
            navData.isActive ? activeClass : inActiveClass
          }
        >
          Files
        </NavLink>
      </div>
      <div className="mr-5 ">
        <div className="flex items-center justify-start">
          <button className="h-9 px-2 border-y border-l border-green-600  text-green-800 rounded-l hover:bg-gray-100 ">
            Session
          </button>
          <RiArrowDownSLine
            onClick={() => setShow(!show)}
            className="border-y-2 border-x border-green-600 h-9 w-8 rounded-r text-green-600"
          />
        </div>

        <div className={show ? showClass : hideClass}>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Class Session Now
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Schedule Class Session
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Schedule Exam Session
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClassroomChatHeader;
