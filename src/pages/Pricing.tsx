import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";

const tiers = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for getting started",
    features: [
      "Basic workout tracking",
      "Access to exercise library",
      "Community support",
      "Progress tracking"
    ]
  },
  {
    name: "Pro",
    price: "$9.99",
    description: "Most popular for fitness enthusiasts",
    features: [
      "All Basic features",
      "AI workout recommendations",
      "Custom meal plans",
      "Priority support",
      "Advanced analytics",
      "Video consultations"
    ]
  },
  {
    name: "Elite",
    price: "$19.99",
    description: "For serious athletes and professionals",
    features: [
      "All Pro features",
      "1-on-1 coaching",
      "Personalized training plans",
      "Nutrition consultation",
      "Goal tracking",
      "Premium content access",
      "24/7 priority support"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the plan that best fits your fitness journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier) => (
            <div key={tier.name} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">{tier.name}</h2>
                <div className="text-4xl font-bold text-gym-primary mb-4">
                  {tier.price}
                  {tier.price !== "Free" && <span className="text-base text-gray-600 dark:text-gray-400">/month</span>}
                </div>
                <p className="text-gray-600 dark:text-gray-400">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-gym-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/auth?mode=signup" className="mt-auto">
                <Button className="w-full gym-button-primary">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Plan?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We offer custom solutions for gyms, trainers, and organizations.
            Contact us to discuss your specific needs.
          </p>
          <Link to="/contact">
            <Button variant="outline" className="gym-button-outline">
              Contact Sales
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}