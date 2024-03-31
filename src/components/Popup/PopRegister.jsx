import React from "react";
import './index.css'
import Button from "../Button/Button";

const PopRegister = ({onClick}) => {
  return (
    <>
      <div className="popup">
        <div className="d-flex flex-column gap-4 popup-content">
          <h2 className="popup-title">You're all set!</h2>
          <p className="popup-desc">Please check your email account for verification</p>
          <Button text="OK" onClick={onClick} />
        </div>
      </div>
    </>
  );
};

export default PopRegister;
