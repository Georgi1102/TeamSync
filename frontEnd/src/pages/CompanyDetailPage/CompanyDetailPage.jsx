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

  return (
    <>
      {company ? (
        <div className={classes.container}>
          <div className={classes['title__box']}>
            <h1 className={classes['title']}>{company.name}</h1>
          </div>
          <div className={classes['description__box']}>
            <p className={classes['description']}>{company.description}</p>
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
