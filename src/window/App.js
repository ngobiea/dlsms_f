import React from "react";
import TitleNav from "./components/TitleNav";
import SideBar from "./components/SideBar";
import { Routes, Route, Navigate } from "react-router-dom";

import ClassRoomsPage from "./pages/ClassRoomPages/ClassRoomsPage";
import MonitorPage from "./pages/MonitorPages/MonitorPage";
import AssignmentPage from "./pages/AssignmentPages/AssignmentPage";
import NotificationPage from "./pages/NotificationPages/NotificationPage";
import ReportPage from "./pages/ReportPages/ReportPage";
import ClassRoomPage from "./pages/ClassRoomPages/ClassRoomPage";
import JoinPage from "./pages/ClassRoomPages/JoinPage";
import ImagePage from "./pages/ClassRoomPages/ImagePage";

const App = () => {
  return (
    <>
      <TitleNav />
      <SideBar />
      <Routes>
        <Route path="/"  element={<Navigate replace to={"/classroom"} />} />
        <Route path="/classroom" element={<ClassRoomsPage />} />
        <Route path="/classroom/:id/*" element={<ClassRoomPage /> } />
        <Route path="/monitor" element={<MonitorPage />} />
        <Route path="/assignment" element={<AssignmentPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/image" element={<ImagePage />} />

      </Routes>
    </>
  );
};

export default App;
