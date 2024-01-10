import { useNavigate, useParams } from 'react-router-dom';
import classes from './CompanyDetailPage.module.css';
import { useContext, useEffect, useState } from 'react';
import CompaniesContext from '../../store/CompaniesContext/CompaniesContext';
import InfoModal from '../../components/modals/InfoModal/InfoModal';


const CompanyDetailPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [company, setCompany] = useState();
  const { companies } = useContext(CompaniesContext);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const getCompany = companies.find(
      (company) => company.id === +params.companyId
    );
    if (getCompany) {
      setCompany(getCompany);
    } else {
      setShowModal(true);
    }
  }, []);
  const handleAddDepartmentClick = () => {
    // Navigate to the "AddDepartmentPage" (you can change the path as needed)
    navigate('/adddepartmentpage');
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
