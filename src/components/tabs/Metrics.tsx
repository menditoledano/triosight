import React from 'react';
import PatientProfile from '../PatientProfile';
import HealthMetrics from '../HealthMetrics';
import DetailedMetrics from '../DetailedMetrics';

export default function Metrics() {
  return (
    <div className="space-y-6">
      <PatientProfile />
      <HealthMetrics />
      <DetailedMetrics />
    </div>
  );
}