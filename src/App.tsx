import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import PatientCard from './pages/PatientCard';
import Statistics from './pages/Statistics';
import SavingPlans from './pages/SavingPlans';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="patient-card" element={<PatientCard />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="saving-plans" element={<SavingPlans />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;