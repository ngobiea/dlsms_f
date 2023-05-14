import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ClassRoomCard from "./ClassRoomCard";
import AppContext from "../../context/app";
const ClassRooms = () => {
  const { classrooms } = useContext(AppContext);
  // const classes = Array(1).fill(<ClassRoomCard  />);

  return (
    <div className="pl-28 pr-8 pt-36 bg-gray-100 h-screen">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {classrooms.map((item, index) => {
          return (
            <Link to={`/classroom/${item.code}`} key={item.code}>
              <ClassRoomCard title={item.name} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ClassRooms;
