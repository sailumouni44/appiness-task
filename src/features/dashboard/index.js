import React from "react";
import { useSelector } from "react-redux";
import { getUsers } from "./_dashboardSlice";

const DashboardFeature = () => {
  const users = useSelector(getUsers);
  console.log("--== ** dashbaord ", users);
  return (
    <div className="container-fluid h-100">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="card col-8">
          <div className="card-body p-4">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Phone No.</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((entity) => {
                    return (
                      <tr key={entity.id}>
                        <td>{entity.name}</td>
                        <td>{entity.age}</td>
                        <td>{entity.gender}</td>
                        <td>{entity.email}</td>
                        <td>{entity.phoneNo}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFeature;
