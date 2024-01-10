import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import RegisterCompanyPage from "./pages/RegisterCompanyPage/RegisterCompanyPage";
import CompanyDetailPage from "./pages/CompanyDetailPage/CompanyDetailPage";
import AddDepartmentPage from "./pages/AddDepartmentPage/AddDepartmentPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registerCompany" element={<RegisterCompanyPage />} />
        <Route path="/:companyId" element={<CompanyDetailPage />} />
        <Route path="/adddepartmentpage" element={<AddDepartmentPage />}/>
      </Routes>
    </Layout>
  );
}

export default App;
