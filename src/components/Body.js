import React, { useEffect, useState } from 'react';
import Table from '../Table';
import View from '../View';

const Body = () => {
  const [table, setTable] = useState([]);
  const [formData, setFormData] = useState({ userId: '', id: '', title: '' });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const openForm = () => {
    setShowModal(true);
  };

  const closeForm = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
    const url = 'https://jsonplaceholder.typicode.com/posts'
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  console.log(response.status,"added");
  if(response.status===201){
    alert('Susccsefully added data ')
  }


    // Clear form inputs
    setFormData({ userId: '', id: '', title: '' });

    // Close the modal after submission
    closeForm();
  };

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await response.json();
      console.log(json);
      setTable(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="fi-lter flex">
      <div className="data-btn">
        <button className='btn' onClick={openForm}>Add To Data</button>
      </div>
      <div className='body-container'>
        <Table resData={table} />
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='userId'
                name='userId'
                value={formData.userId}
                onChange={handleInputChange}
              />
              <input
                type='text'
                placeholder='id'
                name='id'
                value={formData.id}
                onChange={handleInputChange}
              />
              <input
                type='text'
                placeholder='title'
                name='title'
                value={formData.title}
                onChange={handleInputChange}
              />
              <button type='submit'>Submit</button>
              <button type='button' onClick={closeForm}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Body;
