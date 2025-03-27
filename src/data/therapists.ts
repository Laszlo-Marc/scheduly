
export interface Therapist {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  yearsExperience: number;
  bio: string;
  imageUrl: string;
  availability: {
    day: string;
    slots: string[];
  }[];
}

export const therapists: Therapist[] = [
  {
    id: "t1",
    name: "Dr. Emma Thompson",
    title: "Clinical Psychologist",
    specialties: ["Anxiety", "Depression", "Trauma", "PTSD"],
    yearsExperience: 12,
    bio: "Dr. Thompson specializes in cognitive behavioral therapy with a focus on trauma recovery and anxiety management. Her approach combines evidence-based techniques with compassionate care.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3",
    availability: [
      {
        day: "Monday",
        slots: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"]
      },
      {
        day: "Wednesday",
        slots: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"]
      },
      {
        day: "Friday",
        slots: ["09:00", "10:00", "11:00", "14:00", "15:00"]
      }
    ]
  },
  {
    id: "t2",
    name: "Dr. Michael Chen",
    title: "Psychotherapist",
    specialties: ["Relationships", "Life Transitions", "Grief", "Identity"],
    yearsExperience: 8,
    bio: "Dr. Chen practices integrative therapy, drawing from various therapeutic modalities to create a personalized approach for each client. He specializes in helping individuals navigate major life changes.",
    imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    availability: [
      {
        day: "Tuesday",
        slots: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"]
      },
      {
        day: "Thursday",
        slots: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"]
      },
      {
        day: "Saturday",
        slots: ["10:00", "11:00", "12:00"]
      }
    ]
  },
  {
    id: "t3",
    name: "Dr. Sarah Williams",
    title: "Family Therapist",
    specialties: ["Family Dynamics", "Couples Therapy", "Child Psychology", "Parenting"],
    yearsExperience: 15,
    bio: "Dr. Williams focuses on strengthening family relationships and improving communication. She helps couples and families develop healthier interaction patterns and resolve conflicts constructively.",
    imageUrl: "https://images.unsplash.com/photo-1564460576398-ef55d99548b2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    availability: [
      {
        day: "Monday",
        slots: ["12:00", "13:00", "16:00", "17:00", "18:00"]
      },
      {
        day: "Wednesday",
        slots: ["12:00", "13:00", "16:00", "17:00", "18:00"]
      },
      {
        day: "Friday",
        slots: ["12:00", "13:00", "16:00", "17:00"]
      }
    ]
  },
  {
    id: "t4",
    name: "Dr. James Rodriguez",
    title: "Clinical Psychologist",
    specialties: ["Addiction", "Substance Abuse", "Recovery", "Behavioral Change"],
    yearsExperience: 10,
    bio: "Dr. Rodriguez specializes in addiction psychology and recovery support. He employs motivational interviewing and cognitive-behavioral strategies to help clients make sustainable lifestyle changes.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    availability: [
      {
        day: "Tuesday",
        slots: ["12:00", "13:00", "16:00", "17:00", "18:00"]
      },
      {
        day: "Thursday",
        slots: ["12:00", "13:00", "16:00", "17:00", "18:00"]
      },
      {
        day: "Saturday",
        slots: ["13:00", "14:00", "15:00"]
      }
    ]
  }
];
