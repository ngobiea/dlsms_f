import React, { useEffect, useContext } from "react";
import ClassroomNav from "../../components/classrooms/ClassRoomNav";

import ClassRoomSideBar from "../../components/classrooms/ClassRoomSideBar";
import MonitorPage from "../MonitorPages/MonitorPage";
import ClassRooms from "../../components/classrooms/Classrooms";
import AppContext from "../../context/app";
import CreateClassroomForm from "../../components/classrooms/CreateClassroomForm";
import JoinClassroomForm from "../../components/classrooms/JoinClassroom";
const ClassRoomsPage = () => {
  const { createClassModal, fetchClassrooms,joinClassModal } = useContext(AppContext);
  useEffect(() => {
    fetchClassrooms();
  }, []);
  return (
    <>
      <ClassroomNav />
      {createClassModal && <CreateClassroomForm />}
      {joinClassModal && <JoinClassroomForm />}
      <ClassRooms />
    </>
  );
};

export default ClassRoomsPage;

/**
 *
 */
