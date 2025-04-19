
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "@/components/auth/login-form";
import { SignupForm } from "@/components/auth/signup-form";
import { Navbar } from "@/components/navbar";

const Auth = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "login";
  
  useEffect(() => {
    // If no mode is specified, default to login
    if (!searchParams.has("mode")) {
      setSearchParams({ mode: "login" });
    }
  }, [searchParams, setSearchParams]);
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-md mx-auto">
          <Tabs value={mode} onValueChange={(value) => setSearchParams({ mode: value })}>
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="mt-0">
              <div className="glass-card p-8">
                <LoginForm />
              </div>
            </TabsContent>
            
            <TabsContent value="signup" className="mt-0">
              <div className="glass-card p-8">
                <SignupForm />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Auth;
