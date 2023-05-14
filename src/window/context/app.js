import React, { createContext, useState, useCallback, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import socketIOClient from "socket.io-client";
const AppContext = createContext();
const WS = "http://localhost:8080";

const ws = socketIOClient(WS);

const Provider = ({ children }) => {
  const {
    register,
    handleSubmit,
    resetField,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  window.account.getToken(async (e, tokenReceive) => {
    setToken(tokenReceive);
  });
  const [classrooms, setClassrooms] = useState([]);
  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorType, setErrorType] = useState("");
  const [userType, setUserType] = useState("");
  const [userId, setUserId] = useState("");

  const [createClassModal, setCreateClassModal] = useState(false);
  const [joinClassModal, setJoinClassModal] = useState(false);
  useEffect(() => {
    window.account.getUserType((e, userTypeReceive) => {
      setUserType(userTypeReceive);
    });
    window.account.getToken(async (e, tokenReceive) => {
      setToken(tokenReceive);
    });
    window.account.getUserId(async (e, userIdReceive) => {
      setUserId(userIdReceive);
    });
  }, []);
  useEffect(() => {
    console.log(token);
    if (token && userType) {
      fetchClassrooms();
    }
  }, [token, userType, userId]);
  const fetchClassrooms = async () => {
    const response = await axios.get(
      `http://localhost:8080/${userType}/classrooms`,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    setClassrooms(response.data.classrooms);
    console.log(response.data);
  };
  const logout = () => {
    axios
      .post(`http://localhost:8080/logout`)
      .then((data) => {
        setUserType("");
        setToken("");
        window.account.logout();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  async function createClassroom(data) {
    try {
      const code = uuidv4().replace(/-/g, "").substring(0, 8);
      data.code = code;
      const response = await axios.post(
        `http://localhost:8080/tutor/create-classroom`,
        data,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const updatedClassrooms = [...classrooms, response.data.classroom];
      setClassrooms(updatedClassrooms);
      setErrorType("");
      setCreateClassModal(false);
      resetField("name");
      resetField("description");
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setErrorType(error.response.data.type);
      reset({ isSubmitSuccessful: false });
    }
  }
  const getClassroomCode = async (data) => {
    console.log(data);
     try {
        const response = await axios.get(
          `http://localhost:8080/student/classrooms?code=${data.code}`,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );
        setErrorType("");
        setCreateClassModal(false);
        resetField("name");
        resetField("description");
      } catch (error) {
        setErrorMessage(error.response.data.message);
        setErrorType(error.response.data.type);
        reset({ isSubmitSuccessful: false });
      }
    setJoinClassModal(false);
      resetField("code");

  };
  const valueToShare = {
    logout,
    createClassModal,
    setCreateClassModal,
    register,
    handleSubmit,
    resetField,
    reset,
    errors,
    isSubmitSuccessful,
    createClassroom,
    errorMessage,
    errorType,
    classrooms,
    userType,
    fetchClassrooms,
    setJoinClassModal,
    joinClassModal,
    getClassroomCode,
  };

  return (
    <AppContext.Provider value={valueToShare}>{children}</AppContext.Provider>
  );
};

export { Provider };
export default AppContext;
