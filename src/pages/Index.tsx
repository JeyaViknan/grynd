import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeatureCard } from "@/components/feature-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Dumbbell, Brain, Calendar, BarChart, Video, Utensils, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* Features section */}
        <section id="features" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Everything you need to track, plan, and achieve your fitness goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={Dumbbell}
                title="Workout Tracker"
                description="Track sets, reps, and weights with our intuitive workout tracker. Monitor your progress and celebrate your gains."
              />
              <FeatureCard 
                icon={BarChart}
                title="Progress Analytics"
                description="Visualize your fitness journey with comprehensive charts and analytics that show your improvement over time."
              />
              <FeatureCard 
                icon={Brain}
                title="AI Coach Assistant"
                description="Get personalized workout suggestions and advice from our AI-powered coach based on your goals and progress."
              />
              <FeatureCard 
                icon={Calendar}
                title="Workout Scheduler"
                description="Plan your workout routines in advance with our easy-to-use calendar. Never miss a workout again."
              />
              <FeatureCard 
                icon={Video}
                title="Exercise Library"
                description="Access a vast library of exercise videos and tutorials to ensure proper form and technique."
              />
              <FeatureCard 
                icon={Utensils}
                title="Nutrition Plans"
                description="Receive customized nutrition advice and meal plans that complement your fitness goals and workout routine."
              />
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your fitness journey?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Join thousands of users who have already achieved their fitness goals with GRYND.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/auth?mode=signup">
                  <Button className="gym-button-primary text-lg">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" className="gym-button-outline text-lg">
                    Explore Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-white dark:bg-gray-900 py-12 px-4 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <Dumbbell className="h-8 w-8 text-gym-primary mr-2" />
                <span className="text-3xl font-bebas gym-heading tracking-wider">GRYND</span>
              </div>
              <div className="flex space-x-6">
                <Link to="/about" className="text-gray-600 hover:text-gym-primary dark:text-gray-400 dark:hover:text-gym-secondary">
                  About
                </Link>
                <Link to="/programs" className="text-gray-600 hover:text-gym-primary dark:text-gray-400 dark:hover:text-gym-secondary">
                  Features
                </Link>
                <Link to="/programs" className="text-gray-600 hover:text-gym-primary dark:text-gray-400 dark:hover:text-gym-secondary">
                  Pricing
                </Link>
                <Link to="/contact" className="text-gray-600 hover:text-gym-primary dark:text-gray-400 dark:hover:text-gym-secondary">
                  Contact
                </Link>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} GrowStrong. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
