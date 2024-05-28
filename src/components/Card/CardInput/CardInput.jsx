import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./CardInput.css";

const CardInput = ({ type, name, text, placeholder, onChange, value }) => {
  return (
    <div>
      <div className="d-flex flex-column gap-1 mb-3">
        <label htmlFor={name} className="label-data">
          {text}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className="input-data"
          onChange={onChange}
          value={value}
          required
        />
      </div>
    </div>
  );
};
const InputPassword = ({
  name,
  text,
  placeholder,
  onChange,
  value,
  autoComplete,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="d-flex flex-column gap-1 mb-3">
      <label htmlFor={name} className="label-data">
        {text}
      </label>
      <div className="input-group">
        <input
          type={showPassword ? "text" : "password"}
          id={name}
          name={name}
          placeholder={placeholder}
          className="input-data"
          onChange={onChange}
          value={value}
          autoComplete={autoComplete}
          required
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="btn-password-toggle"
        >
          {showPassword ? <FaEye color="#EFC81A" size={25} /> : <FaEyeSlash color="#EFC81A" size={25} />}
        </button>
      </div>
    </div>
  );
};

export { CardInput, InputPassword };
