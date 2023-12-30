
import React, { useState, useEffect } from 'react';
import './SampleProject.css';

const SampleProject = () => {
  const [imageData, setImageData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    
    fetch('https://picsum.photos/v2/list?page=1&limit=6')
      .then((response) => response.json())
      .then((data) => setImageData(data));
  }, []);

  const handleUpdate = (id) => {
    const selected = imageData.find((image) => image.id === id);
    setSelectedImage(selected);
  };

  const handleCancelUpdate = () => {
    setSelectedImage(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const updatedData = imageData.map((image) =>
      image.id === selectedImage.id
        ? {
            ...image,
            id: e.target.id.value,
            author: e.target.author.value,
            url: e.target.url.value,
            description: e.target.description.value,
          }
        : image
    );
    setImageData(updatedData);
    
    setSelectedImage(null);
  };

  const handleDelete = (id) => {
   
    const updatedData = imageData.filter((image) => image.id !== id);
    setImageData(updatedData);
  };

  return (
    <div>
      <h1>Sample Project</h1>
      <div className="card-container">
        {imageData.map((image) => (
          <div key={image.id} className="card">
            <img src={image.download_url} alt={image.author} />
            <div className="image-details">
              <p className="id">ID: {image.id}</p>
              <p className="author">Author: {image.author}</p>
              <p className="url">URL: {image.url}</p>
              <p className="description">Description: {image.description || 'No description available'}</p>
            </div>
            <div className="card-buttons-container">
              <button className="update" onClick={() => handleUpdate(image.id)}>
                Update
              </button>
              <button className="delete" onClick={() => handleDelete(image.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="update-form-container">
          <form onSubmit={handleFormSubmit}>
            <label>
              ID:
              <input type="text" name="id" defaultValue={selectedImage.id} />
            </label>
            <label>
              Author:
              <input type="text" name="author" defaultValue={selectedImage.author} />
            </label>
            <label>
              URL:
              <input type="text" name="url" defaultValue={selectedImage.url} />
            </label>
            <label>
              Description:
              <input type="text" name="description" defaultValue={selectedImage.description} />
            </label>
            <button type="submit">Update</button>
            <button type="button" onClick={handleCancelUpdate}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SampleProject;
