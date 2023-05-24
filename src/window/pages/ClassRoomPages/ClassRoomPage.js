import React, { useState, useContext, useEffect } from "react";
import { useParams, Route, Routes, Navigate } from "react-router-dom";
import AppContext from "../../context/app";
import ClassRoomSideBar from "../../components/classrooms/ClassRoomSideBar";
import ClassroomChat from "./ClassroomChat";
import ClassroomCode from "../../components/classrooms/ClassroomCode";
import ClassroomAssignmentPage from "../../components/Assignments/ClassroomAssignmentPage";
import "./classroomPage.css";

const ClassRoomPage = () => {
  const { classrooms, classroom, setClassroom } = useContext(AppContext);
  const [showCode, setShowCode] = useState(false);
  const [show, setShow] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    setClassroom(classrooms.find((item) => item._id == id));
    console.log(classroom);
  }, []);

  return (
    <div
      className="flex ml-20 mt-10 h-full fixed z-30 w-full"
      onClick={() => {
        if (show) {
          setShow(false);
        }
      }}
    >
      <ClassRoomSideBar setShowCode={setShowCode} />
      <Routes>
        <Route
          path="/*"
          element={<ClassroomChat show={show} setShow={setShow} />}
        />
        <Route path="assignment/*" element={<ClassroomAssignmentPage />} />
      </Routes>
      {showCode && <ClassroomCode setShowCode={setShowCode} />}
    </div>
  );
};

export default ClassRoomPage;
