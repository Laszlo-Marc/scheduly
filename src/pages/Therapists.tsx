
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { therapists } from '../data/therapists';
import TherapistCard from '../components/booking/TherapistCard';
import BookingStep from '../components/ui/BookingStep';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Therapists = () => {
  const navigate = useNavigate();
  const { selectedTherapist, setSelectedTherapist, setCurrentStep } = useBooking();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter therapists based on search query
  const filteredTherapists = therapists.filter((therapist) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      therapist.name.toLowerCase().includes(searchLower) ||
      therapist.title.toLowerCase().includes(searchLower) ||
      therapist.specialties.some(specialty => specialty.toLowerCase().includes(searchLower))
    );
  });
  
  const handleContinue = () => {
    setCurrentStep(2);
    navigate('/therapy-types');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32 pb-20 px-6">
        <BookingStep
          title="Choose Your Therapist"
          subtitle="Select the therapist you'd like to work with"
          next="/therapy-types"
          nextDisabled={!selectedTherapist}
          onNext={handleContinue}
        >
          <div className="mb-8">
            <div className="relative glass-effect rounded-lg overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input
                type="text"
                placeholder="Search by name, specialty, or title..."
                className="w-full py-3 pl-12 pr-4 bg-transparent border-none focus:outline-none focus:ring-0 text-foreground"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredTherapists.length > 0 ? (
              filteredTherapists.map((therapist) => (
                <TherapistCard
                  key={therapist.id}
                  therapist={therapist}
                  isSelected={selectedTherapist?.id === therapist.id}
                  onSelect={setSelectedTherapist}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No therapists found matching your search criteria.</p>
              </div>
            )}
          </div>
        </BookingStep>
      </main>
      
      <Footer />
    </div>
  );
};

export default Therapists;
