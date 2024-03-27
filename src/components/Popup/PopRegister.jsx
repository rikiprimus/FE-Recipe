import React from 'react'

const PopRegister = () => {
  return (
    <>
      {/* content pop-up Set start */}
      <div id="myPopupset" className="popup">
        <div className="popup-content d-flex flex-column align-items-center gap-4">
          <span className="close fs-2" onclick="myFunctionSet()">
            ×
          </span>
          <h1 className="title mb-4">You're all set</h1>
          <label>Please check your email account for verification</label>
          <input
            type="submit"
            onclick="myFunctionSet(); myFunctionAlready()"
            defaultValue="OK"
            style={{ width: "50%" }}
          />
        </div>
      </div>
      {/* content pop-up Set end */}
    </>
  )
}

export default PopRegister
