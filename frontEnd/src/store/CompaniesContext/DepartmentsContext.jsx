import { createContext, useContext, useState } from 'react';

const DepartmentsContext = createContext({
  departments: [],
  setDepartments: () => {},
});

export const DepartmentsContextProvider = ({ children }) => {
  const [departments, setDepartments] = useState([]);

  return (
    <DepartmentsContext.Provider
      value={{
        departments,
        setDepartments,
      }}
    >
      {children}
    </DepartmentsContext.Provider>
  );
};

export default DepartmentsContext;
