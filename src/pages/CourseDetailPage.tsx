
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import ChapterList from "@/components/courses/ChapterList";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, ArrowLeft, Users } from "lucide-react";
import coursesData from "@/data/coursesData";

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState<"en" | "ar">("en"); // Default to English
  const { toast } = useToast();

  useEffect(() => {
    // Simulating API fetch
    const fetchCourse = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        if (courseId && coursesData[courseId]) {
          setCourse(coursesData[courseId]);
        } else {
          toast({
            variant: "destructive",
            title: language === "en" ? "Course not found" : "لم يتم العثور على الدورة",
            description: language === "en" 
              ? "The course you're looking for doesn't exist." 
              : "الدورة التي تبحث عنها غير موجودة.",
          });
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: language === "en" ? "Failed to load course" : "فشل تحميل الدورة",
          description: language === "en" ? "Please try again later." : "يرجى المحاولة مرة أخرى لاحقًا.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId, toast, language]);

  // Toggle language function
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  // Calculate progress
  const calculateProgress = () => {
    if (!course?.chapters) return 0;
    const completedChapters = course.chapters.filter((chapter: any) => chapter.isCompleted).length;
    return Math.round((completedChapters / course.chapters.length) * 100);
  };

  const progress = course ? calculateProgress() : 0;
  const isRTL = language === "ar";

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <Navbar />
      
      <main className="container px-4 mx-auto py-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button and language toggle */}
          <div className="flex justify-between items-center mb-4">
            <Link to="/courses" className="flex items-center text-learning-primary hover:underline">
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>{language === "en" ? "Back to Courses" : "العودة إلى الدورات"}</span>
            </Link>
            
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
            >
              {language === "en" ? "العربية" : "English"}
            </Button>
          </div>
          
          {loading ? (
            <div className="space-y-4 animate-pulse">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-1/4 mb-4" />
              <Skeleton className="h-64 w-full rounded-xl" />
              <Skeleton className="h-32 w-full rounded-lg" />
            </div>
          ) : course ? (
            <div className="animate-fade-in">
              {/* Course header */}
              <div className="bg-white border border-learning-border rounded-xl shadow-sm mb-6 overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.imagePlaceholder[language]}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">{course.title[language]}</h1>
                  
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge variant="outline" className="bg-learning-card">
                      {course.category[language]}
                    </Badge>
                    <Badge variant="outline" className="bg-learning-card">
                      {course.language[language]}
                    </Badge>
                  </div>
                  
                  {/* Course stats */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1 text-learning-primary" />
                      <span>{course.chapters.length} {language === "en" ? "Chapters" : "فصول"}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-learning-primary" />
                      <span>{Math.floor(Math.random() * 10) + 5} {language === "en" ? "Hours" : "ساعات"}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-learning-primary" />
                      <span>{Math.floor(Math.random() * 1000) + 100} {language === "en" ? "Students" : "طالب"}</span>
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>{language === "en" ? "Your Progress" : "تقدمك"}</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                  
                  <p className="text-gray-700">{course.detailedDescription[language]}</p>
                </div>
              </div>

              {/* What you'll learn section */}
              <div className="bg-white border border-learning-border rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">
                  {language === "en" ? "What You'll Learn" : "ماذا ستتعلم"}
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">
                        {language === "en" 
                          ? `Key learning outcome ${item} for this course` 
                          : `نتيجة التعلم الرئيسية ${item} لهذه الدورة`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Course content */}
              <div className="bg-white border border-learning-border rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">
                  {language === "en" ? "Course Content" : "محتوى الدورة"}
                </h2>
                
                <ChapterList
                  language={language}
                  courseId={course.id}
                  chapters={course.chapters}
                  allCompleted={progress === 100}
                />
              </div>
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-learning-border">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {language === "en" ? "Course not found" : "لم يتم العثور على الدورة"}
              </h2>
              <p className="text-gray-600 mb-6">
                {language === "en" 
                  ? "The course you're looking for doesn't exist." 
                  : "الدورة التي تبحث عنها غير موجودة."}
              </p>
              <Button asChild>
                <Link to="/courses">
                  {language === "en" ? "Browse Courses" : "تصفح الدورات"}
                </Link>
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CourseDetailPage;
