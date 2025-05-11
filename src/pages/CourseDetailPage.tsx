import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import ChapterList from "@/components/courses/ChapterList";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

// Sample course data
const coursesData = {
  "python-data-science": {
    id: "python-data-science",
    title: "Python for Data Science",
    description: "Master data analysis, visualization, and machine learning with Python. This comprehensive course covers everything from basic Python syntax to advanced data science techniques.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
    category: "Data Science",
    language: "English",
    chapters: [
      {
        id: "chapter-1",
        title: "Introduction to Data Science with Python",
        description: "Learn the basics of data science and why Python is the preferred programming language for this field.",
        isCompleted: true,
      },
      {
        id: "chapter-2",
        title: "Working with Data in Python",
        description: "Learn how to manipulate data using pandas and numpy libraries.",
        isCompleted: true,
      },
      {
        id: "chapter-3",
        title: "Data Visualization with Matplotlib and Seaborn",
        description: "Create insightful visualizations to represent your data effectively.",
        isCompleted: false,
      },
      {
        id: "chapter-4",
        title: "Introduction to Machine Learning with Python",
        description: "Learn the fundamentals of machine learning and implement your first models.",
        isCompleted: false,
      },
    ],
  },
  // Other courses would be defined here
};

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulating API fetch
    const fetchCourse = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        if (courseId && coursesData[courseId]) {
          setCourse(coursesData[courseId]);
        } else {
          toast({
            variant: "destructive",
            title: "Course not found",
            description: "The course you're looking for doesn't exist.",
          });
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Failed to load course",
          description: "Please try again later.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId, toast]);

  // Calculate if all chapters are completed
  const allChaptersCompleted = course?.chapters?.every((chapter: any) => chapter.isCompleted) || false;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container px-4 mx-auto py-8">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
          ) : course ? (
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
                <Badge variant="outline" className="bg-learning-card mb-4">
                  {course.category}
                </Badge>
                <div className="aspect-video w-full overflow-hidden rounded-xl mb-6">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600">{course.description}</p>
              </div>

              <div className="border-t border-learning-border pt-8">
                <ChapterList
                  courseId={course.id}
                  chapters={course.chapters}
                  allCompleted={allChaptersCompleted}
                />
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-800">Course not found</h2>
              <p className="text-gray-600 mt-2">The course you're looking for doesn't exist.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CourseDetailPage;
