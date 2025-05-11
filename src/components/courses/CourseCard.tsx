
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  language: string;
  progress?: number;
  chaptersCount?: number;
  estimatedHours?: number;
}

const CourseCard = ({
  id,
  title,
  description,
  image,
  category,
  language,
  progress = 0,
  chaptersCount = 0,
  estimatedHours = 0
}: CourseCardProps) => {
  return (
    <Link to={`/courses/${id}`} className="block h-full group">
      <div className="enhanced-card h-full flex flex-col bg-white rounded-xl shadow-sm border border-learning-border overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]">
        <div className="h-40 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-bold text-lg mb-2 text-learning-primary line-clamp-1">{title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">{description}</p>
          
          {progress > 0 && (
            <div className="mb-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-1" />
            </div>
          )}
          
          <div className="flex flex-wrap items-center justify-between gap-2 mt-auto">
            <Badge variant="outline" className="bg-gradient-blue text-white">
              {category}
            </Badge>
            
            <div className="flex items-center gap-3">
              {chaptersCount > 0 && (
                <div className="flex items-center text-xs text-gray-500">
                  <BookOpen className="h-3 w-3 mr-1" />
                  <span>{chaptersCount}</span>
                </div>
              )}
              
              {estimatedHours > 0 && (
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{estimatedHours}h</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
