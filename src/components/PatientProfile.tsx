import React from 'react';

export default function PatientProfile() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop"
          alt="John Doe"
          className="w-16 h-16 rounded-full object-cover ring-4 ring-gray-50"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-500">Male, 38</p>
        </div>
        
        <button className="ml-auto px-4 py-2 bg-mint-500 text-white rounded-lg hover:bg-mint-600 transition-colors">
          Explanatory Panel
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Blood Type</p>
          <p className="font-semibold">A+</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Weight</p>
          <p className="font-semibold">176 lbs</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Height</p>
          <p className="font-semibold">5'11"</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Patient ID</p>
          <p className="font-semibold">#28391</p>
        </div>
      </div>
    </div>
  );
}