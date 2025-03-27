
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-6 md:px-10 bg-white border-t border-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary/10 p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 2v6.5M12 13v9"/>
                  <path d="M10 7.5c.97.142 1.96.142 2.92 0"/>
                  <path d="M10 16.5c.97-.142 1.96-.142 2.92 0"/>
                  <path d="M18 5.04C15.602 2.865 9.21 2.312 6.578 5.133c-2.63 2.82-1.8 9.261 1.484 12.505C10.96 15.335 12.361 13.763 13.5 12"/>
                  <path d="M6 19.04c2.248 1.995 8.138 2.756 10.964.375"/>
                </svg>
              </div>
              <span className="text-xl font-semibold tracking-tight text-foreground">TherapyConnect</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Simplifying access to mental health services with an elegant, intuitive booking experience.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Individual Therapy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Couples Therapy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Family Therapy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Group Sessions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Therapist Directory</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mental Health Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">support@therapyconnect.com</li>
              <li className="text-sm text-muted-foreground">(555) 123-4567</li>
              <li className="text-sm text-muted-foreground">123 Healing Street, Suite 100</li>
              <li className="text-sm text-muted-foreground">New York, NY 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TherapyConnect. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
