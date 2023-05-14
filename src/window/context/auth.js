import React, { createContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const AuthContext = createContext();
import { useNavigate } from "react-router-dom";

function Provider({ children }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    resetField,
    reset,
    formState: { errors, isSubmitSuccessful },
    setValue,
  } = useForm();
  const [userType, setUserType] = useState("tutor");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorType, setErrorType] = useState("");
  const [email, setEmail] = useState("");
  const [cookies, setCookies] = useState("");
  useEffect(() => {
    if (userType === "tutor") {
      resetField("studentId");
    }
    if (isSubmitSuccessful && errorMessage !== "") {
      resetField("firstName");
      resetField("lastName");
      resetField("institution");
      resetField("studentId");
    } else if (errorType === "email") {
      resetField("email");
    }
  }, [userType, isSubmitSuccessful, reset]);
  useEffect(() => {
    setCookies(localStorage.getItem('token'))
    console.log("cookie is:" + cookies);
    window.account.getEmail((e, emailReceive) => {
      setEmail(emailReceive);
      console.log(emailReceive);
      if (emailReceive) {
        setValue("email", emailReceive);
      }
    });
    window.account.getUserType((e, userTypeReceive) => {
      console.log(userTypeReceive);
      setUserType(userTypeReceive);
      console.log(userType);
    });
  }, []);
  const createUser = (data) => {
    setErrorMessage("");
    axios
      .post(`http://localhost:8080/${userType}/signup`, data)
      .then(function (response) {
        console.log(response);
        setErrorType("");
        navigate("/");
      })
      .catch(function (error) {
        console.log(error.response.data.message);
        setErrorMessage(error.response.data.message);

        setErrorType(error.response.data.type);
      });
  };

  const loginUser = (data) => {
    setEmail(data.email);
    axios
      .post(`http://localhost:8080/${userType}/login`, data)
      .then(function (response) {
        const expirationDate = 1713117329.737435;
        localStorage.setItem("token", response.data.token);
        setErrorType("");
        let token = {
          url: "https://dlsms.com",
          name: "userToken",
          value: response.data.token,
          expirationDate,
        };
        let userId = {
          url: "https://dlsms.com",
          name: "userId",
          value: response.data.userId,
          expirationDate,
        };
        let user = {
          url: "https://dlsms.com",
          name: "userType",
          value: userType,
          expirationDate,
        };
        let userEmail = {
          url: "https://dlsms.com",
          name: "email",
          value: response.data.email,
          expirationDate,
        };
        window.account.login(userId, token, user, userEmail);
      })
      .catch(function (error) {
        console.log(error);
        setErrorMessage(error.response.data.message);
        setErrorType(error.response.data.type);
        // reset({ isSubmitSuccessful: false });
      });
  };

  const resendVerification = () => {
    const data = {
      email,
    };
    axios
      .post(`http://localhost:8080/resend-verification-code`, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const changeUserType = (user) => {
    setUserType(user);
  };
  const valueToShare = {
    userType,
    changeUserType,
    register,
    handleSubmit,
    resetField,
    reset,
    errors,
    createUser,
    loginUser,
    isSubmitSuccessful,
    errorMessage,
    setErrorMessage,
    resendVerification,
    errorType,
  };
  return (
    <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
  );
}

export { Provider };
export default AuthContext;
