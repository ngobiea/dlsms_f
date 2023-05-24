import React,{useContext} from "react";
import { MdGroups, MdArrowBack } from "react-icons/md";
import { RiChatPollLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  MdOutlineAssignment,
  MdLink,
  MdContentCopy,
  MdOutlineHome,
} from "react-icons/md";
import exam from "../../../public/assets/images/exam.png";
import classSession from "../../../public/assets/images/webinar.png";
import AppContext from "../../context/app";


import MiniClassRoomCard from "./MiniClassRoomCard";

const ClassRoomSideBar = ({ setShowCode }) => {
  const {classroom} = useContext(AppContext);
  return (
    <aside
      className=" w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto border-r-2">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/classroom"
              className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100"
            >
              <MdArrowBack />
              <span className="ml-3">All Classrooms</span>
            </Link>
          </li>
          <li>
            <MiniClassRoomCard title={"FC"} classes={"medium"} />
          </li>

          <li>
            <Link
              to="/classroom/:id"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white"
            >
              <MdOutlineHome />
              <span className="flex-1 ml-3 whitespace-nowrap">
                {"Classroom 1"}
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={"/classroom/:id/assignment"}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <MdOutlineAssignment />
              <span className="flex-1 ml-3 whitespace-nowrap">Assignments</span>
            </Link>
          </li>
          <li>
            <div
              onClick={() => {
                setShowCode(true);
              }}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <MdLink />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Classroom Code
              </span>
            </div>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <img src={classSession} alt="classSession" className="w-6 h-6" />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Class Sessions
              </span>
            </a>
          </li>
          <li>
            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <img src={exam} alt="exam" className="w-6 h-6" />

              <span className="flex-1 ml-3 whitespace-nowrap">
                Exam Sessions
              </span>
            </div>
          </li>
          <li>
            <div
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <RiChatPollLine className="" />

              <span className="flex-1 ml-3 whitespace-nowrap">
                Classroom polls
              </span>
            </div>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
              <MdGroups className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ml-4">Members</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default ClassRoomSideBar;
