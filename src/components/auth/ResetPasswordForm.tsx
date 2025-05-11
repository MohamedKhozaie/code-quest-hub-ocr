
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // In a real app, this would call an API
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast({
        title: "Reset link sent!",
        description: "Check your email for instructions to reset your password.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Reset request failed",
        description: "Please check your email and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md mx-auto text-center space-y-6">
        <div className="w-16 h-16 success-gradient rounded-full mx-auto flex items-center justify-center">
          <RefreshCw className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold">Check Your Email</h1>
        <p className="text-muted-foreground">
          We've sent a password reset link to {email}. Follow the instructions to reset your password.
        </p>
        <div className="pt-4">
          <Link to="/login">
            <Button className="blue-gradient">Return to Login</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-col items-center space-y-4 text-center mb-8">
        <div className="w-16 h-16 blue-gradient rounded-full flex items-center justify-center">
          <RefreshCw className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold">Reset Password</h1>
        <p className="text-muted-foreground">
          Enter your email to reset your password
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full blue-gradient" 
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Reset Link"}
        </Button>

        <div className="text-center">
          <Link to="/login" className="text-learning-primary hover:underline text-sm">
            Return to Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
