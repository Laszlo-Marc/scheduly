
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import BookingSummary from '../components/booking/BookingSummary';
import BookingStep from '../components/ui/BookingStep';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { toast } from "@/hooks/use-toast";

const Confirmation = () => {
  const navigate = useNavigate();
  const { 
    selectedTherapist, 
    selectedTherapyType, 
    selectedDate,
    selectedTime,
    clientName,
    setClientName,
    clientEmail,
    setClientEmail,
    clientPhone,
    setClientPhone,
    resetBooking
  } = useBooking();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  
  if (!selectedTherapist || !selectedTherapyType || !selectedDate || !selectedTime) {
    navigate('/therapists');
    return null;
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!clientName || !clientEmail || !clientPhone) {
      toast({
        title: "Please fill in all fields",
        description: "We need your contact information to confirm the booking.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
      
      toast({
        title: "Booking Confirmed!",
        description: "Your therapy session has been successfully scheduled.",
      });
    }, 1500);
  };
  
  const handleStartOver = () => {
    resetBooking();
    navigate('/');
  };
  
  if (isConfirmed) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 pt-32 pb-20 px-6 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-foreground mb-2">Booking Confirmed!</h1>
              <p className="text-lg text-muted-foreground">Your therapy session has been scheduled.</p>
            </div>
            
            <BookingSummary isConfirmation />
            
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                A confirmation email has been sent to {clientEmail}.<br />
                You'll receive a reminder 24 hours before your appointment.
              </p>
              
              <Button onClick={handleStartOver} className="focus-ring">
                Return to Home
              </Button>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32 pb-20 px-6">
        <BookingStep
          title="Confirm Your Booking"
          subtitle="Please provide your contact information"
          back="/schedule"
          showConfirmButton
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <BookingSummary />
            </div>
            
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6">Your Information</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-white/50 border border-gray-200 rounded-lg focus:outline-none input-focus"
                    placeholder="Enter your full name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-white/50 border border-gray-200 rounded-lg focus:outline-none input-focus"
                    placeholder="Enter your email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 bg-white/50 border border-gray-200 rounded-lg focus:outline-none input-focus"
                    placeholder="Enter your phone number"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    required
                  />
                </div>
                
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full focus-ring"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </BookingStep>
      </main>
      
      <Footer />
    </div>
  );
};

export default Confirmation;
