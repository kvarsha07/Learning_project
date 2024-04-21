import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const View = () => {
 // Use the useParams hook to access parameters
 const { id } = useParams();
  const [selectedRow, setSelectedRow] = useState({});

  useEffect(() => {
    dataFetch(id);
  }, [id]);
  
  const dataFetch = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      setSelectedRow(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

  };
  return (
    <div className='card-container '>
      <h1>This is fetched data</h1>
      <h2>User ID: {selectedRow.userId}</h2>
      <h2>ID: {selectedRow.id}</h2>
      
      <h2>Title: {selectedRow.title}</h2>
    </div>
  );
}

export default View;
