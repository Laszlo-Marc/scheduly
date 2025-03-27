
import React, { useState, useEffect } from 'react';
import { format, isAfter, isBefore, isSameDay, addDays, startOfDay } from 'date-fns';
import { Calendar } from "@/components/ui/calendar";
import { Therapist } from '../../data/therapists';

interface DateTimePickerProps {
  therapist: Therapist;
  selectedDate: Date | null;
  selectedTime: string | null;
  onDateSelect: (date: Date) => void;
  onTimeSelect: (time: string) => void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ 
  therapist, 
  selectedDate, 
  selectedTime, 
  onDateSelect, 
  onTimeSelect 
}) => {
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  
  // Get the days of the week when the therapist is available
  const availableDays = therapist.availability.map(day => day.day);
  
  // Prepare a function to disable dates in the calendar
  const isDateDisabled = (date: Date) => {
    const dayOfWeek = format(date, 'EEEE');
    const isAvailable = availableDays.includes(dayOfWeek);
    const today = startOfDay(new Date());
    const oneMonthFromNow = addDays(today, 30);
    
    return !isAvailable || isBefore(date, today) || isAfter(date, oneMonthFromNow);
  };
  
  // Update available times when the selected date changes
  useEffect(() => {
    if (selectedDate) {
      const dayOfWeek = format(selectedDate, 'EEEE');
      const daySchedule = therapist.availability.find(day => day.day === dayOfWeek);
      
      if (daySchedule) {
        setAvailableTimes(daySchedule.slots);
      } else {
        setAvailableTimes([]);
      }
    } else {
      setAvailableTimes([]);
    }
  }, [selectedDate, therapist]);
  
  const formatTimeDisplay = (time: string) => {
    // Convert 24h format to 12h format
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="glass-effect rounded-xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Select Date</h3>
        <div className="rounded-lg overflow-hidden">
          <Calendar
            mode="single"
            selected={selectedDate || undefined}
            onSelect={(date) => date && onDateSelect(date)}
            disabled={isDateDisabled}
            className="p-3 pointer-events-auto rounded-lg"
          />
        </div>
      </div>
      
      <div className="glass-effect rounded-xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Select Time</h3>
        {selectedDate ? (
          availableTimes.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  className={`p-3 rounded-lg text-sm font-medium transition-all ${
                    selectedTime === time
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-accent text-accent-foreground hover:bg-accent/70'
                  }`}
                  onClick={() => onTimeSelect(time)}
                >
                  {formatTimeDisplay(time)}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">No available times on this date.</p>
          )
        ) : (
          <p className="text-muted-foreground text-center py-8">Please select a date first.</p>
        )}
      </div>
    </div>
  );
};

export default DateTimePicker;
