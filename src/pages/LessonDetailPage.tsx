
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, FileText, Book, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import coursesData from "@/data/coursesData";

const LessonDetailPage = () => {
  const { courseId, chapterId, lessonId } = useParams<{ courseId: string; chapterId: string; lessonId: string }>();
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const { toast } = useToast();
  
  // Mock data for the lesson content - replace with real data fetching
  const course = courseId ? coursesData[courseId] : null;
  const chapter = course?.chapters?.find((c: any) => c.id === chapterId);
  const lesson = chapter?.lessons?.find((l: any) => l.id === lessonId);
  
  const isRTL = language === "ar";
  
  // Handle marking lesson as complete
  const handleCompleteLesson = () => {
    // In a real app, make API call to mark lesson as complete
    toast({
      title: language === "en" ? "Lesson completed!" : "تم إكمال الدرس!",
      description: language === "en" ? "Moving to the next lesson." : "الانتقال إلى الدرس التالي."
    });
  };
  
  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };
  
  // Get next lesson
  const getNextLesson = () => {
    if (!chapter?.lessons) return null;
    const currentIndex = chapter.lessons.findIndex((l: any) => l.id === lessonId);
    return chapter.lessons[currentIndex + 1] || null;
  };
  
  const nextLesson = getNextLesson();
  
  if (!course || !chapter || !lesson) {
    return (
      <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
        <Navbar />
        <main className="container px-4 mx-auto py-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {language === "en" ? "Lesson not found" : "لم يتم العثور على الدرس"}
            </h2>
            <p className="text-gray-600 mb-6">
              {language === "en" ? "The lesson you're looking for doesn't exist." : "الدرس الذي تبحث عنه غير موجود."}
            </p>
            <Button asChild>
              <Link to={`/courses/${courseId}`}>
                {language === "en" ? "Back to Course" : "العودة إلى الدورة"}
              </Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }
  
  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <Navbar />
      
      <main className="container px-4 mx-auto py-6">
        <div className="max-w-4xl mx-auto">
          {/* Top navigation */}
          <div className="flex justify-between items-center mb-4">
            <Link to={`/courses/${courseId}`} className="flex items-center text-learning-primary">
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>{language === "en" ? "Back to Course" : "العودة إلى الدورة"}</span>
            </Link>
            
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
            >
              {language === "en" ? "العربية" : "English"}
            </Button>
          </div>
          
          {/* Lesson content */}
          <div className="bg-white border border-learning-border rounded-xl shadow-sm overflow-hidden">
            <div className="bg-blue-500 text-white py-4 px-6">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <h1 className="text-xl font-bold">{language === "en" ? "Lesson Details" : "تفاصيل الدرس"}</h1>
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{lesson.title[language]}</h2>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <Book className="h-4 w-4 mr-1" />
                <span>{chapter.title[language]}</span>
              </div>
              
              <div className="prose max-w-full mb-6">
                <div className="bg-gray-100 rounded-lg p-4 mb-6">
                  <pre className="text-sm overflow-x-auto">
                    <code className="language-python">
                      # Example code
                      import numpy as np
                      import pandas as pd
                      
                      # Load data
                      data = pd.read_csv('data.csv')
                      print(data.head())
                    </code>
                  </pre>
                </div>
                
                <p>{lesson.briefDescription[language]}</p>
                
                <p>
                  {language === "en" 
                    ? "This lesson covers the fundamentals of the topic. You'll learn the key concepts and practical applications."
                    : "يغطي هذا الدرس أساسيات الموضوع. ستتعلم المفاهيم الأساسية والتطبيقات العملية."}
                </p>
                
                <h3 className="text-lg font-semibold mt-4">
                  {language === "en" ? "Key Points" : "النقاط الرئيسية"}
                </h3>
                <ul>
                  <li>{language === "en" ? "Understanding the core concepts" : "فهم المفاهيم الأساسية"}</li>
                  <li>{language === "en" ? "Practical implementation steps" : "خطوات التنفيذ العملي"}</li>
                  <li>{language === "en" ? "Common challenges and solutions" : "التحديات الشائعة والحلول"}</li>
                </ul>
                
                <div className="border-t border-gray-200 my-6 pt-6">
                  <p className="text-gray-700">
                    {language === "en" 
                      ? "With these steps, you are ready to continue your learning journey!"
                      : "بهذه الخطوات، أنت مستعد لمواصلة رحلة التعلم!"}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                {lesson.quizAssociated ? (
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <Link to={`/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}/quiz`}>
                      <FileText className="mr-2 h-4 w-4" />
                      {language === "en" ? "Go to Quiz" : "انتقل إلى الاختبار"}
                    </Link>
                  </Button>
                ) : nextLesson ? (
                  <Button asChild onClick={handleCompleteLesson}>
                    <Link to={`/courses/${courseId}/chapters/${chapterId}/lessons/${nextLesson.id}`}>
                      {language === "en" ? "Next Lesson" : "الدرس التالي"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button asChild onClick={handleCompleteLesson} className="bg-blue-600 hover:bg-blue-700">
                    <Link to={`/courses/${courseId}`}>
                      {language === "en" ? "Complete Chapter" : "إكمال الفصل"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LessonDetailPage;
