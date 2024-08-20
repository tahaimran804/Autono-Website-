import React, { useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";


const Modal = ({ show, onClose, children }) => {
  return (
    <div className={`show_Modal ${show ? 'Active' : ''}`}>
      <button className="modal-close" onClick={onClose}><IoMdCloseCircle /></button>
      <div className="modal-content">
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal;
