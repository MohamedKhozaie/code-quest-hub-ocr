import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import ProblemDetail from "@/components/problems/ProblemDetail";
import { Skeleton } from "@/components/ui/skeleton";

// Sample problems data
const problemsData = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]"
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]"
      }
    ]
  },
  "fizzbuzz": {
    id: "fizzbuzz",
    title: "FizzBuzz",
    description: "Write a function that takes an integer n and returns a string array answer (1-indexed) where:\n\n- answer[i] == \"FizzBuzz\" if i is divisible by 3 and 5.\n- answer[i] == \"Fizz\" if i is divisible by 3.\n- answer[i] == \"Buzz\" if i is divisible by 5.\n- answer[i] == i (as a string) if none of the above conditions are true.",
    examples: [
      {
        input: "n = 3",
        output: '["1","2","Fizz"]'
      },
      {
        input: "n = 5",
        output: '["1","2","Fizz","4","Buzz"]'
      },
      {
        input: "n = 15",
        output: '["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]'
      }
    ]
  },
  // Other problems would be defined here
};

const ProblemDetailPage = () => {
  const { problemId } = useParams<{ problemId: string }>();
  const [problem, setProblem] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulating API fetch
    const fetchProblem = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        if (problemId && problemsData[problemId]) {
          setProblem(problemsData[problemId]);
        } else {
          toast({
            variant: "destructive",
            title: "Problem not found",
            description: "The problem you're looking for doesn't exist.",
          });
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Failed to load problem",
          description: "Please try again later.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProblem();
  }, [problemId, toast]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container px-4 mx-auto py-8">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-48 w-full" />
            </div>
          ) : problem ? (
            <div className="bg-white rounded-lg border border-learning-border p-6">
              <ProblemDetail {...problem} />
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-800">Problem not found</h2>
              <p className="text-gray-600 mt-2">The problem you're looking for doesn't exist.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProblemDetailPage;
