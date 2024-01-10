import { useNavigate, useParams } from 'react-router-dom';
import classes from './DepartmentDetailPage.module.css';
import { useContext, useEffect, useState } from 'react';
import CompaniesContext from '../../store/CompaniesContext/CompaniesContext';
import InfoModal from '../../components/modals/InfoModal/InfoModal';
import DepartmentsContext from '../../store/CompaniesContext/DepartmentsContext';  // Correct the import path

const DepartmentDetailPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [department, setDepartment] = useState();
  const { setSelectedCompanyId } = useContext(CompaniesContext);
  const { departments, setSelectedDepartmentId } = useContext(DepartmentsContext);
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

  const handleAddDepartmentClick = () => {
    navigate('/addemployeepage');
  };

  return (
    <>
      {department ? (
        <div className={classes.container}>
          <div className={classes['title__box']}>
            {/* Update this line to use department.name */}
            <h1 className={classes['title']}>Department name: {department.name}</h1>
          </div>
          <div className={classes['description__box']}>
            <div className={classes['description__box']}>
              <button
                className={classes['add_employee_button']}
                onClick={handleAddDepartmentClick}
              >
                Add employee
              </button>
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
