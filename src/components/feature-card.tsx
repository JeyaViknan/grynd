
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={`glass-card p-6 transition-all duration-300 hover:shadow-xl ${className}`}>
      <div className="w-12 h-12 rounded-full bg-gym-primary/10 dark:bg-gym-primary/20 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-gym-primary dark:text-gym-secondary" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
