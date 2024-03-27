import React from 'react'

const PopDone = () => {
  return (
    <>
      {/* content pop-up Already start */}
      <div id="myPopupalready" className="popup">
        <div className="popup-content d-flex flex-column align-items-center gap-4">
          <span className="close fs-2" onclick="myFunctionSet()">
            ×
          </span>
          <h1 className="title mb-4">Account has been set up</h1>
          <label>Account activated successfully, please login</label>
          <a
            className="submit text-center"
            href="/Auth/Login.html"
            value="OK"
            style={{ width: "50%" }}
          >
            Ok
          </a>
        </div>
      </div>
      {/* content pop-up Already end */}
    </>
  )
}

export default PopDone
