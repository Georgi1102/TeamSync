import { createContext, useContext, useState } from 'react';

const DepartmentsContext = createContext({
  departments: [],
  setDepartments: () => {},
  setSelectedDepartmentId: () => {},
});

export const DepartmentsContextProvider = ({ children }) => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);

  return (
    <DepartmentsContext.Provider
      value={{
        departments,
        setDepartments,
        selectedDepartmentId,
        setSelectedDepartmentId,
      }}
    >
      {children}
    </DepartmentsContext.Provider>
  );
};

export default DepartmentsContext;
