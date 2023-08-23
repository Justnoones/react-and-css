import React from 'react'
import './index.css'
import { createPortal } from 'react-dom'

export default function Modal({children, danger = false}) {
  return (
    createPortal(
      <div className='modal-component'>
        <div className='modal-backdrop'>
          <div className='modal' style={{
            borderWidth : "2px",
            borderStyle : "solid",
            borderColor : danger ? "red" : "blue"
          }}>
            {children}
          </div>
        </div>
      </div>,
      document.getElementById("modal"))
  );
}
