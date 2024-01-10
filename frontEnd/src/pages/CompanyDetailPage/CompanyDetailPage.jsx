import { useNavigate, useParams } from 'react-router-dom';
import classes from './CompanyDetailPage.module.css';
import { useContext, useEffect, useState } from 'react';
import CompaniesContext from '../../store/CompaniesContext/CompaniesContext';
import InfoModal from '../../components/modals/InfoModal/InfoModal';
import DepartmentsContext from '../../store/CompaniesContext/DepartmentsContext';  // Correct the import path

const CompanyDetailPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [company, setCompany] = useState();
  const { companies, setSelectedCompanyId } = useContext(CompaniesContext);
  const { departments } = useContext(DepartmentsContext);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const getCompany = companies.find(
      (company) => company.id === +params.companyId
    );
    if (getCompany) {
      setCompany(getCompany);
      setSelectedCompanyId(getCompany.id);
    } else {
      setShowModal(true);
    }
  }, []);
  const handleAddDepartmentClick = () => {
    // Navigate to the "AddDepartmentPage" (you can change the path as needed)
    navigate('/adddepartmentpage');
  };
  const handleDepartmentClick = (departmentId) => {
    // Navigate to the "Employees" page with the selected departmentId
    navigate(`/${params.companyId}/${departmentId}`);
  };
  return (
    <>
      {company ? (
        <div className={classes.container}>
          <div className={classes['title__box']}>
            <h1 className={classes['title']}>Company name: {company.name}</h1>
          </div>
          <div className={classes['description__box']}>
            <div className={classes['description__box']}>
              {/* Attach the click handler to the button */}
              <button
                className={classes['add_department_button']}
                onClick={handleAddDepartmentClick}
              >
                Add department
              </button>
            </div>
          </div>
          {/* Display departments for the current company */}
          <div className={classes['departments__box']}>
            <h2>Departments:</h2>
            <ul>
            {departments.map((department) => (
              // Wrap each department in a clickable link
              <li key={department.id} onClick={() => handleDepartmentClick(department.id)}>
                {department.name} - {department.description}
              </li>
            ))}
            </ul>
          </div>
        </div>
      ) : (
        <InfoModal
          showModal={showModal}
          onClose={() => {
            setShowModal(false);
            navigate('/');
          }}
          description={'Company not found'}
        />
      )}
    </>
  );
};

export default CompanyDetailPage;
