
import React from 'react';
import { format } from 'date-fns';
import { useBooking } from '../../context/BookingContext';
import { Calendar, Clock, User } from 'lucide-react';

interface BookingSummaryProps {
  isConfirmation?: boolean;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({ isConfirmation = false }) => {
  const { 
    selectedTherapist, 
    selectedTherapyType, 
    selectedDate, 
    selectedTime,
    clientName,
    clientEmail,
    clientPhone
  } = useBooking();

  if (!selectedTherapist || !selectedTherapyType || !selectedDate || !selectedTime) {
    return null;
  }

  const formatTimeDisplay = (time: string) => {
    // Convert 24h format to 12h format
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <div className={`glass-effect rounded-xl p-6 ${isConfirmation ? 'max-w-xl mx-auto' : ''}`}>
      <h3 className="text-lg font-semibold text-foreground mb-4">
        {isConfirmation ? 'Booking Confirmed' : 'Summary'}
      </h3>
      
      {isConfirmation && (
        <div className="mb-6 flex justify-center">
          <div className="bg-primary/10 p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </div>
        </div>
      )}
      
      <div className="space-y-6">
        <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
          <img 
            src={selectedTherapist.imageUrl} 
            alt={selectedTherapist.name}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div>
            <h4 className="font-medium text-foreground">{selectedTherapist.name}</h4>
            <p className="text-sm text-muted-foreground">{selectedTherapist.title}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-accent p-2 rounded-md">
              <Calendar className="text-accent-foreground" size={20} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Date</p>
              <p className="font-medium text-foreground">{format(selectedDate, 'EEEE, MMMM d, yyyy')}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-accent p-2 rounded-md">
              <Clock className="text-accent-foreground" size={20} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Time</p>
              <p className="font-medium text-foreground">{formatTimeDisplay(selectedTime)}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
          <div className="bg-accent p-2 rounded-md">
            <User className="text-accent-foreground" size={20} />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Session Type</p>
            <p className="font-medium text-foreground">{selectedTherapyType.name} ({selectedTherapyType.duration} min)</p>
          </div>
        </div>
        
        {isConfirmation && (
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Your Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-muted-foreground">Name</p>
                <p className="text-sm text-foreground">{clientName}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm text-foreground">{clientEmail}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm text-foreground">{clientPhone}</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center pt-2">
          <p className="text-foreground font-medium">Total</p>
          <p className="text-xl font-semibold text-foreground">${selectedTherapyType.price}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
