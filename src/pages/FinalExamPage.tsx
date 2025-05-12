import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Timer, FileCheck, Trophy, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Mock final exam data for Computer Basics
const computerBasicsFinalExam = {
    id: "computer-basics-final",
    title: {
        en: "Computer Basics Certification Exam",
        ar: "اختبار شهادة أساسيات الكمبيوتر"
    },
    description: {
        en: "This exam tests your comprehensive understanding of computer hardware, software, networking, security, and basic operations.",
        ar: "يختبر هذا الاختبار فهمك الشامل لأجهزة الكمبيوتر، والبرمجيات، والشبكات، والأمان، والعمليات الأساسية."
    },
    totalMarks: 30,
    timeLimit: 45,
    passingScore: 21, // 70%
    questions: [
        {
            id: "q1",
            text: {
                en: "Which component is considered the 'brain' of the computer?",
                ar: "أي مكون يعتبر 'دماغ' الكمبيوتر؟"
            },
            options: [
                { id: "a", text: { en: "Hard Drive", ar: "القرص الصلب" } },
                { id: "b", text: { en: "CPU", ar: "وحدة المعالجة المركزية" } },
                { id: "c", text: { en: "RAM", ar: "الذاكرة العشوائية" } },
                { id: "d", text: { en: "Graphics Card", ar: "بطاقة الرسومات" } }
            ],
            correctAnswer: "b"
        },
        {
            id: "q2",
            text: {
                en: "What is RAM primarily used for?",
                ar: "ما هو الاستخدام الأساسي للذاكرة العشوائية (RAM)؟"
            },
            options: [
                { id: "a", text: { en: "Long-term storage", ar: "التخزين طويل المدى" } },
                { id: "b", text: { en: "Temporary storage while working", ar: "التخزين المؤقت أثناء العمل" } },
                { id: "c", text: { en: "Cooling the system", ar: "تبريد النظام" } },
                { id: "d", text: { en: "Providing internet access", ar: "توفير الوصول إلى الإنترنت" } }
            ],
            correctAnswer: "b"
        },
        {
            id: "q3",
            text: {
                en: "Which of these is NOT an operating system?",
                ar: "أي من هذه ليس نظام تشغيل؟"
            },
            options: [
                { id: "a", text: { en: "Windows", ar: "ويندوز" } },
                { id: "b", text: { en: "Linux", ar: "لينكس" } },
                { id: "c", text: { en: "Chrome", ar: "كروم" } },
                { id: "d", text: { en: "macOS", ar: "ماك او اس" } }
            ],
            correctAnswer: "c"
        },
        {
            id: "q4",
            text: {
                en: "What is a firewall used for?",
                ar: "ما هو استخدام جدار الحماية؟"
            },
            options: [
                { id: "a", text: { en: "Cooling computer components", ar: "تبريد مكونات الكمبيوتر" } },
                { id: "b", text: { en: "Protecting against network threats", ar: "الحماية من تهديدات الشبكة" } },
                { id: "c", text: { en: "Enhancing graphics performance", ar: "تحسين أداء الرسومات" } },
                { id: "d", text: { en: "Storing important files", ar: "تخزين الملفات المهمة" } }
            ],
            correctAnswer: "b"
        },
        {
            id: "q5",
            text: {
                en: "What is the function of a motherboard?",
                ar: "ما هي وظيفة اللوحة الأم؟"
            },
            options: [
                { id: "a", text: { en: "Store data permanently", ar: "تخزين البيانات بشكل دائم" } },
                { id: "b", text: { en: "Connect all components together", ar: "ربط جميع المكونات معًا" } },
                { id: "c", text: { en: "Display images on screen", ar: "عرض الصور على الشاشة" } },
                { id: "d", text: { en: "Provide internet connectivity", ar: "توفير الاتصال بالإنترنت" } }
            ],
            correctAnswer: "b"
        }
    ]
};

// Mapping of category IDs to exam data
const finalExamData: Record<string, any> = {
    "computer-basics": computerBasicsFinalExam
};

