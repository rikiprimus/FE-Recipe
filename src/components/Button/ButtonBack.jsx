import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import './ButtonBack.css'

const ButtonBack = () => {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <div className="button-back" style={{position: 'absolute'}}>
      <button onClick={handleBack} className="button-back" >
        <div className="d-flex flex-row gap-2 align-items-center">
          <div>
            <AiOutlineLeft size={35} className="button-back-text" />
          </div>
          <span className="button-back-text mb-0">Go Back</span>
        </div>
      </button>
    </div>
  );
};

export default ButtonBack;
