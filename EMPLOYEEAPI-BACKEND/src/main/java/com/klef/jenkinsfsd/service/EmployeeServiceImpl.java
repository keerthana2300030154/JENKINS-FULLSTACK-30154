package com.klef.jenkinsfsd.service;

import com.klef.jenkinsfsd.entity.Employee;
import com.klef.jenkinsfsd.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository repo;

    @Override
    public List<Employee> getAllEmployees() {
        return repo.findAll();
    }

    @Override
    public Employee getEmployeeById(int id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public Employee addEmployee(Employee employee) {
        return repo.save(employee);
    }

    @Override
    public Employee updateEmployee(int id, Employee employee) {
        Employee existing = repo.findById(id).orElse(null);
        if (existing != null) {
            existing.setName(employee.getName());
            existing.setEmail(employee.getEmail());
            existing.setDepartment(employee.getDepartment());
            existing.setSalary(employee.getSalary());
            return repo.save(existing);
        }
        return null;
    }

    @Override
    public void deleteEmployee(int id) {
        repo.deleteById(id);
    }
}
