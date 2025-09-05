import { useState } from "react";
import EmployeeService from "../services/EmployeeService";

function GetEmployeeById() {
  const [id, setId] = useState("");
  const [employee, setEmployee] = useState(null);

  const handleFetch = () => {
    EmployeeService.getEmployeeById(id)
      .then(res => setEmployee(res.data))
      .catch(() => setEmployee(null));
  };

  return (
    <div className="container mt-4">
      <h3>Get Employee By ID</h3>
      <input className="form-control mb-2" type="number" value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter ID" />
      <button className="btn btn-info" onClick={handleFetch}>Fetch</button>

      {employee && (
        <div className="card mt-3">
          <div className="card-body">
            <h5>{employee.name}</h5>
            <p>Email: {employee.email}</p>
            <p>Department: {employee.department}</p>
            <p>Salary: {employee.salary}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default GetEmployeeById;
