import React, { useContext } from "react";
import logo from "../../../public/assets/logo/dlsms2.png";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth";
import UserCard from "../../components/Auth/UserCard";
import Input from "../../components/Auth/Input";
import ErrorMessage from "../../components/error/ErrorMessage";
import EmailVerificationError from "../../components/error/EmailVerificationError";
const LoginPage = () => {
  const { register, handleSubmit, errorMessage, errors, loginUser, errorType } =
    useContext(AuthContext);
  return (
    
    <div>
      <div className="w-10 h-10">
        <img className="max-h-16 max-w-sm" src={logo} />
      </div>
      <div className="close">
        <p className="text-right absolute top-0 right-0 text-2xl font-semibold mr-4">
          <span
            onClick={() => window.account.exitApp()}
            className="cursor-pointer text-green-900"
          >
            X
          </span>
        </p>
      </div>
      <div className="container mx-auto mt-14">
        <p className="text-center text-3xl text-white font-bold mb-3">
          Choose Account Type
        </p>
        <UserCard />
        <form onSubmit={handleSubmit(loginUser)} className="mt-5">
          <Input
            reg={register}
            labelText={"Email"}
            inputValue={"email"}
            type={"text"}
            valid={{ required: true }}
            errorMessage={"Email is required"}
            errors={errors}
          />
          <Input
            reg={register}
            labelText={"Password"}
            inputValue={"password"}
            type={"password"}
            valid={{ required: true }}
            errorMessage={"Email is required"}
            errors={errors}
          />
          {errorType === "verify" && errorMessage && (
            <EmailVerificationError errorMessage={errorMessage} />
          )}
          {errorType !== "verify" && errorMessage && (
            <ErrorMessage errorMessage={errorMessage} />
          )}

          <div className="flex -mx-3">
            <div className="w-full px-3 mb-1">
              <div>
                <p className="w-1/2 inline-block font-bold px-1 text-white">
                  Don't Have an Account?{" "}
                  <Link to="signup">
                    <span className="text-green-700 cursor-pointer hover:text-green-900">
                      Create Account
                    </span>
                  </Link>
                </p>
                <button className="inline-block w-1/2 max-w-xs mx-auto bg-green-700 shadow-md border border-gray-200   dark:bg-green-700 dark:border-green-800 cursor-pointer hover:bg-green-900 rounded-lg px-3 py-3 font-semibold text-white">
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
