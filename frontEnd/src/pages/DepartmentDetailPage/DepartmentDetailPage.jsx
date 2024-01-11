import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import CompaniesContext from '../../store/CompaniesContext/CompaniesContext';
import InfoModal from '../../components/modals/InfoModal/InfoModal';
import DepartmentsContext from '../../store/CompaniesContext/DepartmentsContext';
import EmployeesContext from '../../store/CompaniesContext/EmployeeContext';
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
import classes from './DepartmentDetailPage.module.css';

const DepartmentDetailPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [department, setDepartment] = useState();
  const { departments, removeDepartment, setSelectedDepartmentId } = useContext(DepartmentsContext);
  const { employees } = useContext(EmployeesContext);
  const {selectedCompanyId } = useContext(CompaniesContext);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const getDepartment = departments.find(
      (department) => department.id === +params.departmentId
    );

    if (getDepartment) {
      setDepartment(getDepartment);
      setSelectedDepartmentId(getDepartment.id);
    } else {
      setShowModal(true);
    }
  }, [params.departmentId, departments, setSelectedDepartmentId]);

  const departmentEmployees = employees.filter(
    (employee) => employee.departmentId === department?.id
  );

  const handleAddEmployeeClick = () => {
    navigate('/addemployeepage');
  };

  const handleDeleteDepartment = () => {
    removeDepartment(department.id);
    navigate(`/${selectedCompanyId}`); // Adjust the route based on your application structure
  };

  return (
    <>
      {department ? (
        <div className={classes.container}>
          <div className={classes['title__box']}>
            <h1 className={classes['title']}>Department name: {department.name}</h1>
          </div>
          <div className={classes['description__box']}>
            <div className={classes['description__box']}>
              <button
                className={classes['add_employee_button']}
                onClick={handleAddEmployeeClick}
              >
                Add employee
              </button>
              <button
                className={classes['delete_department_button']}
                onClick={handleDeleteDepartment}
              >
                Delete department
              </button>
            </div>
          </div>
          <div className={classes['employees__box']}>
            <div className={classes.employee_cards}>
              {departmentEmployees.map((employee) => (
                <EmployeeCard 
                  key={employee.id} 
                  employee={employee} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <InfoModal
          showModal={showModal}
          onClose={() => {
            setShowModal(false);
            navigate('/');
          }}
          description={'Department not found'}
        />
      )}
    </>
  );
};

export default DepartmentDetailPage;
