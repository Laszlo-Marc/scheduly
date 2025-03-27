
import React from 'react';
import { TherapyType } from '../../data/therapyTypes';
import { User, Users, UserPlus, UserCog, Clock } from 'lucide-react';

interface TherapyTypeCardProps {
  therapyType: TherapyType;
  isSelected: boolean;
  onSelect: (therapyType: TherapyType) => void;
}

const TherapyTypeCard: React.FC<TherapyTypeCardProps> = ({ therapyType, isSelected, onSelect }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'user':
        return <User className="text-primary" size={24} />;
      case 'users':
        return <Users className="text-primary" size={24} />;
      case 'userPlus':
        return <UserPlus className="text-primary" size={24} />;
      case 'userCog':
        return <UserCog className="text-primary" size={24} />;
      default:
        return <User className="text-primary" size={24} />;
    }
  };

  return (
    <div 
      className={`p-6 rounded-xl glass-effect card-hover cursor-pointer transition-all duration-300 h-full flex flex-col ${
        isSelected 
          ? 'ring-2 ring-primary/50 shadow-lg' 
          : 'hover:bg-white/90'
      }`}
      onClick={() => onSelect(therapyType)}
    >
      <div className="mb-4">
        <div className="p-3 bg-primary/10 rounded-lg inline-block">
          {getIcon(therapyType.icon)}
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{therapyType.name}</h3>
          <p className="text-sm text-muted-foreground mt-2 mb-4">{therapyType.description}</p>
        </div>
        
        <div className="mt-auto space-y-2">
          <div className="flex items-center">
            <Clock className="text-muted-foreground mr-2" size={16} />
            <span className="text-sm text-muted-foreground">{therapyType.duration} minutes</span>
          </div>
          
          <p className="text-lg font-semibold text-foreground">${therapyType.price}</p>
        </div>
        
        <div className="mt-4 flex items-center justify-end">
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

export default TherapyTypeCard;
