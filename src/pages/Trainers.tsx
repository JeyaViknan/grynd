
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Mail, MessageSquare, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";

const trainers = [
  {
    name: "Sarah Johnson",
    specialty: "Strength & Conditioning",
    experience: "8+ years",
    certifications: ["NASM CPT", "CrossFit L2", "TRX Certified"],
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Mike Rodriguez",
    specialty: "HIIT & Weight Loss",
    experience: "10+ years",
    certifications: ["ACE CPT", "Precision Nutrition", "Kettlebell Certified"],
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Emma Chen",
    specialty: "Yoga & Flexibility",
    experience: "6+ years",
    certifications: ["RYT 500", "Pilates Instructor", "Meditation Coach"],
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Arnold",
    specialty: "PowerLifting",
    experience: "30+ years",
    certifications: ["NSCA CSCS", "USA Powerlifting Coach", "Sports Nutrition"],
    rating: 4.9,
    image: "/arnold.png" 
  }
];

const Trainers = () => {
  const handleMessageTrainer = (trainerName: string) => {
    // Check if user is authenticated
    const isAuthenticated = false; // This should be replaced with actual auth check
    
    if (!isAuthenticated) {
      window.location.href = `/auth?mode=login&redirect=/trainers`;
      return;
    }
    
    // If authenticated, handle messaging
    console.log(`Opening message dialog for trainer: ${trainerName}`);
    // Add messaging logic here
  };

  const handleEmailTrainer = (trainerName: string) => {
    // Check if user is authenticated
    const isAuthenticated = false; // This should be replaced with actual auth check
    
    if (!isAuthenticated) {
      window.location.href = `/auth?mode=login&redirect=/trainers`;
      return;
    }
    
    // If authenticated, handle email
    console.log(`Opening email dialog for trainer: ${trainerName}`);
    // Add email logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gym-heading">Our Expert Trainers</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Work with our certified trainers to achieve your fitness goals faster
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="relative mb-4">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-white dark:bg-gray-800 px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-bold">{trainer.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold">{trainer.name}</CardTitle>
                <p className="text-gym-primary font-medium">{trainer.specialty}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-gym-primary" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {trainer.experience} experience
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Certifications:</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    {trainer.certifications.map((cert, i) => (
                      <li key={i}>{cert}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button 
                    className="flex-1 gym-button-primary" 
                    size="sm"
                    onClick={() => handleMessageTrainer(trainer.name)}
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                  <Button 
                    className="flex-1 gym-button-outline" 
                    size="sm"
                    onClick={() => handleEmailTrainer(trainer.name)}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Trainers;
