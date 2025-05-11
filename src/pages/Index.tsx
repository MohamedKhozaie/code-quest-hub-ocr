
import {
  BookOpen,
  Code,
  Database,
  BrainCircuit,
  Shield,
  Laptop,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import CategoryCard from "@/components/CategoryCard";

const categories = [
  {
    title: "Computer Basics",
    description: "Learn hardware and software fundamentals",
    icon: Laptop,
    href: "/categories/computer-basics",
  },
  {
    title: "Programming",
    description: "Learn Python, Java, C++ and more",
    icon: Code,
    href: "/courses?category=programming",
  },
  {
    title: "Skill Development",
    description: "Enhance your critical thinking abilities",
    icon: BrainCircuit,
    href: "/categories/skill-development",
  },
  {
    title: "Problem Solving",
    description: "Practice algorithms and coding challenges",
    icon: Code,
    href: "/problems",
  },
  {
    title: "Data Structures",
    description: "Master core computer science concepts",
    icon: Database,
    href: "/categories/data-structures",
  },
  {
    title: "Cyber Security",
    description: "Learn techniques to protect computer systems",
    icon: Shield,
    href: "/courses?category=cyber-security",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container px-4 mx-auto py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-blue">
                Learning Hub
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              What would you like to learn today?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
                href={category.href}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
