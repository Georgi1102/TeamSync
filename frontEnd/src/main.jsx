import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CompaniesContextProvider } from './store/CompaniesContext/CompaniesContext.jsx';
import { DepartmentsContextProvider } from './store/CompaniesContext/DepartmentsContext.jsx';
import { EmployeesContextProvider } from './store/CompaniesContext/EmployeeContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <DepartmentsContextProvider>
      <CompaniesContextProvider>
        <DepartmentsContextProvider>
          <EmployeesContextProvider>
        <App />
        </EmployeesContextProvider>
        </DepartmentsContextProvider>
      </CompaniesContextProvider>
      </DepartmentsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
