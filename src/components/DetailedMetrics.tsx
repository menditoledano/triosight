import React from 'react';

function MetricRow({ title, score, description }: any) {
  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium">{title}</h4>
        <div className="flex items-center">
          <div className="w-32 h-2 bg-gray-200 rounded-full mr-3">
            <div
              className="h-full bg-mint-500 rounded-full"
              style={{ width: `${score * 10}%` }}
            />
          </div>
          <span className="text-mint-500 font-medium">{score}</span>
        </div>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default function DetailedMetrics() {
  const metrics = [
    {
      title: 'Personal Background',
      score: 6.7,
      description: "This score is primarily affected by the patient's medical history, which includes a history of smoking and slightly elevated cholesterol levels."
    },
    {
      title: 'Electrocardiogram (ECG/EKG)',
      score: 5.0,
      description: 'The ECG score reflects minor arrhythmias and a slight irregularity in heart rhythm.'
    },
    {
      title: 'Coagulation Profile (PT, INR, aPTT)',
      score: 2.8,
      description: 'A significantly lower score here is due to elevated INR levels, which indicate a higher risk of bleeding.'
    },
    {
      title: 'Blood Count and Metabolic Panel',
      score: 8.2,
      description: 'This high score is slightly reduced due to mild anemia and slightly elevated glucose levels.'
    },
    {
      title: 'Imaging',
      score: 7.1,
      description: 'The imaging score is affected by observed arterial blockages and mild calcifications.'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-6">Detailed Metrics</h3>
      <div className="space-y-2">
        {metrics.map((metric, index) => (
          <MetricRow key={index} {...metric} />
        ))}
      </div>
    </div>
  );
}