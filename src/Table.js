import React from 'react';
import { Link } from 'react-router-dom';

const Table = (props) => {
  console.log(props);
  const { resData } = props;

  // Function to handle data deletion
  const dataDelete = (id) => {
    // Implement your data deletion logic here
    console.log(`Deleting data with ID: ${id}`);
  };

  return (
    <div>
      <div className='table-con'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">userId</th>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <th scope="col">Action button</th>
            </tr>
          </thead>
          <tbody>
            {resData.map((data) => (
              <tr key={data.id}>
                <td>{data.userId}</td>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>
                  <Link to={`view/${data.id}`}>
                    <button type="button"><i className="fa-solid fa-eye"></i></button>
                  </Link>
                    <button type="button" className="btn btn-danger" onClick={() => dataDelete(data.id)}>
                    <i className="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
