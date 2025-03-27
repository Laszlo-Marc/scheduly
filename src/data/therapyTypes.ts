
export interface TherapyType {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  icon: string;
}

export const therapyTypes: TherapyType[] = [
  {
    id: "tt1",
    name: "Individual Therapy",
    description: "One-on-one sessions focused on personal growth, mental health challenges, and individual goals.",
    duration: 50,
    price: 120,
    icon: "user"
  },
  {
    id: "tt2",
    name: "Couples Therapy",
    description: "Sessions aimed at improving communication, resolving conflicts, and strengthening relationships.",
    duration: 80,
    price: 150,
    icon: "user"
  },
  {
    id: "tt3",
    name: "Family Therapy",
    description: "Group sessions that focus on improving family dynamics, communication patterns, and resolving conflicts.",
    duration: 90,
    price: 180,
    icon: "user"
  },
  {
    id: "tt4",
    name: "Group Therapy",
    description: "Facilitated sessions with multiple clients addressing shared concerns in a supportive community.",
    duration: 90,
    price: 80,
    icon: "user"
  },
  {
    id: "tt5",
    name: "Initial Consultation",
    description: "An introductory session to assess needs and determine the most appropriate treatment approach.",
    duration: 45,
    price: 90,
    icon: "user"
  }
];
