
import React from 'react';
import { Therapist } from '../../data/therapists';

interface TherapistCardProps {
  therapist: Therapist;
  isSelected: boolean;
  onSelect: (therapist: Therapist) => void;
}

const TherapistCard: React.FC<TherapistCardProps> = ({ therapist, isSelected, onSelect }) => {
  return (
    <div 
      className={`p-6 rounded-xl glass-effect card-hover cursor-pointer transition-all duration-300 ${
        isSelected 
          ? 'ring-2 ring-primary/50 shadow-lg' 
          : 'hover:bg-white/90'
      }`}
      onClick={() => onSelect(therapist)}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-shrink-0">
          <img 
            src={therapist.imageUrl} 
            alt={therapist.name} 
            className={`w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl transition-transform duration-300 ${isSelected ? 'scale-105' : ''}`}
          />
        </div>
        
        <div className="flex-1 space-y-2">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{therapist.name}</h3>
            <p className="text-sm text-muted-foreground">{therapist.title}</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {therapist.specialties.slice(0, 3).map((specialty, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-accent text-xs font-medium text-accent-foreground rounded-full"
              >
                {specialty}
              </span>
            ))}
            {therapist.specialties.length > 3 && (
              <span className="px-2 py-1 bg-accent text-xs font-medium text-accent-foreground rounded-full">
                +{therapist.specialties.length - 3}
              </span>
            )}
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2">{therapist.bio}</p>
          
          <p className="text-sm text-foreground font-medium">
            {therapist.yearsExperience} years experience
          </p>
        </div>
        
        <div className="flex items-center justify-center md:justify-end">
          <div className={`w-6 h-6 rounded-full border-2 ${
            isSelected 
              ? 'border-primary bg-primary/10 flex items-center justify-center' 
              : 'border-gray-300'
          }`}>
            {isSelected && (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistCard;
