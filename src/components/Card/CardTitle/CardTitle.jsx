import React from "react";
import "./CardTitle.css";
import { BsSearch } from "react-icons/bs";

const CardTitle = ({ name, onKeyPress, ref }) => {
  return (
    <div>
      <div className="d-flex flex-column gap-3">
        <h1 className="title-text">
          Discover Recipe <br /> & Delicious Food
        </h1>
        <div className="position-relative d-flex flex-column gap-2 flex-md-row align-items-center">
          <BsSearch className="search-icon" />
          <input
            type="text"
            name={name}
            className="input-box"
            placeholder="Search by title"
            onKeyPress={onKeyPress}
            ref={ref}
          />
        </div>
      </div>
    </div>
  );
};

export default CardTitle;
