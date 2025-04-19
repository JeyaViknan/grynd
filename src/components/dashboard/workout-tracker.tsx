
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Play, Pause, RotateCcw, CheckCircle, Timer } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight: number;
  completed: number;
}

export function WorkoutTracker() {
  const [exercises, setExercises] = useState<Exercise[]>([
    { 
      id: '1', 
      name: 'Bench Press', 
      sets: 3, 
      reps: 10, 
      weight: 135, 
      completed: 0 
    },
    { 
      id: '2', 
      name: 'Squat', 
      sets: 4, 
      reps: 8, 
      weight: 185, 
      completed: 0 
    },
    { 
      id: '3', 
      name: 'Deadlift', 
      sets: 3, 
      reps: 5, 
      weight: 225, 
      completed: 0 
    }
  ]);
  
  const [timer, setTimer] = useState({
    seconds: 0,
    isRunning: false
  });
  
  const [currentExerciseId, setCurrentExerciseId] = useState<string | null>(null);
  
  // Timer functions
  const startTimer = () => {
    setTimer({ ...timer, isRunning: true });
  };
  
  const pauseTimer = () => {
    setTimer({ ...timer, isRunning: false });
  };
  
  const resetTimer = () => {
    setTimer({ seconds: 0, isRunning: false });
  };
  
  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Complete a set
  const completeSet = (id: string) => {
    setExercises(exercises.map(exercise => {
      if (exercise.id === id && exercise.completed < exercise.sets) {
        return { ...exercise, completed: exercise.completed + 1 };
      }
      return exercise;
    }));
    
    // Reset timer after completing a set
    resetTimer();
  };
  
  // Undo a completed set
  const undoSet = (id: string) => {
    setExercises(exercises.map(exercise => {
      if (exercise.id === id && exercise.completed > 0) {
        return { ...exercise, completed: exercise.completed - 1 };
      }
      return exercise;
    }));
  };
  
  // Select current exercise for timing
  const selectExercise = (id: string) => {
    setCurrentExerciseId(id === currentExerciseId ? null : id);
    resetTimer();
  };
  
  // Calculate total workout completion percentage
  const totalSets = exercises.reduce((acc, exercise) => acc + exercise.sets, 0);
  const completedSets = exercises.reduce((acc, exercise) => acc + exercise.completed, 0);
  const completionPercentage = Math.round((completedSets / totalSets) * 100);
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Today's Workout</h2>
          <p className="text-gray-600 dark:text-gray-400">Track your sets and reps</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 flex items-center gap-2">
            <Timer className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <span className="text-lg font-mono">{formatTime(timer.seconds)}</span>
            {!timer.isRunning ? (
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full" 
                onClick={startTimer}
              >
                <Play className="h-4 w-4" />
              </Button>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full" 
                onClick={pauseTimer}
              >
                <Pause className="h-4 w-4" />
              </Button>
            )}
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full" 
              onClick={resetTimer}
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Workout Progress
          </span>
          <span className="text-sm font-medium">
            {completedSets}/{totalSets} sets
          </span>
        </div>
        <Progress value={completionPercentage} className="h-2" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {exercises.map((exercise) => (
          <Card 
            key={exercise.id} 
            className={`overflow-hidden ${currentExerciseId === exercise.id ? 'ring-2 ring-gym-primary dark:ring-gym-secondary' : ''}`}
          >
            <CardHeader className="pb-2">
              <CardTitle>{exercise.name}</CardTitle>
              <CardDescription>
                {exercise.sets} sets × {exercise.reps} reps • {exercise.weight} lbs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <div className="text-sm text-gray-600 dark:text-gray-400">Sets completed:</div>
                <div className="flex items-center space-x-1">
                  {Array.from({ length: exercise.sets }).map((_, index) => (
                    <span 
                      key={index} 
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-xs
                        ${index < exercise.completed ? 'bg-gym-primary dark:bg-gym-secondary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                    >
                      {index + 1}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600 dark:border-red-900 dark:hover:bg-red-950"
                  onClick={() => undoSet(exercise.id)}
                  disabled={exercise.completed === 0}
                >
                  <Minus className="h-4 w-4 mr-1" />
                  Undo Set
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-gray-600 dark:text-gray-400 border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
                  onClick={() => selectExercise(exercise.id)}
                >
                  <Timer className="h-4 w-4 mr-1" />
                  Time Rest
                </Button>
                
                <Button 
                  variant="default" 
                  size="sm" 
                  className="bg-gym-primary hover:bg-gym-primary/90 text-white dark:bg-gym-secondary dark:hover:bg-gym-secondary/90"
                  onClick={() => completeSet(exercise.id)}
                  disabled={exercise.completed >= exercise.sets}
                >
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Complete Set
                </Button>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 dark:bg-gray-900 pt-2 pb-2">
              <div className="w-full">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Progress:</span>
                  <span className="font-medium">{exercise.completed}/{exercise.sets} sets</span>
                </div>
                <Progress 
                  value={(exercise.completed / exercise.sets) * 100} 
                  className="h-1.5 mt-1" 
                />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <Button className="w-full gym-button-outline">
        <Plus className="h-4 w-4 mr-2" />
        Add Exercise
      </Button>
    </div>
  );
}
