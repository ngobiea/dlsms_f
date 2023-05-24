import React, { useContext } from "react";

import AppContext from "../../context/app";
import SessionCard from "../../components/Monitor/SessionCard";
import MonitorSideBar from "../../components/Monitor/MonitorSideBar";
import "./Video.css";
const MonitorPage = ({ setShowCode }) => {
  const { setCreateClassModal, uType, setJoinClassModal } =
    useContext(AppContext);
  // create 10 session card
  const sessionCards = Array.from(Array(50).keys()).map((i) => (
    <SessionCard key={i} />
  ));
  return (
    <div className="flex ml-20 mt-10 h-full fixed z-30 w-full">
      <MonitorSideBar />
      <div className="h-screen w-full px-3 py-4 mr-20 overflow-y-auto border-r-2">
        <div className="grid grid-cols-4 gap-1 h-0">{sessionCards}</div>
      </div>
    </div>
  );
};

export default MonitorPage;
