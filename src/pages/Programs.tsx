
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Dumbbell, Users } from "lucide-react";
import { Navbar } from "@/components/navbar";

const programs = [
  {
    title: "Beginner Strength Training",
    description: "Perfect for those new to weight training",
    duration: "8 weeks",
    sessions: "3x per week",
    capacity: "20 spots",
    price: "$99/month",
    intensity: "Beginner"
  },
  {
    title: "HIIT & Conditioning",
    description: "High-intensity interval training for maximum results",
    duration: "12 weeks",
    sessions: "4x per week",
    capacity: "15 spots",
    price: "$129/month",
    intensity: "Advanced"
  },
  {
    title: "Yoga & Flexibility",
    description: "Improve flexibility and reduce stress",
    duration: "Ongoing",
    sessions: "5x per week",
    capacity: "25 spots",
    price: "$89/month",
    intensity: "All levels"
  },
  {
    title: "PowerLifting Pro",
    description: "Master the big three lifts",
    duration: "16 weeks",
    sessions: "4x per week",
    capacity: "10 spots",
    price: "$149/month",
    intensity: "Advanced"
  }
];

const Programs = () => {
  const handleJoinProgram = (programTitle: string) => {
    // Check if user is authenticated
    const isAuthenticated = false; // This should be replaced with actual auth check
    
    if (!isAuthenticated) {
      // Redirect to login page with return URL
      window.location.href = `/auth?mode=login&redirect=/programs`;
      return;
    }
    
    // If authenticated, handle program enrollment
    console.log(`Joining program: ${programTitle}`);
    // Add enrollment logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gym-heading">Our Programs</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose from our diverse range of fitness programs designed to help you reach your goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">{program.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gym-primary" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gym-primary" />
                    <span>{program.sessions}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gym-primary" />
                    <span>{program.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Dumbbell className="h-4 w-4 text-gym-primary" />
                    <span>{program.intensity}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-bold text-gym-primary">{program.price}</span>
                <Button 
                  className="gym-button-primary"
                  onClick={() => handleJoinProgram(program.title)}
                >
                  Join Program
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Programs;
