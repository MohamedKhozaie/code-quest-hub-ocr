
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProblemCard from "@/components/problems/ProblemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Filter, Search, Hash, List } from "lucide-react";
import { Input } from "@/components/ui/input";
import TagsList from "@/components/problems/TagsList";

// Sample problems data
const problemsData = [
  {
    id: "two-sum",
    title: "Two Sum",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    difficulty: "Level 1",
    tags: ["arrays", "algorithms"],
  },
  {
    id: "palindrome-checker",
    title: "Palindrome Checker",
    description: "Write a function to check if a string is a palindrome (reads the same backward as forward).",
    difficulty: "Level 1",
    tags: ["strings", "algorithms"],
    isSolved: true,
  },
  {
    id: "fizzbuzz",
    title: "FizzBuzz",
    description: "Print numbers from 1 to n. For multiples of 3, print 'Fizz', for multiples of 5, print 'Buzz', and for multiples of both, print 'FizzBuzz'.",
    difficulty: "Level 1",
    tags: ["programming-fundamentals"],
  },
  {
    id: "binary-search",
    title: "Binary Search",
    description: "Implement binary search algorithm to find an element in a sorted array.",
    difficulty: "Level 2",
    tags: ["algorithms", "searching"],
  },
  {
    id: "linked-list-cycle",
    title: "Linked List Cycle",
    description: "Determine if a linked list has a cycle in it.",
    difficulty: "Level 2",
    tags: ["data-structures", "linked-lists"],
  },
  {
    id: "merge-sort",
    title: "Merge Sort",
    description: "Implement the merge sort algorithm to sort an array.",
    difficulty: "Level 2",
    tags: ["algorithms", "sorting"],
    isSolved: true,
  },
  {
    id: "tree-traversal",
    title: "Tree Traversal",
    description: "Implement pre-order, in-order, and post-order traversal of a binary tree.",
    difficulty: "Level 3",
    tags: ["data-structures", "trees", "recursion"],
  },
  {
    id: "dynamic-programming",
    title: "Knapsack Problem",
    description: "Solve the 0/1 knapsack problem using dynamic programming.",
    difficulty: "Level 3",
    tags: ["algorithms", "dynamic-programming"],
  },
];

const ProblemsPage = () => {
  const [searchParams] = useSearchParams();
  const tagFilter = searchParams.get("tag");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState(tagFilter ? "problems" : "tags");
  
  const filteredProblems = problemsData.filter(
    (problem) =>
      (tagFilter ? problem.tags.includes(tagFilter) : true) &&
      (
        problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        problem.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container px-4 mx-auto py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Problem Solving</h1>
            {tagFilter && (
              <Badge variant="outline" className="bg-learning-card">
                Filter: {tagFilter}
                <Link to="/problems" className="ml-2 text-gray-500 hover:text-gray-700">
                  ×
                </Link>
              </Badge>
            )}
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tags" className="flex items-center">
                <Hash className="mr-2 h-4 w-4" />
                Tags
              </TabsTrigger>
              <TabsTrigger value="problems" className="flex items-center">
                <List className="mr-2 h-4 w-4" />
                Problems
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tags">
              <TagsList />
            </TabsContent>

            <TabsContent value="problems">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search problems..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {filteredProblems.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No problems found matching your search.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredProblems.map((problem) => (
                    <ProblemCard
                      key={problem.id}
                      id={problem.id}
                      title={problem.title}
                      description={problem.description}
                      difficulty={problem.difficulty as any}
                      isSolved={problem.isSolved}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default ProblemsPage;
