
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  language: string;
}

const CourseCard = ({
  id,
  title,
  description,
  image,
  category,
  language,
}: CourseCardProps) => {
  return (
    <Link to={`/courses/${id}`}>
      <div className="bg-white rounded-xl border border-learning-border overflow-hidden card-hover-effect">
        <div className="h-36 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5">
          <h3 className="font-bold text-lg mb-2 text-learning-primary">{title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="bg-learning-card">
              {category}
            </Badge>
            <span className="text-xs text-gray-500">{language}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
