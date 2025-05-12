import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, BookOpen, CheckCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import coursesData from "@/data/coursesData";

const ChapterDetailPage = () => {
    const { courseId, chapterId } = useParams<{ courseId: string; chapterId: string }>();
    const [language, setLanguage] = useState<"en" | "ar">("en");
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    // Get course and chapter data
    const [course, setCourse] = useState<any>(null);
    const [chapter, setChapter] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate API fetch delay
                await new Promise(resolve => setTimeout(resolve, 800));

                if (courseId && chapterId && coursesData[courseId]) {
                    setCourse(coursesData[courseId]);
                    const foundChapter = coursesData[courseId].chapters.find(ch => ch.id === chapterId);
                    if (foundChapter) {
                        setChapter(foundChapter);
                    } else {
                        toast({
                            variant: "destructive",
                            title: language === "en" ? "Chapter not found" : "لم يتم العثور على الفصل",
                            description: language === "en" ? "The chapter you're looking for doesn't exist." : "الفصل الذي تبحث عنه غير موجود."
                        });
                    }
                } else {
                    toast({
                        variant: "destructive",
                        title: language === "en" ? "Course not found" : "لم يتم العثور على الدورة",
                        description: language === "en" ? "The course you're looking for doesn't exist." : "الدورة التي تبحث عنها غير موجودة."
                    });
                }
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: language === "en" ? "Error" : "خطأ",
                    description: language === "en" ? "Failed to load data." : "فشل في تحميل البيانات."
                });
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [courseId, chapterId, toast, language]);

    // Toggle language
    const toggleLanguage = () => {
        setLanguage(language === "en" ? "ar" : "en");
    };

    // Calculate lesson completion percentage
    const calculateProgress = () => {
        if (!chapter?.lessons) return 0;
        const completedLessons = chapter.lessons.filter((lesson: any) => lesson.isCompleted).length;
        return Math.round((completedLessons / chapter.lessons.length) * 100);
    };

    const progress = chapter ? calculateProgress() : 0;
    const isRTL = language === "ar";

    // If loading or no data found
    if (loading) {
        return (
            <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
                <Navbar />
                <main className="container px-4 mx-auto py-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="animate-pulse space-y-4">
                            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                            <div className="h-12 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-36 bg-gray-200 rounded"></div>
                            <div className="h-24 bg-gray-200 rounded"></div>
                            <div className="h-64 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    if (!course || !chapter) {
        return (
            <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
                <Navbar />
                <main className="container px-4 mx-auto py-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">
                                {language === "en" ? "Not Found" : "لم يتم العثور"}
                            </h2>
                            <p className="text-gray-600 mb-6">
                                {language === "en" ? "The content you're looking for doesn't exist." : "المحتوى الذي تبحث عنه غير موجود."}
                            </p>
                            <Button asChild>
                                <Link to="/courses">
                                    {language === "en" ? "Browse Courses" : "تصفح الدورات"}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
            <Navbar />

            <main className="container px-4 mx-auto py-6">
                <div className="max-w-4xl mx-auto">
                    {/* Navigation */}
                    <div className="flex justify-between items-center mb-4">
                        <Link to={`/courses/${courseId}`} className="flex items-center text-learning-primary hover:underline">
                            <ArrowLeft className="h-4 w-4 mr-1" />
                            <span>{language === "en" ? "Back to Course" : "العودة إلى الدورة"}</span>
                        </Link>

                        <Button
                            onClick={toggleLanguage}
                            variant="outline"
                            size="sm"
                        >
                            {language === "en" ? "العربية" : "English"}
                        </Button>
                    </div>

                    {/* Chapter Header */}
                    <div className="bg-white border border-learning-border rounded-xl shadow-sm mb-6 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6">
                            <h1 className="text-2xl font-bold mb-2">{chapter.title[language]}</h1>
                            <div className="flex items-center">
                                <BookOpen className="h-5 w-5 mr-2" />
                                <span>{course.title[language]}</span>
                            </div>
                        </div>

                        <div className="p-6">
                            {/* Progress */}
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-medium">{language === "en" ? "Chapter Progress" : "تقدم الفصل"}</h3>
                                    <span className="font-semibold">{progress}%</span>
                                </div>
                                <Progress value={progress} className="h-2" />
                                <p className="text-sm text-gray-500 mt-1">
                                    {language === "en"
                                        ? `${chapter.lessons.filter((l: any) => l.isCompleted).length} of ${chapter.lessons.length} lessons completed`
                                        : `${chapter.lessons.filter((l: any) => l.isCompleted).length} من ${chapter.lessons.length} دروس مكتملة`}
                                </p>
                            </div>

                            {/* Chapter Description */}
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    {language === "en" ? "About This Chapter" : "عن هذا الفصل"}
                                </h2>
                                <p className="text-gray-700">
                                    {language === "en"
                                        ? `This chapter covers essential concepts and techniques of ${chapter.title.en}. You'll learn through progressive lessons and hands-on exercises.`
                                        : `يغطي هذا الفصل المفاهيم والتقنيات الأساسية لـ ${chapter.title.ar}. ستتعلم من خلال دروس تدريجية وتمارين عملية.`}
                                </p>
                            </div>

                            {/* Lessons List */}
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-3">
                                    {language === "en" ? "Lessons" : "الدروس"}
                                </h2>
                                <ul className="space-y-3">
                                    {chapter.lessons.map((lesson: any, index: number) => (
                                        <li key={lesson.id} className="border border-learning-border rounded-lg overflow-hidden">
                                            <Link
                                                to={`/courses/${courseId}/chapters/${chapterId}/lessons/${lesson.id}`}
                                                className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium">
                                                        {index + 1}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-medium">{lesson.title[language]}</h3>
                                                        <p className="text-sm text-gray-500">{lesson.briefDescription[language]}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center">
                                                    {lesson.isCompleted ? (
                                                        <span className="flex items-center text-green-600 text-sm">
                                                            <CheckCircle className="h-4 w-4 mr-1" />
                                                            {language === "en" ? "Completed" : "مكتمل"}
                                                        </span>
                                                    ) : (
                                                        <Button size="sm" variant="ghost" className="text-blue-600">
                                                            <Play className="h-4 w-4 mr-1" />
                                                            {language === "en" ? "Start" : "ابدأ"}
                                                        </Button>
                                                    )}
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Start First Lesson Button */}
                            {chapter.lessons.length > 0 && (
                                <Link to={`/courses/${courseId}/chapters/${chapterId}/lessons/${chapter.lessons[0].id}`}>
                                    <Button className="w-full blue-gradient">
                                        {language === "en" ? "Start First Lesson" : "ابدأ الدرس الأول"}
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ChapterDetailPage; 