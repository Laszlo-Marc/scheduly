
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';

const Header: React.FC = () => {
  const location = useLocation();
  const { currentStep } = useBooking();
  
  return (
    <header className="w-full py-6 px-6 md:px-10 backdrop-blur-md bg-white/70 fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group transition-all duration-300">
          <div className="bg-primary/10 p-2 rounded-md group-hover:bg-primary/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M12 2v6.5M12 13v9"/>
              <path d="M10 7.5c.97.142 1.96.142 2.92 0"/>
              <path d="M10 16.5c.97-.142 1.96-.142 2.92 0"/>
              <path d="M18 5.04C15.602 2.865 9.21 2.312 6.578 5.133c-2.63 2.82-1.8 9.261 1.484 12.505C10.96 15.335 12.361 13.763 13.5 12"/>
              <path d="M6 19.04c2.248 1.995 8.138 2.756 10.964.375"/>
            </svg>
          </div>
          <span className="text-xl font-semibold tracking-tight text-foreground">TherapyConnect</span>
        </Link>

        {location.pathname !== "/" && (
          <div className="hidden md:flex items-center space-x-1">
            <div className={`py-1 px-3 rounded-full text-sm font-medium ${currentStep >= 1 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
              1. Therapist
            </div>
            <div className="h-[1px] w-5 bg-gray-200"></div>
            <div className={`py-1 px-3 rounded-full text-sm font-medium ${currentStep >= 2 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
              2. Therapy
            </div>
            <div className="h-[1px] w-5 bg-gray-200"></div>
            <div className={`py-1 px-3 rounded-full text-sm font-medium ${currentStep >= 3 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
              3. Schedule
            </div>
            <div className="h-[1px] w-5 bg-gray-200"></div>
            <div className={`py-1 px-3 rounded-full text-sm font-medium ${currentStep >= 4 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
              4. Confirm
            </div>
          </div>
        )}

        <nav className="flex items-center space-x-6">
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Help
          </a>
          <a href="#" className="text-sm font-medium text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-md transition-colors">
            Sign In
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
