import React from "react";
import logo from '../../public/assets/logo/dlsms.jpg'
import '../App.css'
const TitleNav = () => {


  return (
    <nav className="fixed top-0 z-50 w-full pb-2 bg-title  dark:bg-gray-800 dark:border-gray-700 titleD">
      <span className="self-center text-xl  font-semibold sm:text-2xl whitespace-nowrap text-white">
        DLSMS
      </span>
    </nav>
  );
};

export default TitleNav;
