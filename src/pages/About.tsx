import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Trophy, Clock } from "lucide-react";
import { Navbar } from "@/components/navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            About <span className="text-gym-primary">GRYND</span>
          </h1>
          
          <div className="prose prose-lg dark:prose-invert mx-auto mb-12">
            <p className="lead text-xl text-gray-600 dark:text-gray-400 text-center mb-12">
              We're on a mission to transform the way people approach fitness and wellness,
              making it more accessible, personalized, and effective than ever before.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
                <Users className="w-12 h-12 text-gym-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Community First</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Built by fitness enthusiasts for fitness enthusiasts
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
                <Trophy className="w-12 h-12 text-gym-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Professional trainers and AI-powered recommendations
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
                <Clock className="w-12 h-12 text-gym-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Always here to help you achieve your fitness goals
                </p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <p className="mb-4">
                Founded in 2023, GRYND emerged from a simple yet powerful idea: everyone deserves
                access to professional-quality fitness guidance. We combined cutting-edge AI
                technology with expert human knowledge to create a platform that adapts to each
                user's unique journey.
              </p>
              <p>
                Today, we're proud to serve a growing community of fitness enthusiasts, helping
                them achieve their goals through personalized workout plans, expert guidance,
                and continuous support.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/auth?mode=signup">
              <Button className="gym-button-primary text-lg">
                Join Our Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}