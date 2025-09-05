import { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getAllEmployees()
      .then(res => setEmployees(res.data))
      .catch(() => alert("Failed to fetch employees"));
  }, []);

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id)
      .then(() => setEmployees(employees.filter(emp => emp.id !== id)))
      .catch(() => alert("Failed to delete employee"));
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center">Employee List</h3>
      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Department</th><th>Salary</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
              <td>
                <Link to={`/update/${emp.id}`} className="btn btn-warning btn-sm me-2">Update</Link>
                <button className="btn btn-danger btn-sm" onClick={() => deleteEmployee(emp.id)}>Delete</button>
              </td>
            </tr>
          )) : <tr><td colSpan="6" className="text-center">No employees found</td></tr>}
        </tbody>
      </table>
    </div>
  );
}
export default EmployeeList;
