import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { Provider } from "./context/auth";
import SignupPage from "./pages/AuthenticationPages/SignupPage";
import LoginPage from "./pages/AuthenticationPages/LoginPage";
const AccountApp = () => {
  return (
    <HashRouter>
      <Provider>
        <Routes>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/" element={<LoginPage />}></Route>
        </Routes>
      </Provider>
    </HashRouter>
  );
};

export default AccountApp;
