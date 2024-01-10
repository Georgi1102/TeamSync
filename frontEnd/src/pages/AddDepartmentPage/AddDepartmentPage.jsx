import classes from './AddDepartmentPage.module.css';
import DepartmentsContext from '../../store/CompaniesContext/DepartmentsContext';
import { useNavigate, useParams } from 'react-router-dom';
import { randomIntFromInterval } from '../../utils/randomIdGenerator';
import InfoModal from '../../components/modals/InfoModal/InfoModal';
import { useContext, useState } from 'react';
import CompaniesContext from '../../store/CompaniesContext/CompaniesContext';
const AddDepartmentPage = () => {
  const [departmentName, setDepartmentName] = useState('');
  const [departmentDescription, setDepartmentDescription] = useState('');
  const {selectedCompanyId } = useContext(CompaniesContext);
  const [showModal, setShowModal] = useState(false);
  const { setDepartments } = useContext(DepartmentsContext);

  const navigate = useNavigate();
  const { companyId } = useParams();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!departmentName || !departmentDescription) {
      setShowModal(true);
      return;
    }

    const newDepartment = {
      id: randomIntFromInterval(1, 10000),
      companyId: selectedCompanyId,  
      name: departmentName,
      description: departmentDescription,
    };

    setDepartments((prevDepartments) => [...prevDepartments, newDepartment]);

    // Use companyId to navigate to the specific company's page
    navigate(`/${selectedCompanyId}`);
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
          <div className={classes.title}>Add a department</div>
          <div className={`${classes['dapartment__name']}`}>
            <label htmlFor='departmentName'>Name:</label>
            <input
              id='departmentName'
              type='text'
              value={departmentName}
              onChange={onChangeHandler(setDepartmentName)}
            />
          </div>
          <div className={`${classes['department__description']}`}>
            <label htmlFor='departmentDescription'>Description:</label>
            <textarea
              id='departmentDescription'
              type='text'
              value={departmentDescription}
              onChange={onChangeHandler(setDepartmentDescription)}
              rows={6}
            />
          </div>
          <button className={classes.button} type='submit'>
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddDepartmentPage;
