import React, { useContext } from "react";
import AuthContext from "../../context/auth";
import { MdCheckCircle } from "react-icons/md";
const SingleUserCard = ({ userImage, user,userTitle }) => {
    const {userType,changeUserType,  }= useContext(AuthContext)
  return (
    <div
      className="bg-green-700 shadow-md border border-gray-200 rounded-lg w-36 h-36  dark:bg-green-700 dark:border-green-800 cursor-pointer hover:bg-green-900"
      onClick={() =>{changeUserType(user)}}
    >
      <img className="rounded-t-lg w-36 max-h-28" src={userImage} />

      <div className="">
        <p className="font-bold text-center text-gray-200 ">
                  {userTitle}
          { userType === user && (
            <MdCheckCircle className="inline-block ml-3 text-3xl" />
          )}
        </p>
      </div>
    </div>
  );
};

export default SingleUserCard;
