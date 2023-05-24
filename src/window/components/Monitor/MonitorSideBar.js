import React, { useContext } from "react";
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

import MiniClassRoomCard from "../../components/classrooms/MiniClassRoomCard";

const MonitorSideBar = ({ setShowCode }) => {
  const { classroom } = useContext(AppContext);
  return (
    <aside className="h-screen sideBar transition-transform -translate-x-full sm:translate-x-0">
      <div className="h-full px-3 py-4 overflow-y-auto border-r-2">
        <div className="space-y-2 font-medium">Sessions</div>
        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
          <li>
            <div
          
              class="p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 "
              role="alert"
            >
              
              <div class="flex items-center">
                <p class="">This is a success alert</p>
              </div>
           
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default MonitorSideBar;
