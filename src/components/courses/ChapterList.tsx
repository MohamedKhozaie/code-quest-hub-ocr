
import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chapter } from "@/data/coursesData";

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

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">
        {language === "en" ? "Chapters" : "الفصول"}
      </h2>
      
      <div className="space-y-4">
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            className="border border-learning-border rounded-lg overflow-hidden"
          >
            <div 
              className="flex items-center justify-between p-4 cursor-pointer bg-learning-card"
              onClick={() => toggleExpand(chapter.id)}
            >
              <div className="flex items-center space-x-3">
                {chapter.isCompleted ? (
                  <CheckCircle2 className="text-learning-success h-5 w-5" />
                ) : (
                  <Circle className="text-gray-400 h-5 w-5" />
                )}
                <h3 className="font-semibold">{chapter.title[language]}</h3>
              </div>
            </div>
            
            {expandedId === chapter.id && (
              <div className="p-4 border-t border-learning-border">
                <div className="mb-4 space-y-2">
                  <p className="text-lg font-medium">{language === "en" ? "Lessons:" : "الدروس:"}</p>
                  <ul className="space-y-1 ml-5 list-disc text-gray-600">
                    {chapter.lessons.map((lesson) => (
                      <li key={lesson.id}>
                        {lesson.title[language]}
                        {lesson.hasQuiz && (
                          <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">
                            {language === "en" ? "Quiz" : "اختبار"}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to={`/courses/${courseId}/chapters/${chapter.id}`}>
                  <Button size="sm" className="blue-gradient">
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
        {allChaptersCompleted ? (
          <Link to={`/courses/${courseId}/final-exam`}>
            <Button className="w-full purple-gradient">
              {language === "en" ? "Start Final Exam" : "بدء الامتحان النهائي"}
            </Button>
          </Link>
        ) : (
          <Button disabled className="w-full bg-gray-300 text-gray-600">
            {language === "en" ? "Complete Chapters to Unlock" : "أكمل الفصول لفتح الامتحان"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ChapterList;
