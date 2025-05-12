import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Users, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

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
  // Generate random rating for demo purposes
  const rating = (Math.floor(Math.random() * 10) + 35) / 10; // Random rating between 3.5 and 4.5
  const studentsCount = Math.floor(Math.random() * 900) + 100; // Random number between 100 and 1000

  return (
    <Link to={`/courses/${id}`} className="block h-full group">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <Badge
            variant="secondary"
            className="absolute top-4 right-4 z-20 bg-white/90 text-primary font-medium"
          >
            {category}
          </Badge>
        </div>

        <CardHeader className="flex-grow space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 font-medium">{rating.toFixed(1)}</span>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{studentsCount}</span>
            </div>
          </div>

          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </CardHeader>

        <CardContent>
          {progress > 0 && (
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
        </CardContent>

        <CardFooter className="border-t pt-4">
          <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-1" />
              <span>{chaptersCount} chapters</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{estimatedHours}h</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CourseCard;
