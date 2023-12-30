// CardForm.js
import React, { useState } from 'react';
import "./CardForm.css"

const CardForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    id: '',
    author: '',
    img: null, // You may need to handle file upload
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add input fields for id, author, img, and description */}
      <input type="text" name="id" value={formData.id} onChange={handleChange} placeholder="ID" required />
      <input type="text" name="author" value={formData.author} onChange={handleChange} placeholder="Author" required />
      <input type="file" name="img" onChange={handleChange} accept="image/*" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CardForm;
