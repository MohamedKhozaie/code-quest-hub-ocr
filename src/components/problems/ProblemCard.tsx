
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProblemCardProps {
  id: string;
  title: string;
  description: string;
  difficulty: "Level 1" | "Level 2" | "Level 3";
  isSolved?: boolean;
}

const ProblemCard = ({
  id,
  title,
  description,
  difficulty,
  isSolved,
}: ProblemCardProps) => {
  // Determine badge color based on difficulty
  const difficultyColor = {
    "Level 1": "bg-green-100 text-green-800 border-green-200",
    "Level 2": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Level 3": "bg-red-100 text-red-800 border-red-200",
  }[difficulty];

  return (
    <div className="border border-learning-border rounded-lg p-5 bg-white">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-lg text-learning-primary">{title}</h3>
        <Badge className={difficultyColor}>{difficulty}</Badge>
      </div>
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      <div className="flex justify-end">
        <Link to={`/problems/${id}`}>
          <Button 
            className={isSolved ? "bg-learning-success" : "blue-gradient"}
          >
            {isSolved ? "Review" : "Solve"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProblemCard;
