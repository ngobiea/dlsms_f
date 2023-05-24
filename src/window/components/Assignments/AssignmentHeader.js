import React, { useContext } from "react";
import MiniClassRoomCard from "../classrooms/MiniClassRoomCard";
import { RiArrowDownSLine } from "react-icons/ri";
import AppContext from "../../context/app";
import { Link, NavLink } from "react-router-dom";

const ClassroomAssignmentHeader = () => {
  const { createAssignmentModal, setCreateAssignmentModal } =
    useContext(AppContext);
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
          to={"/classroom/:id/assignment/assign"}
          className={(navData) =>
            navData.isActive ? activeClass : inActiveClass
          }
        >
          Assigned
        </NavLink>
        <NavLink
          to={"/classroom/:id/assignment/graded"}
          className={(navData) =>
            navData.isActive ? activeClass : inActiveClass
          }
        >
          Graded
        </NavLink>
      </div>
      <Link to={"/classroom/:id/assignment/create"} className="mr-5 ">
        <div className="flex items-center justify-start">
          <div className="h-9 px-2 border-y border border-green-600  text-green-800 rounded hover:bg-gray-100 ">
            Crate Assignment
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ClassroomAssignmentHeader;
