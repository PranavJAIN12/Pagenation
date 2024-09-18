import React from 'react'
import './Modal.css'

export default function Modal({isOpen,onClose, data}) {
    if (!isOpen){
        return null;
    }
         
  return (
    <div className="modal-overlay">
    <div className="modal-content">
      <h2>Company Details</h2>
      <p><strong>Domain:</strong> {data.domain}</p> 
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Score:</strong> {data.score}</p>
      <p><strong>Email:</strong> {data.public_email}</p>
      <p><strong>Phones:</strong> {data.phones}</p>
      <p><strong>URL:</strong> {data.url}</p>
      <p><strong>Country:</strong> {data.country}</p>
      
      <button onClick={onClose}>Close</button>  
    </div>
  </div>
  )
}
