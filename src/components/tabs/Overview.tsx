import React from 'react';
import PatientProfile from '../PatientProfile';
import HealthMetrics from '../HealthMetrics';
import DetailedMetrics from '../DetailedMetrics';
import StrategyComparison from '../StrategyComparison';

export default function Overview() {
  return (
    <div className="space-y-6">
      <PatientProfile />
      <HealthMetrics />
      <div className="grid grid-cols-2 gap-6">
        <DetailedMetrics />
        <StrategyComparison />
      </div>
    </div>
  );
}