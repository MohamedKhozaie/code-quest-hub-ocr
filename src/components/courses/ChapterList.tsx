
import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Chapter {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface ChapterListProps {
  courseId: string;
  chapters: Chapter[];
  allCompleted: boolean;
}

const ChapterList = ({
  courseId,
  chapters,
  allCompleted,
}: ChapterListProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Chapters</h2>
      
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
                <h3 className="font-semibold">{chapter.title}</h3>
              </div>
            </div>
            
            {expandedId === chapter.id && (
              <div className="p-4 border-t border-learning-border">
                <p className="text-gray-600 mb-4">{chapter.description}</p>
                <Link to={`/courses/${courseId}/chapters/${chapter.id}`}>
                  <Button size="sm" className="blue-gradient">
                    {chapter.isCompleted ? "Review Chapter" : "Start Chapter"}
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
            <Button className="w-full purple-gradient">Start Final Exam</Button>
          </Link>
        ) : (
          <Button disabled className="w-full bg-gray-300 text-gray-600">
            Complete Chapters to Unlock
          </Button>
        )}
      </div>
    </div>
  );
};

export default ChapterList;
