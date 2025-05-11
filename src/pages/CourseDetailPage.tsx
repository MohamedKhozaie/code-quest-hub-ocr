
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import ChapterList from "@/components/courses/ChapterList";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
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

  // Calculate if all chapters are completed
  const allChaptersCompleted = course?.chapters?.every((chapter: any) => chapter.isCompleted) || false;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container px-4 mx-auto py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-end mb-4">
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
            >
              {language === "en" ? "العربية" : "English"}
            </Button>
          </div>
          
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
          ) : course ? (
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">{course.title[language]}</h1>
                <Badge variant="outline" className="bg-learning-card mb-4">
                  {course.category[language]}
                </Badge>
                <div className="aspect-video w-full overflow-hidden rounded-xl mb-6">
                  <img
                    src={course.image}
                    alt={course.imagePlaceholder[language]}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600">{course.detailedDescription[language]}</p>
              </div>

              <div className="border-t border-learning-border pt-8">
                <ChapterList
                  language={language}
                  courseId={course.id}
                  chapters={course.chapters}
                  allCompleted={allChaptersCompleted}
                />
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-800">
                {language === "en" ? "Course not found" : "لم يتم العثور على الدورة"}
              </h2>
              <p className="text-gray-600 mt-2">
                {language === "en" 
                  ? "The course you're looking for doesn't exist." 
                  : "الدورة التي تبحث عنها غير موجودة."}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CourseDetailPage;
