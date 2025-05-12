import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import coursesData from "@/data/coursesData";

// Convert the object to an array for easier filtering
const coursesArray = Object.values(coursesData);

// Get unique categories
const getUniqueCategories = (lang: "en" | "ar") => {
    const categories = coursesArray.map(course => course.category[lang]);
    return ["all", ...new Set(categories)];
};

interface CategoryFilterProps {
    language: "en" | "ar";
    onCategoryChange: (category: string) => void;
    className?: string;
}

const CategoryFilter = ({ language, onCategoryChange, className }: CategoryFilterProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeCategory, setActiveCategory] = useState<string>("all");

    // Parse the category from URL on component mount
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const categoryParam = params.get("category");

        if (categoryParam) {
            setActiveCategory(categoryParam);
            onCategoryChange(categoryParam);
        } else {
            setActiveCategory("all");
            onCategoryChange("all");
        }
    }, [location.search, onCategoryChange]);

    const categories = getUniqueCategories(language);

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
        onCategoryChange(category);

        // Update the URL with the selected category
        const params = new URLSearchParams(location.search);

        if (category === "all") {
            params.delete("category");
        } else {
            params.set("category", category);
        }

        navigate({
            pathname: location.pathname,
            search: params.toString()
        });
    };

    return (
        <div className={cn("flex flex-wrap gap-2", className)}>
            {categories.map((category) => (
                <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleCategoryClick(category)}
                    className={cn(
                        "transition-all duration-300",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"
                    )}
                >
                    {category === "all"
                        ? (language === "en" ? "All Courses" : "كل الدورات")
                        : category}
                    {category !== "all" && (
                        <Badge
                            variant="secondary"
                            className={cn(
                                "ml-2 bg-white/20",
                                activeCategory === category ? "text-white" : "text-muted-foreground"
                            )}
                        >
                            {coursesArray.filter(course => course.category[language] === category).length}
                        </Badge>
                    )}
                </Button>
            ))}
        </div>
    );
};

export default CategoryFilter; 