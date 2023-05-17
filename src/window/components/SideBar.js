import React, { useContext, useState } from "react";
import { SiGoogleclassroom } from "react-icons/si";
import { TbFileReport, TbLogout } from "react-icons/tb";
import {
  MdOutlineAssignment,
  MdOutlineMonitor,
  MdOutlineNotificationsNone,
} from "react-icons/md";
import AppContext from "../context/app";
import {NavLink } from "react-router-dom";

const SideBar = () => {
  const { logout,uType } = useContext(AppContext);
  const activeClass =
    "flex flex-col border-white border-l-4 items-center py-3 px-2 text-white bg-title dark:text-white hover:bg-title hover:text-white dark:hover:bg-gray-700";
  const inActiveClass =
    "flex flex-col items-center py-3 px-2 text-white rounded-lg dark:text-white hover:bg-title hover:text-white dark:hover:bg-gray-700";
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-20 h-screen pt-10 transition-transform -translate-x-full bg-sidebar  sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="space-y-2">
        <NavLink
          className={(navData) =>
            navData.isActive ? activeClass : inActiveClass
          }
          to="/notification"
        >
          <MdOutlineNotificationsNone className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="text-xs font-light">Notifications </span>
        </NavLink>

        <NavLink
          className={(navData) =>
            navData.isActive ? activeClass : inActiveClass
          }
          to="/classroom"
        >
          <SiGoogleclassroom className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="text-xs font-light">Classrooms </span>
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? activeClass : inActiveClass
          }
          to="/assignment"
        >
          <MdOutlineAssignment className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="text-xs font-light">Assignments </span>
        </NavLink>
        {uType === "tutor" ? (
          <NavLink
            className={(navData) =>
              navData.isActive ? activeClass : inActiveClass
            }
            to="/monitor"
          >
            <MdOutlineMonitor className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="text-xs font-light">Monitor </span>
          </NavLink>
        ) : (
          ""
        )}
        {
          uType==='tutor'?
          <NavLink
            className={(navData) =>
              navData.isActive ? activeClass : inActiveClass
            }
            to="/report"
          >
            <TbFileReport className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="text-xs font-light">Reports </span>
          </NavLink>:''
        }

        <div onClick={logout}>
          <div className="flex flex-col items-center py-3 px-2 text-white rounded-lg dark:text-white hover:bg-title hover:text-white dark:hover:bg-gray-700">
            <TbLogout className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="text-xs font-light">Logout </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
