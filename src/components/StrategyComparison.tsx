import React from 'react';

function StrategyBar({ height, data }: any) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-8 bg-mint-500 rounded-t-lg" style={{ height: `${height * 40}px` }} />
      <div className="mt-4 bg-navy-900 rounded-lg p-4 w-48">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-400">Mortality Rate</span>
            <span className="text-white">{data.mortality}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">2nd Surgery Risk</span>
            <span className="text-white">{data.surgeryRisk}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Complication Risk</span>
            <span className="text-white">{data.complication}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Days to Recovery</span>
            <span className="text-white">{data.recovery}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StrategyComparison() {
  const strategies = [
    {
      name: 'Strategy A',
      height: 8,
      data: { mortality: 0.3, surgeryRisk: 13, complication: 7, recovery: 6 }
    },
    {
      name: 'Strategy B',
      height: 4,
      data: { mortality: 0.4, surgeryRisk: 7, complication: 13, recovery: 8 }
    },
    {
      name: 'Strategy C',
      height: 6,
      data: { mortality: 0.8, surgeryRisk: 7, complication: 11, recovery: 5 }
    }
  ];

  return (
    <div className="max-w-3xl mx-auto bg-[#1B1E3D] rounded-xl p-6">
      <h3 className="text-white mb-6">TrioScore</h3>
      <div className="flex justify-around items-end">
        {strategies.map((strategy, index) => (
          <div key={index} className="text-center">
            <StrategyBar height={strategy.height} data={strategy.data} />
            <p className="text-gray-400 mt-4">{strategy.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}