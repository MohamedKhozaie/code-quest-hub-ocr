
import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import { Input } from "@/components/ui/input";
import { Search, Filter, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import coursesData from "@/data/coursesData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Convert the object to an array for easier filtering
const coursesArray = Object.values(coursesData);

// Get unique categories
const getUniqueCategories = (lang: "en" | "ar") => {
  const categories = coursesArray.map(course => course.category[lang]);
  return ["all", ...new Set(categories)];
};

const CourseList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [sortOption, setSortOption] = useState<string>("default");
  const [visibleItems, setVisibleItems] = useState<number>(6);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Toggle language function
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
    setCategoryFilter("all"); // Reset category filter when language changes
  };
  
  // Filter courses based on search query and category
  const filteredCourses = coursesArray.filter(
    (course) => {
      const matchesSearch = course.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.briefDescription[language].toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = categoryFilter === "all" || 
        course.category[language] === categoryFilter;
        
      return matchesSearch && matchesCategory;
    }
  );
  
  // Sort courses based on selected option
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch(sortOption) {
      case "title-asc":
        return a.title[language].localeCompare(b.title[language]);
      case "title-desc":
        return b.title[language].localeCompare(a.title[language]);
      case "newest":
        // Assuming there's a createdAt field, if not, we can simulate it with the ID
        return b.id.localeCompare(a.id);
      default:
        return 0;
    }
  });
  
  // Load more courses
  const handleLoadMore = () => {
    setVisibleItems(prevValue => prevValue + 6);
  };
  
  const categories = getUniqueCategories(language);
  const isRTL = language === "ar";
  const displayedCourses = sortedCourses.slice(0, visibleItems);
  
  return (
    <div className={`space-y-8 ${isRTL ? 'rtl' : ''}`}>
      <div className="bg-white p-6 rounded-xl border border-learning-border shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5`} />
            <Input
              type="text"
              placeholder={language === "en" ? "Search courses..." : "البحث عن الدورات..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={isRTL ? 'pr-10' : 'pl-10'}
            />
          </div>
          
          <div className="flex gap-2">
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder={language === "en" ? "Sort by" : "ترتيب حسب"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">{language === "en" ? "Default" : "الافتراضي"}</SelectItem>
                <SelectItem value="title-asc">{language === "en" ? "Title (A-Z)" : "العنوان (أ-ي)"}</SelectItem>
                <SelectItem value="title-desc">{language === "en" ? "Title (Z-A)" : "العنوان (ي-أ)"}</SelectItem>
                <SelectItem value="newest">{language === "en" ? "Newest" : "الأحدث"}</SelectItem>
              </SelectContent>
            </Select>
            
            <Button
              onClick={toggleLanguage}
              variant="outline"
              className="min-w-[100px]"
            >
              {language === "en" ? "العربية" : "English"}
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  onClick={() => setCategoryFilter(category)}
                >
                  {category === "all" ? (language === "en" ? "All Courses" : "كل الدورات") : category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <div className="text-sm text-gray-500">
              {language === "en" 
                ? `${filteredCourses.length} courses found` 
                : `تم العثور على ${filteredCourses.length} دورة`}
            </div>
          </div>
          
          <TabsContent value="all" className="mt-0">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="h-36 bg-gray-200 rounded-t-xl"></div>
                    <div className="p-5 border border-gray-200 border-t-0 rounded-b-xl space-y-3">
                      <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded"></div>
                        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                      </div>
                      <div className="flex justify-between">
                        <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                        <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredCourses.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-medium mb-2">
                  {language === "en" 
                    ? "No courses found" 
                    : "لم يتم العثور على دورات"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "en" 
                    ? "Try changing your search criteria" 
                    : "حاول تغيير معايير البحث"}
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayedCourses.map((course, index) => (
                    <div 
                      key={course.id} 
                      className="staggered-item staggered-item-visible"
                    >
                      <CourseCard 
                        id={course.id}
                        title={course.title[language]}
                        description={course.briefDescription[language]}
                        image={course.image}
                        category={course.category[language]}
                        language={course.language[language]}
                        progress={(Math.floor(Math.random() * 5) * 20)} // Simulating random progress
                        chaptersCount={course.chapters.length}
                        estimatedHours={Math.floor(Math.random() * 10) + 5} // Simulating random hours
                      />
                    </div>
                  ))}
                </div>
                
                {visibleItems < filteredCourses.length && (
                  <div className="mt-8 text-center">
                    <Button 
                      onClick={handleLoadMore}
                      variant="outline" 
                      className="button-hover-effect"
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      {language === "en" ? "Load More Courses" : "تحميل المزيد من الدورات"}
                    </Button>
                  </div>
                )}
              </>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseList;
