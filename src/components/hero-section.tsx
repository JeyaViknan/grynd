
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gym-primary/20 via-transparent to-gym-secondary/20 dark:from-gym-primary/10 dark:via-transparent dark:to-gym-secondary/10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gym-primary/20 rounded-full blur-3xl dark:bg-gym-primary/10" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gym-secondary/20 rounded-full blur-3xl dark:bg-gym-secondary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="text-gym-primary font-bebas tracking-wider">TRANSFORM YOUR BODY.</span>
              <br />
              <span className="text-foreground dark:text-gray-100 font-bebas tracking-wider">ELEVATE YOUR MIND.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Join GrowStrong and discover a personalized fitness journey with AI-driven workout plans, expert guidance, and a supportive community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/auth?mode=signup">
                <Button className="gym-button-primary">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="#programs">
                <Button className="gym-button-outline">
                  Explore Programs
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <p className="text-3xl font-bold text-gym-primary dark:text-gym-secondary">500+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Workouts</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gym-primary dark:text-gym-secondary">15k+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Active Users</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gym-primary dark:text-gym-secondary">98%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Success Rate</p>
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="lg:w-1/2 glass-card p-3 rounded-2xl transform rotate-2 shadow-xl">
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="People working out in a gym" 
                className="object-cover w-full h-full" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
