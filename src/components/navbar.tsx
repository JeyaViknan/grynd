
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Dumbbell } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { useUser } from "@/contexts/user-context";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useUser();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
    toggleMenu();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and nav links */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-gym-primary" />
              <span className="text-3xl font-bebas tracking-wider text-gym-primary">
                GRYND
              </span>
            </Link>
            
            {/* Desktop nav links */}
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link to="/" className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-gym-primary dark:hover:text-gym-secondary font-medium">
                  Home
                </Link>
                {user && (
                  <Link to="/dashboard" className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-gym-primary dark:hover:text-gym-secondary font-medium">
                    Dashboard
                  </Link>
                )}
                <Link to="/programs" className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-gym-primary dark:hover:text-gym-secondary font-medium">
                  Programs
                </Link>
                <Link to="/trainers" className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-gym-primary dark:hover:text-gym-secondary font-medium">
                  Trainers
                </Link>
              </div>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            
            <div className="hidden md:flex space-x-3">
              {user ? (
                <Button 
                  variant="outline" 
                  className="gym-button-outline"
                  onClick={handleSignOut}
                >
                  Sign out
                </Button>
              ) : (
                <>
                  <Link to="/auth?mode=login">
                    <Button variant="outline" className="gym-button-outline">
                      Login
                    </Button>
                  </Link>
                  <Link to="/auth?mode=signup">
                    <Button className="gym-button-primary">
                      Sign up
                    </Button>
                  </Link>
                </>
              )}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Open menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white dark:bg-gray-900 shadow-lg animate-fade-in ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={toggleMenu}
          >
            Home
          </Link>
          {user && (
            <Link 
              to="/dashboard" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
          )}
          <Link 
            to="/programs" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={toggleMenu}
          >
            Programs
          </Link>
          <Link 
            to="/trainers" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={toggleMenu}
          >
            Trainers
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
          <div className="px-5 flex flex-col space-y-3">
            {user ? (
              <Button 
                variant="outline" 
                className="w-full"
                onClick={handleSignOut}
              >
                Sign out
              </Button>
            ) : (
              <>
                <Link 
                  to="/auth?mode=login" 
                  className="block w-full text-center px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link 
                  to="/auth?mode=signup" 
                  className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-gym-primary hover:bg-gym-primary/90 rounded-md"
                  onClick={toggleMenu}
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
