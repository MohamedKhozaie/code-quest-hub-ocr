
import { useState } from "react";
import CourseCard from "./CourseCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Sample course data
const coursesData = [
  {
    id: "flutter-ui",
    title: "Flutter UI Mastery",
    description: "Learn to build beautiful mobile UIs with Flutter",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop",
    category: "Mobile Development",
    language: "English",
  },
  {
    id: "python-data-science",
    title: "Python for Data Science",
    description: "Master data analysis and visualization with Python",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
    category: "Data Science",
    language: "English",
  },
  {
    id: "javascript-fullstack",
    title: "JavaScript Full-Stack Development",
    description: "Build complete web applications with JavaScript",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
    category: "Web Development",
    language: "English",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    description: "Learn to protect systems and networks from digital attacks",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
    category: "Security",
    language: "English",
  },
  {
    id: "uiux-design",
    title: "UI/UX Design for Beginners",
    description: "Create user-centered designs for digital products",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
    category: "Design",
    language: "English",
  },
  {
    id: "machine-learning",
    title: "Machine Learning with Python",
    description: "Implement machine learning algorithms with Python",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
    category: "AI & ML",
    language: "English",
  },
];

const CourseList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredCourses = coursesData.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {filteredCourses.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No courses found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseList;
