
import { Link } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex flex-col items-center">
      <Link to="/" className="flex items-center space-x-2 mb-8">
        <div className="w-8 h-8 blue-gradient rounded-md flex items-center justify-center">
          <span className="font-bold text-xl text-white">L</span>
        </div>
        <span className="font-bold text-xl text-learning-primary">Learning Hub</span>
      </Link>
      
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-8 border border-learning-border">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
