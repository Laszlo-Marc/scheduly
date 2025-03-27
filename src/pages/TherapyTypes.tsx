
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { therapyTypes } from '../data/therapyTypes';
import TherapyTypeCard from '../components/booking/TherapyTypeCard';
import BookingStep from '../components/ui/BookingStep';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const TherapyTypes = () => {
  const navigate = useNavigate();
  const { selectedTherapyType, setSelectedTherapyType, setCurrentStep } = useBooking();
  
  const handleContinue = () => {
    setCurrentStep(3);
    navigate('/schedule');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32 pb-20 px-6">
        <BookingStep
          title="Select Session Type"
          subtitle="Choose the type of therapy session you'd like to schedule"
          back="/therapists"
          next="/schedule"
          nextDisabled={!selectedTherapyType}
          onNext={handleContinue}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapyTypes.map((therapyType) => (
              <TherapyTypeCard
                key={therapyType.id}
                therapyType={therapyType}
                isSelected={selectedTherapyType?.id === therapyType.id}
                onSelect={setSelectedTherapyType}
              />
            ))}
          </div>
        </BookingStep>
      </main>
      
      <Footer />
    </div>
  );
};

export default TherapyTypes;
