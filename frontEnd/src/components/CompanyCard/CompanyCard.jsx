import { useContext } from 'react';
import classes from './CompanyCard.module.css';
import CompaniesContext from '../../store/CompaniesContext/CompaniesContext';
import { useNavigate } from 'react-router-dom';

const CompanyCard = ({ id, name, description }) => {
  const { setCompanies } = useContext(CompaniesContext);
  const navigate = useNavigate();

  const removeCompanyHandler = () => {
    setCompanies((prevCompanies) =>
      prevCompanies.filter((company) => company.id !== id)
    );
  };

  const onClickHandler = (e) => {
    navigate(`/${id}`);
  };

  return (
    <div className={classes.container}>
      <div className={classes.remove} onClick={removeCompanyHandler}>
        X
      </div>
      <div className={classes.card} onClick={onClickHandler}>
        <h2 className={classes.title}>{name}</h2>
        <p className={classes.description}>{description.slice(0, 350)}...</p>
      </div>
    </div>
  );
};

export default CompanyCard;
