import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) return;

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
    setBmi(parseFloat(calculatedBMI.toFixed(1)));

    // Determine BMI category
    if (calculatedBMI < 18.5) {
      setBmiCategory("Underweight");
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
      setBmiCategory("Normal weight");
    } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
      setBmiCategory("Overweight");
    } else {
      setBmiCategory("Obese");
    }
  };

  const getBmiCategoryColor = () => {
    switch (bmiCategory) {
      case "Underweight":
        return "text-blue-500";
      case "Normal weight":
        return "text-green-500";
      case "Overweight":
        return "text-yellow-500";
      case "Obese":
        return "text-red-500";
      default:
        return "";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>BMI Calculator</CardTitle>
        <CardDescription>
          Calculate your Body Mass Index (BMI)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                id="height"
                type="number"
                placeholder="Enter height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="Enter weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>

          <Button
            onClick={calculateBMI}
            className="w-full gym-button-primary"
            disabled={!height || !weight}
          >
            Calculate BMI
          </Button>

          {bmi !== null && (
            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <div className="text-center">
                <p className="text-2xl font-bold">{bmi}</p>
                <p className={`text-lg font-medium ${getBmiCategoryColor()}`}>
                  {bmiCategory}
                </p>
              </div>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <p className="mb-2">BMI Categories:</p>
                <ul className="space-y-1">
                  <li>Underweight: &lt; 18.5</li>
                  <li>Normal weight: 18.5 - 24.9</li>
                  <li>Overweight: 25 - 29.9</li>
                  <li>Obese: ≥ 30</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}