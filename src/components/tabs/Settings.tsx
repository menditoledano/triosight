import React from 'react';
import PatientProfile from '../PatientProfile';
import SettingsPage from '../SettingsPage';

export default function Settings() {
  return (
    <div className="space-y-6">
      <PatientProfile />
      <SettingsPage />
    </div>
  );
}