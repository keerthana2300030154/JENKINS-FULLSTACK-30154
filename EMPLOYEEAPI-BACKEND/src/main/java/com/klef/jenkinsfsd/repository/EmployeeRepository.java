package com.klef.jenkinsfsd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.klef.jenkinsfsd.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
