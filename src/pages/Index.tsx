
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-down">
                <div className="inline-block px-3 py-1 bg-accent rounded-full">
                  <span className="text-xs font-medium text-accent-foreground">Simple Online Booking</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  Book your therapy session with ease
                </h1>
                
                <p className="text-lg text-muted-foreground">
                  Schedule a session with a qualified therapist in just a few clicks. No phone calls, no waiting.
                </p>
                
                <div className="pt-4">
                  <Button 
                    size="lg" 
                    onClick={() => navigate('/therapists')}
                    className="focus-ring text-base"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-blur-in">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1620226326060-dce975cbeda7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Therapy session" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass-effect p-4 rounded-xl max-w-[200px]">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="bg-primary/10 p-1 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-sm font-semibold">Easy to Use</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Book your session in less than 2 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-20 bg-accent/30 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We've simplified the therapy booking process to make mental healthcare more accessible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-effect p-6 rounded-xl">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <span className="text-xl font-semibold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Choose a Therapist</h3>
                <p className="text-muted-foreground">Browse our selection of qualified therapists and find one that matches your needs.</p>
              </div>
              
              <div className="glass-effect p-6 rounded-xl">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <span className="text-xl font-semibold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Select Session Type</h3>
                <p className="text-muted-foreground">Choose from various therapy options including individual, couples, or family sessions.</p>
              </div>
              
              <div className="glass-effect p-6 rounded-xl">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <span className="text-xl font-semibold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Schedule & Confirm</h3>
                <p className="text-muted-foreground">Pick a convenient date and time, then confirm your appointment details.</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/therapists')}
                className="focus-ring"
              >
                Book Your Session
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">What Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our platform has helped hundreds of clients access quality mental health care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect p-6 rounded-xl">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-primary">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"I love how easy it is to schedule my therapy sessions. The interface is clean and intuitive, and I can book appointments outside of business hours."</p>
                <div>
                  <p className="font-semibold">Sarah K.</p>
                  <p className="text-sm text-muted-foreground">Client since 2022</p>
                </div>
              </div>
              
              <div className="glass-effect p-6 rounded-xl">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-primary">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"Being able to see therapist profiles and choose someone who specializes in my specific issues has made a huge difference in my mental health journey."</p>
                <div>
                  <p className="font-semibold">Michael T.</p>
                  <p className="text-sm text-muted-foreground">Client since 2023</p>
                </div>
              </div>
              
              <div className="glass-effect p-6 rounded-xl">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-primary">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"The reminder system and easy rescheduling options have been so helpful. This platform removes many of the barriers to consistent therapy."</p>
                <div>
                  <p className="font-semibold">Jennifer L.</p>
                  <p className="text-sm text-muted-foreground">Client since 2021</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary/5 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to take the first step?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Book your therapy session today and start your journey towards better mental health.
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate('/therapists')}
              className="focus-ring text-base"
            >
              Book Your First Session
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
