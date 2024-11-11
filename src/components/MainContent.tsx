import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Overview from './tabs/Overview';
import Settings from './tabs/Settings';
import Metrics from './tabs/Metrics';
import Reports from './tabs/Reports';

export default function MainContent() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/overview" replace />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/metrics" element={<Metrics />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}