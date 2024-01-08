import { useContext, useState } from 'react';
import classes from './RegisterCompanyPage.module.css';
import CompaniesContext from '../../store/CompaniesContext/CompaniesContext';
import { useNavigate } from 'react-router-dom';
import { randomIntFromInterval } from '../../utils/randomIdGenerator';
import InfoModal from '../../components/modals/InfoModal/InfoModal';

const RegisterCompanyPage = () => {
  const [companyName, setCompanyName] = useState();
  const [companyDescription, setCompanyDescription] = useState();

  const [showModal, setShowModal] = useState(false);
  const { setCompanies } = useContext(CompaniesContext);

  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!companyName || !companyDescription) {
      setShowModal(true);
      return;
    }

    const newCompany = {
      id: randomIntFromInterval(1, 10000),
      name: companyName,
      description: companyDescription,
    };

    setCompanies((prevCompanies) => [...prevCompanies, newCompany]);
    navigate('/');
  };

  const onChangeHandler = (setter) => (e) => {
    setter(e.target.value);
  };

  return (
    <>
      <InfoModal
        showModal={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        description={'Please fill all the inputs'}
      />
      <div className={classes.container}>
        <form className={classes.form} onSubmit={onSubmitHandler}>
          <div className={classes.title}>Register a company</div>
          <div className={`${classes['company__name']}`}>
            <label htmlFor='companyName'>Name:</label>
            <input
              id='companyName'
              type='text'
              value={companyName}
              onChange={onChangeHandler(setCompanyName)}
            ></input>
          </div>
          <div className={`${classes['company__description']}`}>
            <label htmlFor='companyDescription'>Description:</label>
            <textarea
              id='companyDescription'
              type='text'
              value={companyDescription}
              onChange={onChangeHandler(setCompanyDescription)}
              rows={6}
            ></textarea>
          </div>
          <button className={classes.button}>Register</button>
        </form>
      </div>
    </>
  );
};

export default RegisterCompanyPage;
