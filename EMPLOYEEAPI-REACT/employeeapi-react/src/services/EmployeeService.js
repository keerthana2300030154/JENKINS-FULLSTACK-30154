import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:2001/api/employees";

class EmployeeService {
  
  getAllEmployees() {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/all`);
  }

  getEmployeeById(id) {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/get/${id}`);
  }

  addEmployee(employee) {
    return axios.post(`${EMPLOYEE_API_BASE_URL}/add`, employee);
  }

  updateEmployee(id, employee) {
    return axios.put(`${EMPLOYEE_API_BASE_URL}/update/${id}`, employee);
  }

  deleteEmployee(id) {
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/delete/${id}`);
  }
}

export default new EmployeeService();
