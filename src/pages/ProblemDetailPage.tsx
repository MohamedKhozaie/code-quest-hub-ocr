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
    difficulty: "Easy",
    description: "Write a function that takes an integer n and returns a string array answer (1-indexed) where:\n\n- answer[i] == \"FizzBuzz\" if i is divisible by 3 and 5.\n- answer[i] == \"Fizz\" if i is divisible by 3.\n- answer[i] == \"Buzz\" if i is divisible by 5.\n- answer[i] == i (as a string) if none of the above conditions are true.\n\nThis is a classic programming problem used in interviews to test basic programming skills. It's important to handle edge cases and optimize your solution for readability.",
    examples: [
      {
        input: "n = 3",
        output: '["1","2","Fizz"]',
        explanation: "For n = 3: First element is 1 (as string), second is 2 (as string), third is \"Fizz\" because 3 is divisible by 3."
      },
      {
        input: "n = 5",
        output: '["1","2","Fizz","4","Buzz"]',
        explanation: "For n = 5: Fifth element is \"Buzz\" because 5 is divisible by 5."
      },
      {
        input: "n = 15",
        output: '["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]',
        explanation: "For n = 15: Fifteenth element is \"FizzBuzz\" because 15 is divisible by both 3 and 5."
      }
    ],
    constraints: "1 <= n <= 10^4",
    hints: [
      "Consider using a loop to iterate from 1 to n",
      "Use the modulo operator (%) to check for divisibility",
      "Check for the FizzBuzz case first, then Fizz, then Buzz"
    ],
    sampleSolution: `function fizzBuzz(n) {
  const result = [];
  
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }
  
  return result;
}`,
    testCases: [
      { input: 1, expected: ["1"] },
      { input: 3, expected: ["1", "2", "Fizz"] },
      { input: 5, expected: ["1", "2", "Fizz", "4", "Buzz"] },
      { input: 15, expected: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"] }
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
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
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
