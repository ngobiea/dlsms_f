import React from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import ClassroomChatHeader from "../../components/classrooms/ClassroomChatHeader";
import ClassroomFiles from "./ClassroomFiles";
import ClassroomChatMessage from "../../components/classrooms/ClassroomChatMessage";
const ClassroomChat = ({ title, show, setShow }) => {
  return (
    <div className="flex-1  flex flex-col h-screen mr-20 mb-20">
      <ClassroomChatHeader show={show} setShow={setShow} />
      <Routes>
        <Route path="" element={<Navigate to={'/classroom/:id/chat'} />} />
        <Route path="chat" element={<ClassroomChatMessage />} />
        <Route path="file" element={<ClassroomFiles />} />
      </Routes>
    </div>
  );
};

export default ClassroomChat;
