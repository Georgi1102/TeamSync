import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CompaniesContextProvider } from './store/CompaniesContext/CompaniesContext.jsx';
import { DepartmentsContextProvider } from './store/CompaniesContext/DepartmentsContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <DepartmentsContextProvider>
      <CompaniesContextProvider>
        <App />
      </CompaniesContextProvider>
      </DepartmentsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
