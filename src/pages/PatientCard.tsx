import React from 'react';
import PatientProfile from '../components/PatientProfile';
import HealthMetrics from '../components/HealthMetrics';
import DetailedMetrics from '../components/DetailedMetrics';
import StrategyComparison from '../components/StrategyComparison';

export default function PatientCard() {
  return (
    <div className="space-y-6">
      <PatientProfile />
      <HealthMetrics />
      <StrategyComparison />
      <DetailedMetrics />
    </div>
  );
}