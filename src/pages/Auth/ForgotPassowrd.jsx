import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { CardInput, Button } from "../../components";
import { Link } from "react-router-dom";
import ButtonBack from "../../components/Button/ButtonBack";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassowrd } from "../../redux/action/auth";

const ForgotPassowrd = () => {
  const dispatch = useDispatch();
  const checkForgot = useSelector((state) => state.forgot_password);
  const [inputData, setInputData] = useState({
    email: "",
  });

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  };

  const sendEmail = (event) => {
    event.preventDefault();
    dispatch(forgotPassowrd(inputData));
    setInputData({ ...inputData, email: "" })
  };
  console.log(checkForgot?.ErrorMessage);
  window.scrollTo(0, 0);
  return (
    <div className="container-fluid custom-container">
      <ButtonBack />
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <div className="d-flex flex-column gap-3 mb-5 align-items-center">
          <h1 className="title-register">Forgot Password</h1>
          <p className="description-register">Send to Your Email</p>
        </div>
      </div>
      <form className="container-fluid container-form">
        {checkForgot.isLoading ? (
          <div className="alert alert-primary text-center">loading ...</div>
        ) : null}
        {checkForgot.isError ? (
          <div className="alert alert-danger text-center">
            Loading Failed : {checkForgot.ErrorMessage ?? "-"}
          </div>
        ) : null}

        <div className="d-flex flex-column justify-content-center gap-2 mb-4">
          <CardInput
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
          />
        </div>
        <Button text="Send Email" onClick={sendEmail} />
      </form>
    </div>
  );
};

export default ForgotPassowrd;
