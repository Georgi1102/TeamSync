// CompaniesContext.js
import { createContext, useContext, useState } from 'react';

const CompaniesContext = createContext({
  companies: [],
  selectedCompanyId: null,
  setCompanies: () => {},
  setSelectedCompanyId: () => {},
});

export const CompaniesContextProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);

  return (
    <CompaniesContext.Provider
      value={{
        companies,
        selectedCompanyId,
        setCompanies,
        setSelectedCompanyId,
      }}
    >
      {children}
    </CompaniesContext.Provider>
  );
};

export default CompaniesContext;
