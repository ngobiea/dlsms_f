import React, { createContext, useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import socketIOClient from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { getCurrentTime } from "../helper/util";
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
  const [uType, setUType] = useState("");
  const [uId, setUId] = useState("");
  const [classroom, setClassroom] = useState({});
  const [createClassModal, setCreateClassModal] = useState(false);
  const [createAssignmentModal, setCreateAssignmentModal] = useState(false);
  const [joinClassModal, setJoinClassModal] = useState(false);
  const [files, setFiles] = useState([]);
  const [time, setTime] = useState(getCurrentTime());
  const [date, setDate] = useState(new Date());

  const navigate = useNavigate();

  useEffect(() => {
    getAuthValues();
  }, [getAuthValues]);
  const getAuthValues = useCallback(() => {
    window.account.getAuth((e, auth) => {
      const { userType, userId, userToken } = auth;
      setUType(userType);
      setUId(userId);
      setToken(userToken);
    });
  }, []);
  const fetchClassrooms = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/${uType}/classrooms`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      setClassrooms(response.data.classrooms);
    } catch (error) {
      console.log(error);
    }
  }, [uType, token]);
  const logout = () => {
    axios
      .post(`http://localhost:8080/logout`)
      .then((data) => {
        setUType("");
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
    try {
      const response = await axios.get(
        `http://localhost:8080/student/classrooms/${data.code}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data.classroomId._id);
      setJoinClassModal(false);
      navigate("/join");

      resetField("code");
      resetField("code");
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setErrorType(error.response.data.type);
      reset({ isSubmitSuccessful: false });
      console.log(error.response.data.message);
    }
  };
  const checkClassroomRules = () => {
    console.log("This functions runs");
  };
  const createAssignment = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("instruction", data.instruction);
    formData.append("points", data.points);
    const selectedDateTime = new Date(`${date}T${time}:00`);
    formData.append("dueDate", selectedDateTime);
    formData.append("dueTime", time);
    formData.append("classroomId", classroom._id);
    if (files.length > 0) {
      files.forEach((file) => {
        formData.append("files", file);
      });
    }

    console.log(formData.forEach((value, key) => console.log(key, value)));
    axios
      .post(`http://localhost:8080/tutor/create-assignment`, formData, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        resetField("title");
        resetField("description");
        resetField("points");
        setFiles([]);
        setTime(getCurrentTime());
        setDate(new Date());
      })
      .catch((error) => {
        console.log(error);
      });

   
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
    classrooms,
    uType,
    token,
    uId,
    fetchClassrooms,
    setJoinClassModal,
    joinClassModal,
    getClassroomCode,
    setErrorMessage,
    checkClassroomRules,
    classroom,
    setClassroom,
    errorType,
    createAssignment,
    createAssignmentModal,
    setCreateAssignmentModal,
    setFiles,
    files,
    time,
    setTime,
    date,
    setDate,
  };

  return (
    <AppContext.Provider value={valueToShare}>{children}</AppContext.Provider>
  );
};

export { Provider };
export default AppContext;
