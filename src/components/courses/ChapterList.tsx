
import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Circle, ChevronDown, ChevronUp, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chapter } from "@/data/coursesData";
import { Progress } from "@/components/ui/progress";

interface ChapterListProps {
  courseId: string;
  chapters: Chapter[];
  allCompleted: boolean;
  language: "en" | "ar";
}

const ChapterList = ({
  courseId,
  chapters,
  allCompleted,
  language
}: ChapterListProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Calculate course progress
  const completedChapters = chapters.filter(chapter => chapter.isCompleted).length;
  const progressPercentage = chapters.length > 0 ? Math.round((completedChapters / chapters.length) * 100) : 0;

  const isRTL = language === "ar";

  return (
    <div className="space-y-6">
      {/* Course Progress Indicator */}
      <div className="mb-6 bg-white p-4 rounded-lg border border-learning-border shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-medium">
            {language === "en" ? "Course Progress" : "تقدم الدورة"}
          </h3>
          <span className="text-lg font-semibold text-learning-primary">
            {progressPercentage}%
          </span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
        <div className="mt-2 text-sm text-gray-500">
          {language === "en" 
            ? `${completedChapters} of ${chapters.length} chapters completed` 
            : `${completedChapters} من ${chapters.length} فصول مكتملة`}
        </div>
      </div>

      <h2 className="text-xl font-bold flex items-center">
        <BookOpen className={`${isRTL ? 'ml-2' : 'mr-2'} h-5 w-5 text-learning-primary`} />
        {language === "en" ? "Chapters" : "الفصول"}
      </h2>
      
      <div className="space-y-4">
        {chapters.map((chapter, index) => (
          <div
            key={chapter.id}
            className="enhanced-card"
          >
            <div 
              className={`flex items-center justify-between p-4 cursor-pointer hover:bg-learning-card transition-colors ${chapter.isCompleted ? 'bg-blue-50' : 'bg-white'}`}
              onClick={() => toggleExpand(chapter.id)}
            >
              <div className="flex items-center space-x-3" style={isRTL ? {flexDirection: 'row-reverse', gap: '0.75rem'} : {}}>
                {chapter.isCompleted ? (
                  <CheckCircle2 className="text-learning-success h-5 w-5" />
                ) : (
                  <Clock className="text-learning-warning h-5 w-5" />
                )}
                <div>
                  <h3 className="font-semibold">{chapter.title[language]}</h3>
                  <p className="text-sm text-gray-500">
                    {language === "en" 
                      ? `${chapter.lessons.length} lessons` 
                      : `${chapter.lessons.length} دروس`}
                  </p>
                </div>
              </div>
              
              {expandedId === chapter.id ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </div>
            
            {expandedId === chapter.id && (
              <div className="p-4 border-t border-learning-border animate-fade-in">
                <div className="mb-4 space-y-2">
                  <p className="text-lg font-medium">{language === "en" ? "Lessons:" : "الدروس:"}</p>
                  <ul className="space-y-3">
                    {chapter.lessons.map((lesson, lessonIndex) => (
                      <li key={lesson.id} className="bg-gray-50 p-3 rounded-md hover:bg-gray-100 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center" style={isRTL ? {flexDirection: 'row-reverse', gap: '0.75rem'} : {gap: '0.75rem'}}>
                            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-learning-primary text-white text-xs">
                              {lessonIndex + 1}
                            </span>
                            <span>{lesson.title[language]}</span>
                          </div>
                          {lesson.hasQuiz && (
                            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">
                              {language === "en" ? "Quiz" : "اختبار"}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to={`/courses/${courseId}/chapters/${chapter.id}`}>
                  <Button 
                    size="sm" 
                    className={`blue-gradient button-hover-effect w-full md:w-auto ${isRTL ? 'rtl' : ''}`}
                  >
                    {chapter.isCompleted ? 
                      (language === "en" ? "Review Chapter" : "مراجعة الفصل") : 
                      (language === "en" ? "Start Chapter" : "بدء الفصل")}
                  </Button>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="pt-4">
        {allCompleted ? (
          <Link to={`/courses/${courseId}/final-exam`}>
            <Button 
              className={`w-full purple-gradient button-hover-effect shadow-md ${isRTL ? 'rtl' : ''}`}
            >
              {language === "en" 
                ? "Start Final Exam" 
                : "بدء الامتحان النهائي"}
            </Button>
          </Link>
        ) : (
          <div className="space-y-3">
            <Button 
              disabled 
              className="w-full bg-gray-300 text-gray-600"
            >
              {language === "en" ? "Complete Chapters to Unlock" : "أكمل الفصول لفتح الامتحان"}
            </Button>
            <div className="text-sm text-center text-gray-500">
              {language === "en" 
                ? `Complete all chapters to unlock the final exam (${progressPercentage}% completed)` 
                : `أكمل جميع الفصول لفتح الامتحان النهائي (${progressPercentage}٪ مكتملة)`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChapterList;
