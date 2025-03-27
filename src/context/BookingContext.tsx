
import React, { createContext, useContext, useState } from 'react';
import { Therapist } from '../data/therapists';
import { TherapyType } from '../data/therapyTypes';

interface BookingContextType {
  selectedTherapist: Therapist | null;
  setSelectedTherapist: (therapist: Therapist | null) => void;
  selectedTherapyType: TherapyType | null;
  setSelectedTherapyType: (therapyType: TherapyType | null) => void;
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  selectedTime: string | null;
  setSelectedTime: (time: string | null) => void;
  clientName: string;
  setClientName: (name: string) => void;
  clientEmail: string;
  setClientEmail: (email: string) => void;
  clientPhone: string;
  setClientPhone: (phone: string) => void;
  resetBooking: () => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedTherapist, setSelectedTherapist] = useState<Therapist | null>(null);
  const [selectedTherapyType, setSelectedTherapyType] = useState<TherapyType | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const resetBooking = () => {
    setSelectedTherapist(null);
    setSelectedTherapyType(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setClientName('');
    setClientEmail('');
    setClientPhone('');
    setCurrentStep(1);
  };

  return (
    <BookingContext.Provider
      value={{
        selectedTherapist,
        setSelectedTherapist,
        selectedTherapyType,
        setSelectedTherapyType,
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        clientName,
        setClientName,
        clientEmail,
        setClientEmail,
        clientPhone,
        setClientPhone,
        resetBooking,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
