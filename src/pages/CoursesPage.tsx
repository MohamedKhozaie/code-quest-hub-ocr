import Navbar from "@/components/Navbar";
import CourseList from "@/components/courses/CourseList";
import { GraduationCap, BookOpen, Users, Trophy } from "lucide-react";

const CoursesPage = () => {
  // Stats for the header section
  const stats = [
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      value: "50+",
      label: "Courses",
      description: "Comprehensive learning paths"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      value: "10,000+",
      label: "Students",
      description: "Active learners worldwide"
    },
    {
      icon: <Trophy className="h-6 w-6 text-primary" />,
      value: "95%",
      label: "Success Rate",
      description: "Course completion rate"
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      value: "1,000+",
      label: "Certifications",
      description: "Awarded to graduates"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text">
            Explore Our Courses
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover a world of knowledge with our expertly crafted courses.
            Learn at your own pace and achieve your goals with our comprehensive learning paths.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Course List */}
        <div className="max-w-7xl mx-auto">
          <CourseList />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Code Quest Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CoursesPage;
