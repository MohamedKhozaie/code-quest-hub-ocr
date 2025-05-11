
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Timer, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import coursesData from "@/data/coursesData";

// Mock quiz data
const mockQuiz = {
  id: "quiz1",
  title: {
    en: "Python Data Science Environment Setup Quiz",
    ar: "اختبار إعداد بيئة علوم البيانات بايثون"
  },
  description: {
    en: "This quiz tests your understanding of setting up a Python data science environment.",
    ar: "يختبر هذا الاختبار فهمك لإعداد بيئة علوم البيانات بايثون."
  },
  totalMarks: 5,
  timeLimit: 10, // minutes
  questions: [
    {
      id: "q1",
      text: {
        en: "Which command installs Jupyter Notebook?",
        ar: "ما هو الأمر الذي يثبت Jupyter Notebook؟"
      },
      options: [
        { id: "a", text: { en: "pip install jupyter", ar: "pip install jupyter" } },
        { id: "b", text: { en: "npm install jupyter", ar: "npm install jupyter" } },
        { id: "c", text: { en: "apt-get jupyter", ar: "apt-get jupyter" } },
        { id: "d", text: { en: "python -m jupyter", ar: "python -m jupyter" } }
      ],
      correctAnswer: "a"
    },
    {
      id: "q2",
      text: {
        en: "Which of these is NOT a Python data science library?",
        ar: "أي من هذه ليست مكتبة علوم البيانات في بايثون؟"
      },
      options: [
        { id: "a", text: { en: "NumPy", ar: "NumPy" } },
        { id: "b", text: { en: "Pandas", ar: "Pandas" } },
        { id: "c", text: { en: "React", ar: "React" } },
        { id: "d", text: { en: "Matplotlib", ar: "Matplotlib" } }
      ],
      correctAnswer: "c"
    },
    {
      id: "q3",
      text: {
        en: "Which command launches Jupyter Notebook?",
        ar: "ما هو الأمر الذي يطلق Jupyter Notebook؟"
      },
      options: [
        { id: "a", text: { en: "start jupyter", ar: "start jupyter" } },
        { id: "b", text: { en: "jupyter notebook", ar: "jupyter notebook" } },
        { id: "c", text: { en: "python jupyter", ar: "python jupyter" } },
        { id: "d", text: { en: "run jupyter", ar: "run jupyter" } }
      ],
      correctAnswer: "b"
    }
  ]
};

const QuizPage = () => {
  const { courseId, chapterId, lessonId } = useParams<{ courseId: string; chapterId: string; lessonId: string }>();
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(mockQuiz.timeLimit * 60); // in seconds
  const { toast } = useToast();
  
  const isRTL = language === "ar";
  
  // Start quiz
  const startQuiz = () => {
    setQuizStarted(true);
    // In a real app, you would start a timer here
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
    if (currentQuestion < mockQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  
  // Navigate to previous question
  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  // Submit quiz
  const submitQuiz = () => {
    // Calculate score
    let score = 0;
    mockQuiz.questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        score++;
      }
    });
    
    // In a real app, you would send this score to the server
    toast({
      title: language === "en" ? "Quiz submitted!" : "تم إرسال الاختبار!",
      description: language === "en" 
        ? `Your score: ${score}/${mockQuiz.questions.length}` 
        : `درجتك: ${score}/${mockQuiz.questions.length}`
    });
    
    // Navigate to results page
    window.location.href = `/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}/quiz/results?score=${score}`;
  };
  
  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };
  
  const currentQ = mockQuiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / mockQuiz.questions.length) * 100;
  
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
          
          {/* Quiz content */}
          <div className="bg-white border border-learning-border rounded-xl shadow-sm overflow-hidden">
            <div className="bg-blue-500 text-white py-4 px-6">
              <div className="flex items-center gap-2">
                <FileCheck className="h-5 w-5" />
                <h1 className="text-xl font-bold">
                  {language === "en" ? "Quiz Details" : "تفاصيل الاختبار"}
                </h1>
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{mockQuiz.title[language]}</h2>
              <p className="text-gray-600 mb-6">{mockQuiz.description[language]}</p>
              
              {!quizStarted ? (
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-sm text-gray-500 mb-1">{language === "en" ? "Total Marks" : "مجموع العلامات"}</div>
                      <div className="text-2xl font-bold text-blue-600">{mockQuiz.totalMarks}</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-sm text-gray-500 mb-1">{language === "en" ? "Time Limit" : "الوقت المحدد"}</div>
                      <div className="text-2xl font-bold text-blue-600">{mockQuiz.timeLimit} {language === "en" ? "mins" : "دقائق"}</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-sm text-gray-500 mb-1">{language === "en" ? "Questions" : "الأسئلة"}</div>
                      <div className="text-2xl font-bold text-blue-600">{mockQuiz.questions.length}</div>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={startQuiz} 
                    className="blue-gradient w-full py-6 text-lg"
                  >
                    {language === "en" ? "Start Quiz" : "بدء الاختبار"}
                  </Button>
                </div>
              ) : (
                <div>
                  {/* Quiz progress */}
                  <div className="flex justify-between items-center mb-2 text-sm">
                    <div>
                      {language === "en" 
                        ? `Question ${currentQuestion + 1} of ${mockQuiz.questions.length}`
                        : `السؤال ${currentQuestion + 1} من ${mockQuiz.questions.length}`}
                    </div>
                    <div className="flex items-center text-orange-500">
                      <Timer className="h-4 w-4 mr-1" />
                      <span>{formatTime(timeRemaining)}</span>
                    </div>
                  </div>
                  <Progress value={progress} className="h-1 mb-6" />
                  
                  {/* Question */}
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4">{currentQ.text[language]}</h3>
                    <RadioGroup 
                      value={answers[currentQ.id] || ""} 
                      onValueChange={(value) => handleAnswerSelect(currentQ.id, value)}
                    >
                      <div className="space-y-3">
                        {currentQ.options.map((option) => (
                          <div key={option.id} className="flex items-center">
                            <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                            <Label htmlFor={`option-${option.id}`} className="ml-2 cursor-pointer">
                              {option.text[language]}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                  
                  {/* Navigation buttons */}
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={prevQuestion}
                      disabled={currentQuestion === 0}
                    >
                      {language === "en" ? "Previous" : "السابق"}
                    </Button>
                    
                    {currentQuestion === mockQuiz.questions.length - 1 ? (
                      <Button 
                        onClick={submitQuiz}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        {language === "en" ? "Submit Quiz" : "إرسال الاختبار"}
                      </Button>
                    ) : (
                      <Button onClick={nextQuestion}>
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

export default QuizPage;
