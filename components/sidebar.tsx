// components/shared/Sidebar.tsx
import React from 'react';
// import Link from 'next/link'; // Removed: Use standard <a> tags for broader compatibility
import { Home, Bug, User, Settings } from 'lucide-react'; // Icons from Lucide

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#1A1A1A] text-[#B0B0B0] p-6 flex flex-col h-full rounded-xl shadow-lg">
      {/* App Logo/Name */}
      <div className="text-2xl font-bold text-[#3B82F6] mb-8 tracking-wide">
        BugNet
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow">
        <ul>
          <li className="mb-4">
            <a
              href="/dashboard"
              className="flex items-center p-3 rounded-lg hover:bg-[#282828] transition-colors duration-200"
            >
              <Home className="mr-3 w-5 h-5" /> Dashboard
            </a>
          </li>
          <li className="mb-4">
            {/* Example: Active link for 'All Bugs' if this is the current page */}
            <a
              href="/dashboard/bugs"
              className="flex items-center p-3 rounded-lg bg-[#282828] text-[#3B82F6]"
            >
              <Bug className="mr-3 w-5 h-5" /> All Bugs
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/dashboard/my-bugs"
              className="flex items-center p-3 rounded-lg hover:bg-[#282828] transition-colors duration-200"
            >
              <User className="mr-3 w-5 h-5" /> My Bugs
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/dashboard/settings"
              className="flex items-center p-3 rounded-lg hover:bg-[#282828] transition-colors duration-200"
            >
              <Settings className="mr-3 w-5 h-5" /> Settings
            </a>
          </li>
        </ul>
      </nav>

      {/* User Profile Section */}
      <div className="mt-auto">
        <div className="flex items-center p-3 rounded-lg hover:bg-[#282828] transition-colors duration-200 cursor-pointer">
          <div className="w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-semibold mr-3 text-sm">
            JD
          </div>
          John Doe
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
