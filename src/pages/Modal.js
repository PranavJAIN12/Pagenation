import React, { useState, useEffect } from 'react';
import './Modal.css';

export default function Modal({ isOpen, onClose, data, onSave }) {
  const [isEditing, setIsEditing] = useState(false); 
  const [formData, setFormData] = useState(data || {}); 

  useEffect(() => {
    if (data) {
      setFormData(data);  
    }
  }, [data]);

  if (!isOpen || !data) {
    return null;  
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Company Details</h2>
        {isEditing ? (
          <div>
            <p><strong>Domain:</strong> <input name="domain" value={formData.domain || ''} onChange={handleChange} /></p>
            <p><strong>Name:</strong> <input name="name" value={formData.name || ''} onChange={handleChange} /></p>
            <p><strong>Score:</strong> <input name="score" value={formData.score || ''} onChange={handleChange} /></p>
            <p><strong>Email:</strong> <input name="public_email" value={formData.public_email || ''} onChange={handleChange} /></p>
            <p><strong>Phones:</strong> <input name="phones" value={formData.phones || ''} onChange={handleChange} /></p>
            <p><strong>URL:</strong> <input name="url" value={formData.url || ''} onChange={handleChange} /></p>
            <p><strong>Country:</strong> <input name="country" value={formData.country || ''} onChange={handleChange} /></p>
          </div>
        ) : (
          <div>
            <p><strong>Domain:</strong> {data.domain}</p>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Score:</strong> {data.score}</p>
            <p><strong>Email:</strong> {data.public_email}</p>
            <p><strong>Phones:</strong> {data.phones}</p>
            <p><strong>URL:</strong> {data.url}</p>
            <p><strong>Country:</strong> {data.country}</p>
          </div>
        )}

        <button onClick={onClose} style={{marginRight:'1rem'}}>Close</button>
        {isEditing ? (
          <button onClick={handleSave} style={{marginRight:'1rem'}}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </div>
    </div>
  );
}
