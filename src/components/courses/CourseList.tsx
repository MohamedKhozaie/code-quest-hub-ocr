
import { useState } from "react";
import CourseCard from "./CourseCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import coursesData from "@/data/coursesData";

// Convert the object to an array for easier filtering
const coursesArray = Object.values(coursesData);

const CourseList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState<"en" | "ar">("en"); // Default to English
  
  const filteredCourses = coursesArray.filter(
    (course) =>
      course.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.briefDescription[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category[language].toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Toggle language function
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder={language === "en" ? "Search courses..." : "البحث عن الدورات..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button
          onClick={toggleLanguage}
          variant="outline"
          className="min-w-[100px]"
        >
          {language === "en" ? "العربية" : "English"}
        </Button>
      </div>

      {filteredCourses.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground">
            {language === "en" 
              ? "No courses found matching your search." 
              : "لم يتم العثور على دورات تطابق بحثك."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard 
              key={course.id}
              id={course.id}
              title={course.title[language]}
              description={course.briefDescription[language]}
              image={course.image}
              category={course.category[language]}
              language={course.language[language]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseList;
