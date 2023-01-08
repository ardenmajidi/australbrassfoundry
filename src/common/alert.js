import React from 'react'

const Alert = ({closeModal,handleDelete}) => {
  return (
    <div className="innerPop w500">
      <h3>Are you sure to delete this record</h3>
      <div className="w400 flex-d">
        <button className="btn white-btn" onClick={closeModal}>Cancle</button>
        <button className="btn danger-btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Alert

