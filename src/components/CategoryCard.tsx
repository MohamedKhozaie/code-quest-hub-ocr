
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  className?: string;
}

const CategoryCard = ({
  title,
  description,
  icon: Icon,
  href,
  className,
}: CategoryCardProps) => {
  return (
    <Link to={href}>
      <div 
        className={cn(
          "bg-white p-6 rounded-xl border border-learning-border",
          "hover:border-learning-primary transition-all card-hover-effect",
          className
        )}
      >
        <div className="rounded-full w-12 h-12 blue-gradient flex items-center justify-center mb-4">
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="text-xl font-bold mb-2 text-learning-primary">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
