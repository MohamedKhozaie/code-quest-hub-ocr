
import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowLeft, Check, XCircle, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const QuizResultsPage = () => {
  const { courseId, chapterId, lessonId } = useParams<{ courseId: string; chapterId: string; lessonId: string }>();
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const score = parseInt(searchParams.get("score") || "0", 10);
  
  const isRTL = language === "ar";
  
  const [attempts, setAttempts] = useState([
    {
      id: 1,
      score: score,
      total: 5,
      percentage: (score / 5) * 100,
      date: new Date().toLocaleString()
    },
    {
      id: 2,
      score: Math.floor(Math.random() * 3) + 1,
      total: 5,
      percentage: (Math.floor(Math.random() * 3) + 1) / 5 * 100,
      date: new Date(Date.now() - 86400000).toLocaleString() // Yesterday
    }
  ]);
  
  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };
  
  const getBadgeColor = (percentage: number) => {
    if (percentage >= 80) return "bg-green-500";
    if (percentage >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };
  
  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <Navbar />
      
      <main className="container px-4 mx-auto py-6">
        <div className="max-w-4xl mx-auto">
          {/* Top navigation */}
          <div className="flex justify-between items-center mb-4">
            <Link to={`/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}`} className="flex items-center text-learning-primary">
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>{language === "en" ? "Back to Lesson" : "العودة إلى الدرس"}</span>
            </Link>
            
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
            >
              {language === "en" ? "العربية" : "English"}
            </Button>
          </div>
          
          {/* Results content */}
          <div className="bg-white border border-learning-border rounded-xl shadow-sm overflow-hidden">
            <div className="bg-blue-500 text-white py-4 px-6">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                <h1 className="text-xl font-bold">
                  {language === "en" ? "Quiz Results" : "نتائج الاختبار"}
                </h1>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col items-center mb-8">
                {score / 5 >= 0.6 ? (
                  <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Check className="h-12 w-12 text-green-500" />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <XCircle className="h-12 w-12 text-red-500" />
                  </div>
                )}
                
                <h2 className="text-2xl font-bold mb-1">
                  {score / 5 >= 0.6 
                    ? (language === "en" ? "Congratulations!" : "تهانينا!")
                    : (language === "en" ? "Keep Practicing!" : "واصل التمرين!")}
                </h2>
                <p className="text-gray-600">
                  {language === "en" 
                    ? `You scored ${score} out of 5 (${(score/5*100).toFixed(0)}%)`
                    : `حصلت على ${score} من أصل 5 (${(score/5*100).toFixed(0)}٪)`}
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-3">
                  {language === "en" ? "Your Attempts" : "محاولاتك"}
                </h3>
                
                <div className="space-y-4">
                  {attempts.map((attempt) => (
                    <div key={attempt.id} className="border rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <div className="font-medium">
                          {language === "en" ? "Attempt" : "المحاولة"} #{attempt.id}
                        </div>
                        <div className="text-sm text-gray-500">{attempt.date}</div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-3">
                          <div className="text-sm text-gray-500">
                            {language === "en" ? "Score" : "الدرجة"}
                          </div>
                          <div className="font-medium">
                            {attempt.score}/{attempt.total}
                          </div>
                        </div>
                        <div className={`text-white font-medium rounded-full px-3 py-1 text-sm ${getBadgeColor(attempt.percentage)}`}>
                          {attempt.percentage.toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 flex-1">
                  <Link to={`/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}/quiz`}>
                    {language === "en" ? "Retake Quiz" : "إعادة الاختبار"}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link to={`/courses/${courseId}`}>
                    {language === "en" ? "Back to Course" : "العودة إلى الدورة"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizResultsPage;
