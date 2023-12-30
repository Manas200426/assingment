
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MyProject.css';
import Navbar from '../../Component/Navbar/Navbar';

const MyProject = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    author: '',
    image: null,
    description: '',
  });
  const [cards, setCards] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image' && files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0], 
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.id) {
   
      toast.error('ID is required!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
      return;
    }

    if (isUpdate) {
    
      const updatedCards = cards.map((card) =>
        card.id === formData.id
          ? {
              ...card,
              author: formData.author,
              image: formData.image ? URL.createObjectURL(formData.image) : card.image,
              description: formData.description,
            }
          : card
      );
      setCards(updatedCards);

  
      toast.info('Card updated!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });


      setFormData({
        id: '',
        author: '',
        image: null,
        description: '',
      });
      setIsUpdate(false);
    } else {

      const newCard = {
        id: formData.id,
        author: formData.author,
        image: formData.image ? URL.createObjectURL(formData.image) : null,
        description: formData.description,
      };


      setCards((prevCards) => [...prevCards, newCard]);


      toast.success('Card created successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });

      setFormData({
        id: '',
        author: '',
        image: null,
        description: '',
      });
    }

    setShowForm(false);
  };

  const handleUpdate = (id) => {
    const selectedCard = cards.find((card) => card.id === id);
    setFormData({
      id: selectedCard.id,
      author: selectedCard.author,
      image: null,
      description: selectedCard.description,
    });
    setShowForm(true);
    setIsUpdate(true);
  };

  const handleDelete = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);

    toast.error('Card deleted!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  return (
    <>
    <Navbar/>
      <h1>My Project</h1>
      <div className="container">
        {!showForm ? (
          <div className="dummy-card" onClick={() => setShowForm(true)}>
            <div className="card-content">
              <span className="add-icon">+</span>
            </div>
          </div>
        ) : (
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label>
                ID:
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Author:
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Image:
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit">{isUpdate ? 'Update' : 'Create Card'}</button>
            </form>
          </div>
        )}
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.author} />
            <div className="image-details">
              <p>ID: {card.id}</p>
              <p>Author: {card.author}</p>
              <p>Description: {card.description}</p>
            </div>
            <div className="card-buttons-container">
              <button className="update" onClick={() => handleUpdate(card.id)}>
                Update
              </button>
              <button className="delete" onClick={() => handleDelete(card.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
        {!showForm && (
          <>
            <p>Create a new project</p>
            <p>
              
              <Link to="/SampleProject" className="sample-link">
                Sample Project
              </Link>
            </p>
          </>
        )}
        <ToastContainer />
      </div>
    </>
  );
};

export default MyProject;

