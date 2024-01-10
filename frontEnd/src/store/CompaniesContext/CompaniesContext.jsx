// CompaniesContext.js
import { createContext, useContext, useState } from 'react';

const CompaniesContext = createContext({
  companies: [],
  setCompanies: () => {},
});

export const CompaniesContextProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);

  const handleSetCompanies = (data) => {
    setCompanies(data);
  };

  return (
    <CompaniesContext.Provider value={{ companies, setCompanies: handleSetCompanies }}>
      {children}
    </CompaniesContext.Provider>
  );
};

export default CompaniesContext;