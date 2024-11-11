import React from 'react';
import { Edit } from 'lucide-react';

export default function PatientsList() {
  const patients = [
    { name: 'Esthera Jackson', email: 'esthera@gmail.com', age: 39, gender: 'Female', date: '14/06/21' },
    { name: 'Alexa Liras', email: 'alexa@gmail.com', age: 27, gender: 'Female', date: '14/06/21' },
    { name: 'John Doe', email: 'john.doe@gmail.com', age: 31, gender: 'Male', date: '14/06/21' },
    { name: 'Freduardo Hill', email: 'freduardo@gmail.com', age: 42, gender: 'Male', date: '14/06/21' },
    { name: 'Daniel Thomas', email: 'daniel@dimmple.com', age: 24, gender: 'Male', date: '14/06/21' },
    { name: 'Mark Wilson', email: 'mark@email.com', age: 46, gender: 'Male', date: '14/06/21' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Heart Team Patients</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="pb-4">Patient Name</th>
                <th className="pb-4">General Info</th>
                <th className="pb-4">Explore Patient Dashboard</th>
                <th className="pb-4">Created Date</th>
                <th className="pb-4"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {patients.map((patient, index) => (
                <tr key={index} className="border-t border-gray-100">
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={`https://i.pravatar.cc/40?u=${patient.email}`}
                        alt={patient.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">{patient.name}</p>
                        <p className="text-gray-500">{patient.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <p>{patient.age}</p>
                    <p className="text-gray-500">{patient.gender}</p>
                  </td>
                  <td className="py-4">
                    <span className="px-3 py-1 bg-navy-900 text-white text-xs rounded-full">
                      TrioScore
                    </span>
                  </td>
                  <td className="py-4 text-gray-500">{patient.date}</td>
                  <td className="py-4">
                    <button className="text-mint-500 hover:text-mint-600">
                      <Edit className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}