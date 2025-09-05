import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function UpdateEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({ name: "", email: "", department: "", salary: "" });

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then(res => setEmployee(res.data))
      .catch(() => alert("Failed to fetch employee"));
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(id, employee)
      .then(() => navigate("/"))
      .catch(() => alert("Failed to update employee"));
  };

  return (
    <div className="container mt-4">
      <h3>Update Employee</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" type="text" name="name" value={employee.name} onChange={handleChange} required />
        <input className="form-control mb-2" type="email" name="email" value={employee.email} onChange={handleChange} required />
        <input className="form-control mb-2" type="text" name="department" value={employee.department} onChange={handleChange} />
        <input className="form-control mb-2" type="number" name="salary" value={employee.salary} onChange={handleChange} />
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}
export default UpdateEmployee;
