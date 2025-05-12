import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CourseList from "@/components/courses/CourseList";
import CategoryFilter from "@/components/courses/CategoryFilter";
import { GraduationCap, BookOpen, Users, Trophy, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CoursesPage = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [language, setLanguage] = useState<"en" | "ar">("en");

  // Parse search params on component mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get("search");
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [location.search]);

  // Stats for the header section
  const stats = [
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      value: "50+",
      label: "Courses",
      description: "Comprehensive learning paths"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      value: "10,000+",
      label: "Students",
      description: "Active learners worldwide"
    },
    {
      icon: <Trophy className="h-6 w-6 text-primary" />,
      value: "95%",
      label: "Success Rate",
      description: "Course completion rate"
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      value: "1,000+",
      label: "Certifications",
      description: "Awarded to graduates"
    }
  ];

  const handleCategoryChange = (category: string) => {
    setCategoryFilter(category);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // The search functionality is handled by the CourseList component
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text">
            Explore Our Courses
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover a world of knowledge with our expertly crafted courses.
            Learn at your own pace and achieve your goals with our comprehensive learning paths.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:border-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Button
                type="submit"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full px-4 py-1 h-8 bg-primary text-white"
              >
                Search
              </Button>
            </form>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Browse by Category</h2>
          <CategoryFilter
            language={language}
            onCategoryChange={handleCategoryChange}
          />
        </Card>

        {/* Course List */}
        <div className="max-w-7xl mx-auto">
          <CourseList
            initialSearchQuery={searchQuery}
            initialCategoryFilter={categoryFilter}
            language={language}
            onLanguageChange={(lang) => setLanguage(lang)}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Code Quest Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CoursesPage;
