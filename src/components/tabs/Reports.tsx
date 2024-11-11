import React from 'react';
import PatientProfile from '../PatientProfile';
import StrategyComparison from '../StrategyComparison';

export default function Reports() {
  return (
    <div className="space-y-6">
      <PatientProfile />
      <div className="max-w-3xl">
        <StrategyComparison />
      </div>
    </div>
  );
}