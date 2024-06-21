import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";

function Customers() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/api/v1/users?page=${currentPage}&limit=10`
      );
      const data = response.data;
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        setUsers([]);
        setError("Unexpected data format from users API");
      }
    } catch (error) {
      setError("Error fetching users data");
      console.error("Error fetching users data:", error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <Navbar />
          <div className="col-md-9">
            <h3>All Users</h3>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user) => (
                <div key={user.id} className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">Email: {user.email}</p>
                        <p className="card-text">Phone: {user.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>No users available</div>
            )}
            <div className="d-flex justify-content-between mt-4">
              <button
                className="btn btn-primary"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Previous Page
              </button>
              <button className="btn btn-primary" onClick={handleNextPage}>
                Next Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customers;
