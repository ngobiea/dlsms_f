import React, { useContext } from "react";
import { Route,Routes,Navigate } from "react-router-dom";
import AppContext from "../../context/app";
import ClassroomAssignmentHeader from "./AssignmentHeader";
import CreateAssignment from "./CreateAssignment";
import Assigned from "./Assigned";
import GradedAssignment from "./GradedAssignment";
const ClassroomAssignmentPage = () => {
    const {  } = useContext(AppContext);
    return (
      <div className="flex-1 flex flex-col h-screen mr-20 mb-20">
        <ClassroomAssignmentHeader />
        <Routes>
          <Route path="" element={<Navigate to={'/classroom/:id/assignment/assign'} />} />
          <Route path="/assign" element={<Assigned />} />
          <Route path="create" element={<CreateAssignment />} />
          <Route path="graded/*" element={<GradedAssignment />} />
        </Routes>
      </div>
    );
}

export default ClassroomAssignmentPage