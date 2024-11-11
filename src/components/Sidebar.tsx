import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Activity, FileText, PiggyBank, Settings, User, LogOut, X } from 'lucide-react';

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { icon: LayoutDashboard, name: 'Dashboard', path: '/dashboard' },
    { icon: Activity, name: 'Patient Card', path: '/patient-card' },
    { icon: FileText, name: 'Statistics', path: '/statistics' },
    { icon: PiggyBank, name: 'Saving Plans', path: '/saving-plans' },
    { icon: Settings, name: 'Settings', path: '/settings' },
  ];

  return (
    <div className="h-full flex flex-col bg-white border-r border-gray-200">
      <div className="p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <span className="text-gray-900">Trio</span>
          <span className="text-mint-500">sight</span>
        </h1>
        <button 
          onClick={onClose}
          className="lg:hidden p-2 rounded-lg text-gray-400 hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <nav className="flex-1 overflow-y-auto px-4">
        <div className="space-y-6">
          <div>
            <p className="px-2 text-xs font-semibold text-gray-400 uppercase mb-4">Main Menu</p>
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPath === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                        isActive
                          ? 'text-mint-500 bg-mint-50'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          
          <div>
            <p className="px-2 text-xs font-semibold text-gray-400 uppercase mb-4">Account Pages</p>
            <ul className="space-y-1">
              <li>
                <Link 
                  to="/profile" 
                  onClick={onClose}
                  className="flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-50"
                >
                  <User className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="truncate">Profile</span>
                </Link>
              </li>
              <li>
                <button className="w-full flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-50">
                  <LogOut className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="truncate">Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}