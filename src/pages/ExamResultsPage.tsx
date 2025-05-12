import { useState, useEffect } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, XCircle, Trophy, Download, Share2, Home, Medal, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ExamResultsPage = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const [language, setLanguage] = useState<"en" | "ar">("en");
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);

    const score = parseInt(searchParams.get("score") || "0", 10);
    const total = parseInt(searchParams.get("total") || "30", 10);
    const timeSpent = parseInt(searchParams.get("timeSpent") || "0", 10);
    const percentage = (score / total) * 100;
    const passingScore = Math.ceil(total * 0.7); // 70% is passing
    const isPassed = score >= passingScore;

    const isRTL = language === "ar";

    // Format time spent
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // Toggle language
    const toggleLanguage = () => {
        setLanguage(language === "en" ? "ar" : "en");
    };

    const getBadgeColor = (percentage: number) => {
        if (percentage >= 80) return "bg-green-500";
        if (percentage >= 70) return "bg-emerald-500";
        if (percentage >= 60) return "bg-yellow-500";
        return "bg-red-500";
    };

    const getGrade = (percentage: number) => {
        if (percentage >= 90) return { en: "Excellent", ar: "ممتاز" };
        if (percentage >= 80) return { en: "Very Good", ar: "جيد جداً" };
        if (percentage >= 70) return { en: "Good", ar: "جيد" };
        if (percentage >= 60) return { en: "Satisfactory", ar: "مرضي" };
        return { en: "Fail", ar: "راسب" };
    };

    const getScoreMessage = (isPassed: boolean) => {
        if (isPassed) {
            return {
                en: "Congratulations! You've successfully passed the certification exam.",
                ar: "تهانينا! لقد اجتزت اختبار الشهادة بنجاح."
            };
        } else {
            return {
                en: "You didn't pass the exam this time. Review the material and try again.",
                ar: "لم تنجح في الامتحان هذه المرة. راجع المواد وحاول مرة أخرى."
            };
        }
    };

    const handleDownloadCertificate = () => {
        // In a real app, this would generate and download a PDF certificate
        alert(language === "en"
            ? "Certificate download functionality would be implemented here."
            : "سيتم تنفيذ وظيفة تنزيل الشهادة هنا.");
    };

    const handleShareResults = () => {
        // In a real app, this would open a share dialog
        alert(language === "en"
            ? "Share functionality would be implemented here."
            : "سيتم تنفيذ وظيفة المشاركة هنا.");
    };

    const handleRetakeExam = () => {
        navigate(`/categories/${categoryId}/exam`);
    };

    const scoreMessage = getScoreMessage(isPassed);
    const grade = getGrade(percentage);

    return (
        <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
            <Navbar />

            <main className="container px-4 mx-auto py-6">
                <div className="max-w-4xl mx-auto">
                    {/* Top navigation */}
                    <div className="flex justify-between items-center mb-4">
                        <Link to={`/categories/${categoryId}`} className="flex items-center text-blue-600">
                            <ArrowLeft className="h-4 w-4 mr-1" />
                            <span>{language === "en" ? "Back to Category" : "العودة إلى الفئة"}</span>
                        </Link>

                        <Button
                            onClick={toggleLanguage}
                            variant="outline"
                            size="sm"
                        >
                            {language === "en" ? "العربية" : "English"}
                        </Button>
                    </div>

                    {/* Results Header */}
                    <div className={`mb-8 relative overflow-hidden rounded-xl ${isPassed ? 'bg-green-500' : 'bg-blue-600'} text-white py-8 px-6`}>
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-repeat opacity-20"
                                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E")' }}>
                            </div>
                        </div>
                        <div className="relative flex flex-col md:flex-row gap-6 items-center">
                            <div className={`w-24 h-24 rounded-full flex items-center justify-center ${isPassed ? 'bg-white text-green-500' : 'bg-white text-blue-500'}`}>
                                {isPassed ? (
                                    <Trophy className="h-12 w-12" />
                                ) : (
                                    <Medal className="h-12 w-12" />
                                )}
                            </div>
                            <div className="text-center md:text-left">
                                <h1 className="text-2xl font-bold mb-2">
                                    {isPassed
                                        ? (language === "en" ? "Certification Completed!" : "اكتملت الشهادة!")
                                        : (language === "en" ? "Exam Completed" : "اكتمل الامتحان")}
                                </h1>
                                <p className="text-lg opacity-90">
                                    {scoreMessage[language]}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Score Card */}
                    <Card className="shadow-sm mb-8">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-xl">
                                {language === "en" ? "Your Results" : "نتائجك"}
                            </CardTitle>
                            <CardDescription>
                                {language === "en"
                                    ? "Computer Basics Certification Exam"
                                    : "اختبار شهادة أساسيات الكمبيوتر"}
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            {/* Score Visualization */}
                            <div className="mb-8">
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-500">{score}/{total} {language === "en" ? "correct answers" : "إجابات صحيحة"}</span>
                                    <span className="font-medium">{percentage.toFixed(1)}%</span>
                                </div>
                                <Progress value={percentage} className="h-3" />
                            </div>

                            {/* Score Details */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div className="bg-blue-50 rounded-lg p-4 text-center flex flex-col justify-center">
                                    <div className="text-sm text-gray-500 mb-1">{language === "en" ? "Score" : "الدرجة"}</div>
                                    <div className="text-2xl font-bold text-blue-600">{score}/{total}</div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 text-center flex flex-col justify-center">
                                    <div className="text-sm text-gray-500 mb-1">{language === "en" ? "Grade" : "التقدير"}</div>
                                    <div className={`text-2xl font-bold ${isPassed ? 'text-green-600' : 'text-red-500'}`}>
                                        {grade[language]}
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 text-center flex flex-col justify-center">
                                    <div className="text-sm text-gray-500 mb-1">{language === "en" ? "Time Spent" : "الوقت المستغرق"}</div>
                                    <div className="text-2xl font-bold text-blue-600 flex items-center justify-center">
                                        <Clock className="h-4 w-4 mr-1 inline" />
                                        <span>{formatTime(timeSpent)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Status Banner */}
                            <div className={`py-3 px-4 rounded-lg flex items-center gap-2 ${isPassed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {isPassed ? (
                                    <>
                                        <Check className="h-5 w-5" />
                                        <span className="font-medium">
                                            {language === "en"
                                                ? `Passed (Required: ${passingScore}/${total})`
                                                : `ناجح (المطلوب: ${passingScore}/${total})`}
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <XCircle className="h-5 w-5" />
                                        <span className="font-medium">
                                            {language === "en"
                                                ? `Failed (Required: ${passingScore}/${total})`
                                                : `راسب (المطلوب: ${passingScore}/${total})`}
                                        </span>
                                    </>
                                )}
                            </div>
                        </CardContent>

                        <CardFooter className="flex-col sm:flex-row gap-3 pt-2">
                            {isPassed ? (
                                <>
                                    <Button
                                        onClick={handleDownloadCertificate}
                                        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
                                    >
                                        <Download className="h-4 w-4 mr-2" />
                                        {language === "en" ? "Download Certificate" : "تنزيل الشهادة"}
                                    </Button>
                                    <Button
                                        onClick={handleShareResults}
                                        variant="outline"
                                        className="w-full sm:w-auto"
                                    >
                                        <Share2 className="h-4 w-4 mr-2" />
                                        {language === "en" ? "Share Results" : "مشاركة النتائج"}
                                    </Button>
                                </>
                            ) : (
                                <Button
                                    onClick={handleRetakeExam}
                                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
                                >
                                    {language === "en" ? "Retake Exam" : "إعادة الامتحان"}
                                </Button>
                            )}
                        </CardFooter>
                    </Card>

                    {/* Next Steps */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>
                                {language === "en" ? "Next Steps" : "الخطوات التالية"}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {isPassed ? (
                                    <>
                                        <div className="flex gap-4 items-start">
                                            <div className="bg-green-100 rounded-full p-2">
                                                <Trophy className="h-5 w-5 text-green-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium">
                                                    {language === "en" ? "Share Your Achievement" : "شارك إنجازك"}
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    {language === "en"
                                                        ? "Let others know about your certification and skills."
                                                        : "دع الآخرين يعرفون عن شهادتك ومهاراتك."}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="bg-blue-100 rounded-full p-2">
                                                <Medal className="h-5 w-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium">
                                                    {language === "en" ? "Explore Advanced Topics" : "استكشف موضوعات متقدمة"}
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    {language === "en"
                                                        ? "Continue your learning journey with more advanced courses."
                                                        : "واصل رحلة التعلم الخاصة بك مع دورات أكثر تقدمًا."}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex gap-4 items-start">
                                            <div className="bg-blue-100 rounded-full p-2">
                                                <ArrowLeft className="h-5 w-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium">
                                                    {language === "en" ? "Review Course Material" : "مراجعة مواد الدورة"}
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    {language === "en"
                                                        ? "Go through the topics again to strengthen your understanding."
                                                        : "راجع الموضوعات مرة أخرى لتعزيز فهمك."}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="bg-blue-100 rounded-full p-2">
                                                <Check className="h-5 w-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium">
                                                    {language === "en" ? "Practice More" : "ممارسة المزيد"}
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    {language === "en"
                                                        ? "Try some practice exercises to improve your skills."
                                                        : "جرب بعض تمارين الممارسة لتحسين مهاراتك."}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="outline" className="w-full">
                                <Link to="/home">
                                    <Home className="h-4 w-4 mr-2" />
                                    {language === "en" ? "Return to Home" : "العودة إلى الصفحة الرئيسية"}
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default ExamResultsPage; 