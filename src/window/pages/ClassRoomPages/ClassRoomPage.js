import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AppContext from "../../context/app";
import ClassRoomSideBar from "../../components/classrooms/ClassRoomSideBar";
import ClassroomChat from "./ClassroomChat";
import ClassroomCode from "../../components/classrooms/ClassroomCode";
import "./classroomPage.css";

const ClassRoomPage = () => {
  const { classrooms } = useContext(AppContext);
  const [classroom, setClassroom] = useState({});
  const [showCode, setShowCode] = useState(false);
  const [show, setShow] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    setClassroom(classrooms.find((item) => item._id == id));
    console.log(classrooms);
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
      {showCode && <ClassroomCode setShowCode={setShowCode} />}
      <ClassroomChat show={show} setShow={setShow} />

    </div>
  );
};

export default ClassRoomPage;
