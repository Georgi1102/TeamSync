import { useContext } from 'react';
import CompanyCard from '../../components/CompanyCard/CompanyCard';

import classes from './HomePage.module.css';
import CompaniesContext from '../../store/CompaniesContext/CompaniesContext';

const HomePage = () => {
  const { companies } = useContext(CompaniesContext);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Companies: </h1>
      <div className={classes.companies}>
        {companies.map((company) => (
          <CompanyCard
            key={company.id}
            id={company.id}
            name={company.name}
            description={company.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
