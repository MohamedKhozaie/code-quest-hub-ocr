import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, FileText, Book, ArrowRight, Youtube, Code, Info, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import coursesData from "@/data/coursesData";

// Specialized content for the Flutter introduction to Dart lesson
const dartLessonContent = {
  en: {
    videoTitle: "Getting Started with Dart Programming",
    videoDescription: "This comprehensive tutorial walks you through the basics of Dart programming language, essential for Flutter development.",
    sections: [
      {
        title: "Introduction to Dart",
        content: `Dart is a client-optimized programming language developed by Google for creating fast apps on multiple platforms. It's the foundation of Flutter, Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.
        
Dart was designed to be easy to learn, especially for developers familiar with other languages like JavaScript, Java, or C#. It combines the best features of many languages while avoiding their drawbacks.`
      },
      {
        title: "Key Features of Dart",
        content: `- **Object-Oriented**: Everything in Dart is an object, including numbers and functions
- **Statically Typed**: Helps catch errors early during development
- **Rich Standard Library**: Provides many built-in functions and utilities
- **Asynchronous Programming**: Supports async/await pattern for non-blocking code
- **JIT and AOT Compilation**: Supports both Just-In-Time and Ahead-Of-Time compilation
- **Null Safety**: Helps prevent null reference exceptions`
      },
      {
        title: "Basic Syntax",
        content: "Let's explore the basic syntax of Dart with some examples:",
        code: `// Variables and data types
var name = 'John'; // Type inference
String lastName = 'Doe'; // Explicit type
int age = 30;
double height = 1.85;
bool isActive = true;

// Lists (arrays)
List<String> fruits = ['apple', 'banana', 'orange'];
var numbers = [1, 2, 3, 4, 5]; // Type inference

// Functions
int add(int a, int b) {
  return a + b;
}

// Arrow function syntax
int multiply(int a, int b) => a * b;

// Classes
class Person {
  String name;
  int age;
  
  Person(this.name, this.age);
  
  void sayHello() {
    print('Hello, my name is $name');
  }
}

// Using a class
var person = Person('Alice', 25);
person.sayHello();`
      },
      {
        title: "Dart and Flutter",
        content: `Dart is the language powering Flutter applications. When you build a Flutter app, you're writing Dart code that:

1. Defines the UI using Flutter widgets
2. Manages state and business logic
3. Handles user interaction and events
4. Communicates with external services

Understanding Dart is crucial for becoming proficient in Flutter development. As you continue through this course, you'll see how Dart's features enable the creation of smooth, responsive UIs with Flutter.`
      }
    ]
  },
  ar: {
    videoTitle: "بدء استخدام لغة دارت للبرمجة",
    videoDescription: "هذا البرنامج التعليمي الشامل يرشدك خلال أساسيات لغة البرمجة Dart، الضرورية لتطوير Flutter.",
    sections: [
      {
        title: "مقدمة في دارت",
        content: `دارت هي لغة برمجة محسنة للعميل طورتها جوجل لإنشاء تطبيقات سريعة على منصات متعددة. إنها أساس Flutter، مجموعة أدوات واجهة المستخدم من Google لبناء تطبيقات جميلة ومجمعة بشكل أصلي للجوال والويب وسطح المكتب من قاعدة رمز واحدة.
        
تم تصميم دارت لتكون سهلة التعلم، خاصة للمطورين المألوفين بلغات أخرى مثل JavaScript و Java أو C#. فهي تجمع بين أفضل ميزات العديد من اللغات مع تجنب عيوبها.`
      },
      {
        title: "الميزات الرئيسية لدارت",
        content: `- **كائنية التوجه**: كل شيء في دارت هو كائن، بما في ذلك الأرقام والدوال
- **ذات النوع الثابت**: يساعد على اكتشاف الأخطاء مبكرًا أثناء التطوير
- **مكتبة قياسية غنية**: توفر العديد من الوظائف والأدوات المضمنة
- **البرمجة غير المتزامنة**: تدعم نمط async/await للكود غير المحظور
- **تجميع JIT و AOT**: يدعم تجميع Just-In-Time و Ahead-Of-Time
- **أمان Null**: يساعد في منع استثناءات مراجع النول`
      },
      {
        title: "الصيغة الأساسية",
        content: "دعنا نستكشف الصيغة الأساسية لدارت مع بعض الأمثلة:",
        code: `// المتغيرات وأنواع البيانات
var name = 'John'; // استنتاج النوع
String lastName = 'Doe'; // النوع الصريح
int age = 30;
double height = 1.85;
bool isActive = true;

// القوائم (المصفوفات)
List<String> fruits = ['apple', 'banana', 'orange'];
var numbers = [1, 2, 3, 4, 5]; // استنتاج النوع

// الدوال
int add(int a, int b) {
  return a + b;
}

// صيغة دالة السهم
int multiply(int a, int b) => a * b;

// الفئات
class Person {
  String name;
  int age;
  
  Person(this.name, this.age);
  
  void sayHello() {
    print('Hello, my name is $name');
  }
}

// استخدام فئة
var person = Person('Alice', 25);
person.sayHello();`
      },
      {
        title: "دارت و Flutter",
        content: `دارت هي اللغة التي تشغل تطبيقات Flutter. عندما تبني تطبيق Flutter، فأنت تكتب كود دارت الذي:

1. يحدد واجهة المستخدم باستخدام عناصر Flutter
2. يدير الحالة والمنطق التجاري
3. يتعامل مع تفاعل المستخدم والأحداث
4. يتواصل مع الخدمات الخارجية

فهم دارت أمر حاسم لتصبح بارعًا في تطوير Flutter. مع تقدمك في هذه الدورة، سترى كيف تمكّن ميزات دارت من إنشاء واجهات مستخدم سلسة وسريعة الاستجابة مع Flutter.`
      }
    ]
  }
};

