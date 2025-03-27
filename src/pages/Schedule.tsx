
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import DateTimePicker from '../components/booking/DateTimePicker';
import BookingSummary from '../components/booking/BookingSummary';
import BookingStep from '../components/ui/BookingStep';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Schedule = () => {
  const navigate = useNavigate();
  const { 
    selectedTherapist, 
    selectedDate, 
    setSelectedDate, 
    selectedTime, 
    setSelectedTime,
    setCurrentStep
  } = useBooking();
  
  if (!selectedTherapist) {
    navigate('/therapists');
    return null;
  }
  
  const handleContinue = () => {
    setCurrentStep(4);
    navigate('/confirmation');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32 pb-20 px-6">
        <BookingStep
          title="Schedule Your Session"
          subtitle="Select a date and time that works for you"
          back="/therapy-types"
          next="/confirmation"
          nextDisabled={!selectedDate || !selectedTime}
          onNext={handleContinue}
        >
          <div className="space-y-8">
            <DateTimePicker
              therapist={selectedTherapist}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onDateSelect={setSelectedDate}
              onTimeSelect={setSelectedTime}
            />
            
            {selectedDate && selectedTime && (
              <div className="mt-8 animate-fade-in">
                <BookingSummary />
              </div>
            )}
          </div>
        </BookingStep>
      </main>
      
      <Footer />
    </div>
  );
};

export default Schedule;
