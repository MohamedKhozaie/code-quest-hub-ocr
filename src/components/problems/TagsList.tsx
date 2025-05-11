
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Database,
  Code2,
  GitBranch,
  Layers,
  BrainCircuit,
  Search,
  Network,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const tags = [
  {
    id: "data-structures",
    name: "Data Structures",
    description: "Arrays, linked lists, trees, graphs, etc.",
    icon: Database,
    count: 25,
  },
  {
    id: "programming-fundamentals",
    name: "Programming Fundamentals",
    description: "Basic programming concepts and syntax.",
    icon: Code2,
    count: 42,
  },
  {
    id: "algorithms",
    name: "Algorithms",
    description: "Sorting, searching, dynamic programming, etc.",
    icon: GitBranch,
    count: 38,
  },
  {
    id: "object-oriented-programming",
    name: "Object-Oriented Programming",
    description: "Classes, inheritance, polymorphism, etc.",
    icon: Layers,
    count: 15,
  },
  {
    id: "problem-solving",
    name: "Problem Solving",
    description: "General problem-solving techniques.",
    icon: BrainCircuit,
    count: 30,
  },
  {
    id: "networks",
    name: "Networks",
    description: "Network protocols, architecture, and security.",
    icon: Network,
    count: 12,
  },
];

const TagsList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredTags = tags.filter((tag) =>
    tag.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tag.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="Search tags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {filteredTags.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No tags found matching your search.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredTags.map((tag) => {
            const Icon = tag.icon;
            return (
              <Link to={`/problems?tag=${tag.id}`} key={tag.id}>
                <div 
                  className={cn(
                    "flex items-start p-4 rounded-lg border border-learning-border bg-white",
                    "hover:border-learning-primary transition-all card-hover-effect"
                  )}
                >
                  <div className="blue-gradient p-3 rounded-md mr-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-learning-primary">{tag.name}</h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {tag.count} problems
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{tag.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TagsList;
