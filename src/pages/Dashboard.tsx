
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/navbar";
import { WorkoutTracker } from "@/components/dashboard/workout-tracker";
import { ProgressChart } from "@/components/dashboard/progress-chart";
import { Button } from "@/components/ui/button";
import { Activity, Calendar, Dumbbell, Settings, Trophy, Users } from "lucide-react";
import { AddExerciseDialog } from "@/components/dashboard/add-exercise-dialog";
import { AiCoachDialog } from "@/components/dashboard/ai-coach-dialog";
import { useUser } from "@/contexts/user-context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
  const { user, loading, signOut } = useUser();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-64 shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 sticky top-24">
              {user ? (
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-full bg-gym-primary/10 dark:bg-gym-primary/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-gym-primary dark:text-gym-secondary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{user.email}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Premium Member</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-full bg-gym-primary/10 dark:bg-gym-primary/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-gym-primary dark:text-gym-secondary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Guest User</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Limited Access</p>
                  </div>
                </div>
              )}
              
              <nav className="space-y-1">
                <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                  <a href="#tracker">
                    <Activity className="h-5 w-5" />
                    Dashboard
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                  <a href="#workouts">
                    <Dumbbell className="h-5 w-5" />
                    Workouts
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                  <a href="#schedule">
                    <Calendar className="h-5 w-5" />
                    Schedule
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                  <a href="#achievements">
                    <Trophy className="h-5 w-5" />
                    Achievements
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                  <a href="#settings">
                    <Settings className="h-5 w-5" />
                    Settings
                  </a>
                </Button>
              </nav>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="bg-gym-primary/10 dark:bg-gym-primary/20 rounded-lg p-4 mb-4">
                  <AiCoachDialog />
                </div>
                {user ? (
                  <Button 
                    variant="outline" 
                    className="w-full justify-center" 
                    onClick={signOut}
                  >
                    Sign Out
                  </Button>
                ) : (
                  <Button 
                    variant="outline" 
                    className="w-full justify-center" 
                    onClick={() => navigate('/auth?mode=login')}
                  >
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            
            <Tabs defaultValue="workout" className="w-full space-y-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="workout">
                  <Dumbbell className="h-4 w-4 mr-2" />
                  Workout Tracker
                </TabsTrigger>
                <TabsTrigger value="progress">
                  <Activity className="h-4 w-4 mr-2" />
                  Progress
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="workout" className="space-y-6">
                <WorkoutTracker />
              </TabsContent>
              
              <TabsContent value="progress" className="space-y-6">
                <ProgressChart />
              </TabsContent>
              
              <TabsTrigger value="fitness">
                <Activity className="h-4 w-4 mr-2" />
                Fitness Tools
              </TabsTrigger>
              
              <TabsContent value="fitness" className="space-y-6">
                <BMICalculator />
              </TabsContent>
            </Tabs>
            
            <AddExerciseDialog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
