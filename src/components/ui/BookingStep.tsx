
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface BookingStepProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  back?: string;
  next?: string;
  nextDisabled?: boolean;
  onNext?: () => void;
  showConfirmButton?: boolean;
}

const BookingStep: React.FC<BookingStepProps> = ({
  title,
  subtitle,
  children,
  back,
  next,
  nextDisabled = false,
  onNext,
  showConfirmButton = false,
}) => {
  const navigate = useNavigate();

  const handleNext = () => {
    if (onNext) {
      onNext();
    }
    if (next) {
      navigate(next);
    }
  };

  const handleBack = () => {
    if (back) {
      navigate(back);
    }
  };

  return (
    <div className="max-w-6xl mx-auto animate-slide-up">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      </div>

      <div className="mb-8">{children}</div>

      <div className="flex justify-between items-center">
        {back ? (
          <Button
            variant="outline"
            onClick={handleBack}
            className="focus-ring"
          >
            Back
          </Button>
        ) : (
          <div></div>
        )}

        {next && (
          <Button
            disabled={nextDisabled}
            onClick={handleNext}
            className="focus-ring"
          >
            {showConfirmButton ? 'Confirm Booking' : 'Continue'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default BookingStep;