const LessonDetailPage = () => {
  const { courseId, chapterId, lessonId } = useParams<{ courseId: string; chapterId: string; lessonId: string }>();
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Determine if this is the Dart intro lesson
  const isDartIntroLesson = courseId === "flutter-ui-mastery" &&
    chapterId === "flutter-basics" &&
    lessonId === "introduction-to-dart";

  // Mock data for the lesson content - replace with real data fetching
  const course = courseId ? coursesData[courseId] : null;
  const chapter = course?.chapters?.find((c: any) => c.id === chapterId);
  const lesson = chapter?.lessons?.find((l: any) => l.id === lessonId);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const isRTL = language === "ar";

  // Handle marking lesson as complete
  const handleCompleteLesson = () => {
    // In a real app, make API call to mark lesson as complete
    toast({
      title: language === "en" ? "Lesson completed!" : "تم إكمال الدرس!",
      description: language === "en" ? "Moving to the next lesson." : "الانتقال إلى الدرس التالي."
    });
  };

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  // Get next lesson
  const getNextLesson = () => {
    if (!chapter?.lessons) return null;
    const currentIndex = chapter.lessons.findIndex((l: any) => l.id === lessonId);
    return chapter.lessons[currentIndex + 1] || null;
  };

  const nextLesson = getNextLesson();

  // Loading state
  if (loading) {
    return (
      <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
        <Navbar />
        <main className="container px-4 mx-auto py-6">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              <div className="h-12 bg-gray-200 rounded w-3/4"></div>
              <div className="h-96 bg-gray-200 rounded"></div>
              <div className="h-32 bg-gray-200 rounded"></div>
              <div className="h-64 bg-gray-200 rounded"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!course || !chapter || !lesson) {
    return (
      <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
        <Navbar />
        <main className="container px-4 mx-auto py-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {language === "en" ? "Lesson not found" : "لم يتم العثور على الدرس"}
            </h2>
            <p className="text-gray-600 mb-6">
              {language === "en" ? "The lesson you're looking for doesn't exist." : "الدرس الذي تبحث عنه غير موجود."}
            </p>
            <Button asChild>
              <Link to={`/courses/${courseId}`}>
                {language === "en" ? "Back to Course" : "العودة إلى الدورة"}
              </Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  // Lesson content based on type
  const renderLessonContent = () => {
    if (isDartIntroLesson) {
      const content = dartLessonContent[language];

      return (
        <div className="space-y-8">
          {/* Video Section */}
          <div className="rounded-lg overflow-hidden border border-learning-border bg-gray-50">
            <div className="bg-blue-600 py-2 px-4 flex items-center">
              <Youtube className="h-5 w-5 text-white mr-2" />
              <h3 className="text-lg text-white font-semibold">{content.videoTitle}</h3>
            </div>
            <div className="p-4">
              <div className="aspect-video w-full mb-4">
                <iframe
                  className="w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/NrO0CJCbYLA?si=m0brfvdfDq9GKhc4"
                  title="Dart Programming Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>
              <p className="text-sm text-gray-600">{content.videoDescription}</p>
            </div>
          </div>

          {/* Article Content */}
          {content.sections.map((section, index) => (
            <div key={index} className="prose max-w-full">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-blue-700">
                {index === 0 ? <Info className="h-5 w-5" /> :
                  index === 1 ? <CheckCircle className="h-5 w-5" /> :
                    index === 2 ? <Code className="h-5 w-5" /> :
                      <Book className="h-5 w-5" />}
                {section.title}
              </h3>

              <div className="mt-2 text-gray-700 whitespace-pre-line">{section.content}</div>

              {section.code && (
                <div className="bg-gray-800 text-white rounded-lg p-4 my-4 overflow-x-auto">
                  <pre className="text-sm">
                    <code>{section.code}</code>
                  </pre>
                </div>
              )}
            </div>
          ))}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">
              {language === "en" ? "Ready to Practice?" : "مستعد للتطبيق؟"}
            </h3>
            <p className="text-blue-700">
              {language === "en"
                ? "Now that you understand the basics of Dart, the next lesson will guide you through creating your first Flutter widget!"
                : "الآن بعد أن فهمت أساسيات دارت، سيرشدك الدرس التالي خلال إنشاء أول عنصر Flutter الخاص بك!"}
            </p>
          </div>
        </div>
      );
    }

    // Default lesson content
    return (
      <div className="prose max-w-full mb-6">
        <p>{lesson.briefDescription[language]}</p>

        <div className="bg-gray-100 rounded-lg p-4 my-6">
          <pre className="text-sm overflow-x-auto">
            <code className="language-python">
              # Example code
              import numpy as np
              import pandas as pd

              # Load data
              data = pd.read_csv('data.csv')
              print(data.head())
            </code>
          </pre>
        </div>

        <p>
          {language === "en"
            ? "This lesson covers the fundamentals of the topic. You'll learn the key concepts and practical applications."
            : "يغطي هذا الدرس أساسيات الموضوع. ستتعلم المفاهيم الأساسية والتطبيقات العملية."}
        </p>

        <h3 className="text-lg font-semibold mt-4">
          {language === "en" ? "Key Points" : "النقاط الرئيسية"}
        </h3>
        <ul>
          <li>{language === "en" ? "Understanding the core concepts" : "فهم المفاهيم الأساسية"}</li>
          <li>{language === "en" ? "Practical implementation steps" : "خطوات التنفيذ العملي"}</li>
          <li>{language === "en" ? "Common challenges and solutions" : "التحديات الشائعة والحلول"}</li>
        </ul>

        <div className="border-t border-gray-200 my-6 pt-6">
          <p className="text-gray-700">
            {language === "en"
              ? "With these steps, you are ready to continue your learning journey!"
              : "بهذه الخطوات، أنت مستعد لمواصلة رحلة التعلم!"}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <Navbar />

      <main className="container px-4 mx-auto py-6">
        <div className="max-w-4xl mx-auto">
          {/* Top navigation */}
          <div className="flex justify-between items-center mb-4">
            <Link to={`/courses/${courseId}/chapters/${chapterId}`} className="flex items-center text-learning-primary hover:underline">
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>{language === "en" ? "Back to Chapter" : "العودة إلى الفصل"}</span>
            </Link>

            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
            >
              {language === "en" ? "العربية" : "English"}
            </Button>
          </div>

          {/* Lesson content */}
          <div className="bg-white border border-learning-border rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-4 px-6">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <h1 className="text-xl font-bold">{lesson.title[language]}</h1>
              </div>
              <div className="flex items-center text-sm text-blue-100 mt-1">
                <Book className="h-4 w-4 mr-1" />
                <span>{chapter.title[language]} • {course.title[language]}</span>
              </div>
            </div>

            <div className="p-6">
              {renderLessonContent()}

              <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-200">
                {lesson.hasQuiz ? (
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <Link to={`/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}/quiz`}>
                      <FileText className="mr-2 h-4 w-4" />
                      {language === "en" ? "Go to Quiz" : "انتقل إلى الاختبار"}
                    </Link>
                  </Button>
                ) : nextLesson ? (
                  <Button asChild onClick={handleCompleteLesson} className="blue-gradient">
                    <Link to={`/courses/${courseId}/chapters/${chapterId}/lessons/${nextLesson.id}`}>
                      {language === "en" ? "Next Lesson" : "الدرس التالي"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button asChild onClick={handleCompleteLesson} className="bg-blue-600 hover:bg-blue-700">
                    <Link to={`/courses/${courseId}/chapters/${chapterId}`}>
                      {language === "en" ? "Complete Chapter" : "إكمال الفصل"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LessonDetailPage;
