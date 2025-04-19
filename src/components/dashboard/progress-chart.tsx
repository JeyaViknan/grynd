
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

// Sample data for the charts
const weeklyData = [
  { day: "Mon", weight: 180, calories: 2200, workouts: 1 },
  { day: "Tue", weight: 179.6, calories: 2100, workouts: 0 },
  { day: "Wed", weight: 179.2, calories: 2250, workouts: 1 },
  { day: "Thu", weight: 178.8, calories: 2150, workouts: 1 },
  { day: "Fri", weight: 178.5, calories: 2300, workouts: 0 },
  { day: "Sat", weight: 178, calories: 2500, workouts: 1 },
  { day: "Sun", weight: 177.8, calories: 2400, workouts: 1 },
];

const monthlyData = [
  { week: "Week 1", weight: 185, calories: 2300, workouts: 3 },
  { week: "Week 2", weight: 183, calories: 2250, workouts: 4 },
  { week: "Week 3", weight: 181, calories: 2200, workouts: 3 },
  { week: "Week 4", weight: 179, calories: 2150, workouts: 4 },
  { week: "Week 5", weight: 177.8, calories: 2100, workouts: 5 },
];

const workoutData = [
  { exercise: "Bench Press", start: 95, current: 135 },
  { exercise: "Squat", start: 135, current: 185 },
  { exercise: "Deadlift", start: 155, current: 225 },
  { exercise: "Overhead Press", start: 65, current: 95 },
  { exercise: "Barbell Row", start: 85, current: 125 },
];

export function ProgressChart() {
  const [timeframe, setTimeframe] = useState("weekly");
  const [metric, setMetric] = useState("weight");
  
  // Determine which dataset to use based on timeframe
  const data = timeframe === "weekly" ? weeklyData : monthlyData;
  
  // Determine x-axis key based on timeframe
  const xAxisKey = timeframe === "weekly" ? "day" : "week";
  
  // Format value for tooltip
  const formatValue = (value: number) => {
    if (metric === "weight") return `${value} lbs`;
    if (metric === "calories") return `${value} kcal`;
    return value;
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Progress Tracker</h2>
          <p className="text-gray-600 dark:text-gray-400">Monitor your fitness journey</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={metric} onValueChange={setMetric}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Metric" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weight">Weight</SelectItem>
              <SelectItem value="calories">Calories</SelectItem>
              <SelectItem value="workouts">Workouts</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Tabs defaultValue="trends" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="strength">Strength Progress</TabsTrigger>
        </TabsList>
        
        <TabsContent value="trends">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>
                {metric === "weight" ? "Weight Tracking" : metric === "calories" ? "Calorie Intake" : "Workout Frequency"}
              </CardTitle>
              <CardDescription>
                {timeframe === "weekly" ? "Past 7 days" : "Past month"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={data}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6D28D9" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#6D28D9" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />
                    <XAxis 
                      dataKey={xAxisKey} 
                      tick={{ fontSize: 12 }} 
                      tickLine={false}
                      axisLine={{ stroke: "#ddd" }}
                    />
                    <YAxis 
                      domain={['auto', 'auto']} 
                      tick={{ fontSize: 12 }} 
                      tickLine={false}
                      axisLine={{ stroke: "#ddd" }}
                      width={40}
                    />
                    <Tooltip 
                      formatter={(value: number) => [formatValue(value), metric.charAt(0).toUpperCase() + metric.slice(1)]}
                      labelFormatter={(label) => `${label}`}
                    />
                    <Area
                      type="monotone"
                      dataKey={metric}
                      stroke="#6D28D9"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorMetric)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="strength">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Strength Progression</CardTitle>
              <CardDescription>
                Starting weight vs. current weight
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={workoutData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd" horizontal={true} />
                    <XAxis 
                      type="number" 
                      tick={{ fontSize: 12 }} 
                      tickLine={false}
                      axisLine={{ stroke: "#ddd" }}
                      domain={[0, 'dataMax + 20']}
                    />
                    <YAxis 
                      dataKey="exercise" 
                      type="category" 
                      tick={{ fontSize: 12 }} 
                      tickLine={false}
                      axisLine={{ stroke: "#ddd" }}
                      width={100}
                    />
                    <Tooltip 
                      formatter={(value: number) => [`${value} lbs`, "Weight"]}
                    />
                    <Line 
                      dataKey="start" 
                      stroke="#9CA3AF" 
                      strokeWidth={2} 
                      dot={{ r: 4 }} 
                      name="Starting Weight"
                    />
                    <Line 
                      dataKey="current" 
                      stroke="#10B981" 
                      strokeWidth={2} 
                      dot={{ r: 4, fill: "#10B981" }} 
                      name="Current Weight"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