const FinalExamPage = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const [language, setLanguage] = useState<"en" | "ar">("en");
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [examStarted, setExamStarted] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [timeIntervalId, setTimeIntervalId] = useState<number | null>(null);
    const [examData, setExamData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [reviewMode, setReviewMode] = useState(false);
    const { toast } = useToast();
    const navigate = useNavigate();

    const isRTL = language === "ar";

    useEffect(() => {
        // Simulate API fetch delay
        const timer = setTimeout(() => {
            if (categoryId && finalExamData[categoryId]) {
                setExamData(finalExamData[categoryId]);
                setTimeRemaining(finalExamData[categoryId].timeLimit * 60);
            }
            setLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, [categoryId]);

    // Start countdown timer
    useEffect(() => {
        if (examStarted && timeRemaining > 0 && !reviewMode) {
            const id = window.setInterval(() => {
                setTimeRemaining(prev => {
                    if (prev <= 1) {
                        clearInterval(id);
                        submitExam();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            setTimeIntervalId(id);

            return () => {
                if (id) clearInterval(id);
            };
        }
    }, [examStarted, reviewMode]);

    // Start exam
    const startExam = () => {
        setExamStarted(true);
    };

    // Handle answer selection
    const handleAnswerSelect = (questionId: string, optionId: string) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: optionId
        }));
    };

    // Navigate to next question
    const nextQuestion = () => {
        if (currentQuestion < examData.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    // Navigate to previous question
    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    // Submit exam
    const submitExam = () => {
        // Stop the timer
        if (timeIntervalId) {
            clearInterval(timeIntervalId);
            setTimeIntervalId(null);
        }

        // Calculate score
        let score = 0;
        examData.questions.forEach((question: any) => {
            if (answers[question.id] === question.correctAnswer) {
                score++;
            }
        });

        // Navigate to results page
        navigate(`/categories/${categoryId}/exam-results?score=${score}&total=${examData.questions.length}&timeSpent=${examData.timeLimit * 60 - timeRemaining}`);
    };

    // Confirm submission
    const confirmSubmit = () => {
        const unansweredCount = examData.questions.length - Object.keys(answers).length;

        if (unansweredCount > 0) {
            if (window.confirm(language === "en"
                ? `You have ${unansweredCount} unanswered questions. Are you sure you want to submit?`
                : `لديك ${unansweredCount} أسئلة غير مجابة. هل أنت متأكد أنك تريد التقديم؟`)) {
                submitExam();
            }
        } else {
            submitExam();
        }
    };

    // Toggle language
    const toggleLanguage = () => {
        setLanguage(language === "en" ? "ar" : "en");
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <main className="container px-4 mx-auto py-6">
                    <div className="flex justify-center items-center h-96">
                        <div className="w-8 h-8 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
                    </div>
                </main>
            </div>
        );
    }

    if (!examData) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <main className="container px-4 mx-auto py-8">
                    <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 text-center shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">Exam not found</h2>
                        <p className="text-gray-600 mb-6">The exam you're looking for doesn't exist.</p>
                        <Button asChild>
                            <Link to={`/categories/${categoryId}`}>Back to Category</Link>
                        </Button>
                    </div>
                </main>
            </div>
        );
    }

    const currentQ = examData.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / examData.questions.length) * 100;
    const answeredCount = Object.keys(answers).length;

    // Format time remaining
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

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

                    {/* Exam content */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="bg-blue-600 text-white py-4 px-6">
                            <div className="flex items-center gap-2">
                                <Trophy className="h-5 w-5" />
                                <h1 className="text-xl font-bold">
                                    {language === "en" ? "Final Certification Exam" : "اختبار الشهادة النهائي"}
                                </h1>
                            </div>
                        </div>

                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-2">{examData.title[language]}</h2>
                            <p className="text-gray-600 mb-6">{examData.description[language]}</p>

                            {!examStarted ? (
                                <div className="border border-gray-200 rounded-lg p-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                                            <div className="text-sm text-gray-500 mb-1">{language === "en" ? "Total Questions" : "إجمالي الأسئلة"}</div>
                                            <div className="text-2xl font-bold text-blue-600">{examData.questions.length}</div>
                                        </div>
                                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                                            <div className="text-sm text-gray-500 mb-1">{language === "en" ? "Time Limit" : "الوقت المحدد"}</div>
                                            <div className="text-2xl font-bold text-blue-600">{examData.timeLimit} {language === "en" ? "mins" : "دقيقة"}</div>
                                        </div>
                                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                                            <div className="text-sm text-gray-500 mb-1">{language === "en" ? "Passing Score" : "درجة النجاح"}</div>
                                            <div className="text-2xl font-bold text-blue-600">{examData.passingScore}/{examData.totalMarks} (70%)</div>
                                        </div>
                                    </div>

                                    <Alert className="mb-6">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertTitle>
                                            {language === "en" ? "Important Information" : "معلومات مهمة"}
                                        </AlertTitle>
                                        <AlertDescription>
                                            {language === "en"
                                                ? "Once started, the timer cannot be paused. Ensure you have enough time to complete the exam."
                                                : "بمجرد البدء، لا يمكن إيقاف المؤقت مؤقتًا. تأكد من أن لديك وقتًا كافيًا لإكمال الاختبار."}
                                        </AlertDescription>
                                    </Alert>

                                    <Button
                                        onClick={startExam}
                                        className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700"
                                    >
                                        {language === "en" ? "Start Certification Exam" : "بدء اختبار الشهادة"}
                                    </Button>
                                </div>
                            ) : (
                                <div>
                                    {/* Exam progress */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                                        <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-2">
                                            <div className="text-sm">
                                                <div className="text-gray-500">{language === "en" ? "Questions" : "الأسئلة"}</div>
                                                <div className="font-medium">{currentQuestion + 1}/{examData.questions.length}</div>
                                            </div>
                                        </div>
                                        <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-2">
                                            <div className="text-sm">
                                                <div className="text-gray-500">{language === "en" ? "Answered" : "تمت الإجابة"}</div>
                                                <div className="font-medium">{answeredCount}/{examData.questions.length}</div>
                                            </div>
                                        </div>
                                        <div className="bg-orange-50 rounded-lg p-4 flex items-center gap-2">
                                            <Timer className="h-5 w-5 text-orange-500" />
                                            <div className="text-sm">
                                                <div className="text-gray-500">{language === "en" ? "Time Remaining" : "الوقت المتبقي"}</div>
                                                <div className="font-medium text-orange-500">{formatTime(timeRemaining)}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <Progress value={progress} className="h-2 mb-6" />

                                    {/* Question */}
                                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                                        <h3 className="text-lg font-medium mb-4">
                                            <span className="text-blue-600 font-bold mr-2">#{currentQuestion + 1}.</span>
                                            {currentQ.text[language]}
                                        </h3>
                                        <RadioGroup
                                            value={answers[currentQ.id] || ""}
                                            onValueChange={(value) => handleAnswerSelect(currentQ.id, value)}
                                            className="mt-4"
                                        >
                                            <div className="space-y-4">
                                                {currentQ.options.map((option: any) => (
                                                    <div key={option.id} className="flex items-start bg-white p-3 rounded-lg border hover:border-blue-300 transition-colors">
                                                        <RadioGroupItem value={option.id} id={`option-${option.id}`} className="mt-1" />
                                                        <Label htmlFor={`option-${option.id}`} className="ml-2 cursor-pointer flex-1">
                                                            {option.text[language]}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </div>
                                        </RadioGroup>
                                    </div>

                                    {/* Navigation buttons */}
                                    <div className="flex justify-between pt-4 border-t">
                                        <Button
                                            variant="outline"
                                            onClick={prevQuestion}
                                            disabled={currentQuestion === 0}
                                        >
                                            {language === "en" ? "Previous" : "السابق"}
                                        </Button>

                                        {currentQuestion === examData.questions.length - 1 ? (
                                            <Button
                                                onClick={confirmSubmit}
                                                className="bg-green-600 hover:bg-green-700"
                                            >
                                                {language === "en" ? "Submit Exam" : "تقديم الامتحان"}
                                            </Button>
                                        ) : (
                                            <Button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700">
                                                {language === "en" ? "Next" : "التالي"}
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FinalExamPage; 