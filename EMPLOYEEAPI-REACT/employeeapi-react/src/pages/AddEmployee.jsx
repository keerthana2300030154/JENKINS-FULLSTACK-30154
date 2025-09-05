import { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const [employee, setEmployee] = useState({ name: "", email: "", department: "", salary: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    EmployeeService.addEmployee(employee)
      .then(() => navigate("/"))
      .catch(() => alert("Failed to add employee"));
  };

  return (
    <div className="container mt-4">
      <h3>Add Employee</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input className="form-control mb-2" type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input className="form-control mb-2" type="text" name="department" placeholder="Department" onChange={handleChange} />
        <input className="form-control mb-2" type="number" name="salary" placeholder="Salary" onChange={handleChange} />
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  );
}
export default AddEmployee;
