import React from 'react';
import { Droplet, Heart, DollarSign } from 'lucide-react';

function MetricCard({ icon: Icon, label, value, change, color }: any) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm mb-1">{label}</p>
          <div className="flex items-center space-x-2">
            <p className="text-2xl font-semibold">{value}</p>
            <span className={`text-sm ${color}`}>{change}</span>
          </div>
        </div>
        <div className={`p-3 rounded-full ${color.includes('red') ? 'bg-red-50' : 'bg-mint-50'}`}>
          <Icon className={`w-6 h-6 ${color.includes('red') ? 'text-red-500' : 'text-mint-500'}`} />
        </div>
      </div>
    </div>
  );
}

export default function HealthMetrics() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <MetricCard
        icon={Droplet}
        label="A1C"
        value="6.9/178"
        change="+55%"
        color="text-mint-500"
      />
      <MetricCard
        icon={Heart}
        label="Blood Pressure"
        value="160/100"
        change="+5%"
        color="text-mint-500"
      />
      <MetricCard
        icon={DollarSign}
        label="Due more info"
        value="$173,000"
        change="-14%"
        color="text-red-500"
      />
    </div>
  );
}