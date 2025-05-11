
import Navbar from "@/components/Navbar";
import CourseList from "@/components/courses/CourseList";

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container px-4 mx-auto py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Courses</h1>
          <CourseList />
        </div>
      </main>
    </div>
  );
};

export default CoursesPage;
