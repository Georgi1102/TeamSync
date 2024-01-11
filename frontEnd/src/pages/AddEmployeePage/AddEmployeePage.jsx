// AddEmployeePage.js
import classes from './AddEmployeePage.module.css';
import { useContext, useState } from 'react';
import EmployeesContext from '../../store/CompaniesContext/EmployeeContext';  // Update the import path
import { randomIntFromInterval } from '../../utils/randomIdGenerator';
import { useNavigate, useParams } from 'react-router-dom';
import DepartmentsContext from '../../store/CompaniesContext/DepartmentsContext';
import CompaniesContext from '../../store/CompaniesContext/CompaniesContext';

const AddEmployeePage = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeePosition, setEmployeePosition] = useState('');
  const { setEmployees } = useContext(EmployeesContext);
  const navigate = useNavigate();  
  const { companyId, departmentId } = useParams();
  const {selectedCompanyId } = useContext(CompaniesContext);
  const {selectedDepartmentId } = useContext(DepartmentsContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!employeeName || !employeePosition) {
      // Handle validation or show an error message
      return;
    }

    const newEmployee = {
      id: randomIntFromInterval(1, 10000),
      name: employeeName,
      position: employeePosition,
      departmentId: selectedDepartmentId,
    };

    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    navigate(`/${selectedCompanyId}/${selectedDepartmentId}`);
    // You can redirect or navigate after adding the employee if needed
  };

  const onChangeHandler = (setter) => (e) => {
    setter(e.target.value);
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.title}>Add New Employee</div>

        <div className={classes.inputContainer}>
          <label>Name:</label>
          <input type="text" value={employeeName} onChange={onChangeHandler(setEmployeeName)} />
        </div>

        <div className={classes.inputContainer}>
          <label>Position:</label>
          <input type="text" value={employeePosition} onChange={onChangeHandler(setEmployeePosition)} />
        </div>

        <button className={classes.button} type="submit">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployeePage;
