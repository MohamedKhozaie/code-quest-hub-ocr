
export interface Lesson {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  briefDescription: {
    en: string;
    ar: string;
  };
  contentPlaceholder: {
    en: string;
    ar: string;
  };
  hasQuiz: boolean;
  isCompleted?: boolean;
}

export interface Chapter {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  lessons: Lesson[];
  isCompleted?: boolean;
}

export interface Course {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  briefDescription: {
    en: string;
    ar: string;
  };
  detailedDescription: {
    en: string;
    ar: string;
  };
  category: {
    en: string;
    ar: string;
  };
  language: {
    en: string;
    ar: string;
  };
  image: string;
  imagePlaceholder: {
    en: string;
    ar: string;
  };
  chapters: Chapter[];
}

const coursesData: Record<string, Course> = {
  "flutter-ui-mastery": {
    id: "flutter-ui-mastery",
    title: {
      en: "Flutter UI Mastery",
      ar: "إتقان واجهات المستخدم باستخدام Flutter"
    },
    briefDescription: {
      en: "Learn to build beautiful mobile UIs with Flutter",
      ar: "تعلم كيفية بناء واجهات مستخدم جميلة لتطبيقات الهواتف المحمولة باستخدام Flutter"
    },
    detailedDescription: {
      en: "Master the art of creating stunning and responsive user interfaces for mobile applications using Flutter. This comprehensive course covers everything from basic Flutter widgets to advanced UI techniques. Whether you're a beginner looking to start your mobile development journey or an experienced developer wanting to add Flutter to your skill set, this course will guide you through building professional-grade mobile applications with beautiful UIs.",
      ar: "أتقن فن إنشاء واجهات مستخدم مذهلة ومتجاوبة لتطبيقات الهواتف المحمولة باستخدام Flutter. تغطي هذه الدورة الشاملة كل شيء من عناصر Flutter الأساسية إلى تقنيات واجهة المستخدم المتقدمة. سواء كنت مبتدئًا تتطلع إلى بدء رحلتك في تطوير تطبيقات الهواتف المحمولة أو مطورًا متمرسًا ترغب في إضافة Flutter إلى مجموعة مهاراتك، ستوجهك هذه الدورة خلال بناء تطبيقات محمولة احترافية بواجهات مستخدم جميلة."
    },
    category: {
      en: "Mobile Development",
      ar: "تطوير تطبيقات الهواتف المحمولة"
    },
    language: {
      en: "English",
      ar: "الإنجليزية"
    },
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop",
    imagePlaceholder: {
      en: "Flutter logo with beautiful UI design on a phone screen",
      ar: "شعار Flutter مع تصميم واجهة مستخدم جميلة على شاشة هاتف"
    },
    chapters: [
      {
        id: "flutter-basics",
        title: {
          en: "Flutter Basics",
          ar: "أساسيات Flutter"
        },
        lessons: [
          {
            id: "introduction-to-dart",
            title: {
              en: "Introduction to Dart Programming",
              ar: "مقدمة في برمجة Dart"
            },
            briefDescription: {
              en: "Learn the fundamentals of Dart language used in Flutter",
              ar: "تعلم أساسيات لغة Dart المستخدمة في Flutter"
            },
            contentPlaceholder: {
              en: "Explanation of Dart syntax, variables, control flow, and functions with code examples. Includes comparative diagrams between Dart and other languages.",
              ar: "شرح لتركيب Dart، المتغيرات، تدفق التحكم، والدوال مع أمثلة برمجية. يتضمن رسومًا توضيحية مقارنة بين Dart واللغات الأخرى."
            },
            hasQuiz: true,
            isCompleted: true
          },
          {
            id: "flutter-widgets",
            title: {
              en: "Flutter Widgets and Layout Basics",
              ar: "عناصر Flutter وأساسيات التخطيط"
            },
            briefDescription: {
              en: "Understand the core widget concepts in Flutter",
              ar: "فهم مفاهيم العناصر الأساسية في Flutter"
            },
            contentPlaceholder: {
              en: "Detailed explanation of stateless and stateful widgets with examples. Visual diagrams of widget tree and layout principles. Code samples for creating basic UI elements.",
              ar: "شرح مفصل للعناصر الثابتة والمتغيرة مع أمثلة. رسوم بيانية لشجرة العناصر ومبادئ التخطيط. عينات كود لإنشاء عناصر واجهة مستخدم أساسية."
            },
            hasQuiz: true,
            isCompleted: true
          },
          {
            id: "stateful-widgets",
            title: {
              en: "Working with Stateful Widgets",
              ar: "العمل مع العناصر المتغيرة (Stateful)"
            },
            briefDescription: {
              en: "Learn to create dynamic, interactive UI elements",
              ar: "تعلم إنشاء عناصر واجهة مستخدم ديناميكية وتفاعلية"
            },
            contentPlaceholder: {
              en: "Tutorial on managing state in Flutter applications. Code examples showing state changes and UI updates. Interactive diagrams explaining state lifecycle.",
              ar: "دروس حول إدارة الحالة في تطبيقات Flutter. أمثلة برمجية توضح تغييرات الحالة وتحديثات واجهة المستخدم. رسوم توضيحية تفاعلية تشرح دورة حياة الحالة."
            },
            hasQuiz: true,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "advanced-ui",
        title: {
          en: "Advanced UI Components",
          ar: "مكونات واجهة المستخدم المتقدمة"
        },
        lessons: [
          {
            id: "custom-widgets",
            title: {
              en: "Creating Custom Widgets",
              ar: "إنشاء عناصر مخصصة"
            },
            briefDescription: {
              en: "Design and implement your own reusable widgets",
              ar: "تصميم وتنفيذ عناصرك القابلة لإعادة الاستخدام"
            },
            contentPlaceholder: {
              en: "Step-by-step guide to creating custom widgets. Best practices for widget composition and reusability. Code examples for complex custom components.",
              ar: "دليل خطوة بخطوة لإنشاء عناصر مخصصة. أفضل الممارسات لتكوين العناصر وإعادة استخدامها. أمثلة برمجية لمكونات مخصصة معقدة."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "animations",
            title: {
              en: "Animations and Motion",
              ar: "الرسوم المتحركة والحركة"
            },
            briefDescription: {
              en: "Implement smooth animations in your Flutter apps",
              ar: "تنفيذ الرسوم المتحركة السلسة في تطبيقات Flutter"
            },
            contentPlaceholder: {
              en: "Tutorial on different animation types in Flutter. Code examples for implicit and explicit animations. Visual demonstrations of animation effects and timing.",
              ar: "دروس عن أنواع الرسوم المتحركة المختلفة في Flutter. أمثلة برمجية للرسوم المتحركة الضمنية والصريحة. عروض مرئية لتأثيرات الرسوم المتحركة والتوقيت."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "responsive-design",
            title: {
              en: "Responsive Design Patterns",
              ar: "أنماط التصميم المتجاوب"
            },
            briefDescription: {
              en: "Create UIs that adapt to different screen sizes",
              ar: "إنشاء واجهات مستخدم تتكيف مع أحجام الشاشات المختلفة"
            },
            contentPlaceholder: {
              en: "Techniques for building responsive layouts. MediaQuery usage and device size detection. Examples of adaptive UIs for phones and tablets.",
              ar: "تقنيات لبناء تخطيطات متجاوبة. استخدام MediaQuery واكتشاف حجم الجهاز. أمثلة على واجهات المستخدم التكيفية للهواتف والأجهزة اللوحية."
            },
            hasQuiz: true,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "flutter-themes",
        title: {
          en: "Theming and Styling",
          ar: "السمات والتنسيق"
        },
        lessons: [
          {
            id: "material-design",
            title: {
              en: "Material Design Implementation",
              ar: "تنفيذ Material Design"
            },
            briefDescription: {
              en: "Apply Google's Material Design guidelines in Flutter",
              ar: "تطبيق إرشادات Material Design من Google في Flutter"
            },
            contentPlaceholder: {
              en: "Overview of Material Design components in Flutter. ThemeData configuration and customization. Visual examples of Material Design principles in action.",
              ar: "نظرة عامة على مكونات Material Design في Flutter. تكوين وتخصيص ThemeData. أمثلة مرئية لمبادئ Material Design قيد التنفيذ."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "custom-themes",
            title: {
              en: "Creating Custom Themes",
              ar: "إنشاء سمات مخصصة"
            },
            briefDescription: {
              en: "Design and implement unique visual styles for your apps",
              ar: "تصميم وتنفيذ أنماط بصرية فريدة لتطبيقاتك"
            },
            contentPlaceholder: {
              en: "Guide to creating consistent app themes. Color palette selection and typography rules. Examples of brand-consistent UI themes.",
              ar: "دليل لإنشاء سمات تطبيق متناسقة. اختيار لوحة الألوان وقواعد الطباعة. أمثلة لسمات واجهة المستخدم المتناسقة مع العلامة التجارية."
            },
            hasQuiz: false,
            isCompleted: false
          },
          {
            id: "dark-light-modes",
            title: {
              en: "Dark and Light Mode Implementation",
              ar: "تنفيذ الوضع المظلم والوضع الفاتح"
            },
            briefDescription: {
              en: "Add theme switching capabilities to your applications",
              ar: "إضافة إمكانات تبديل السمات إلى تطبيقاتك"
            },
            contentPlaceholder: {
              en: "Tutorial on implementing dual themes. State management for theme preferences. Code examples for smooth theme transitions.",
              ar: "دروس حول تنفيذ السمات المزدوجة. إدارة الحالة لتفضيلات السمات. أمثلة برمجية للانتقالات السلسة بين السمات."
            },
            hasQuiz: true,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "flutter-projects",
        title: {
          en: "Practical Projects",
          ar: "مشاريع عملية"
        },
        lessons: [
          {
            id: "social-app-ui",
            title: {
              en: "Building a Social Media App UI",
              ar: "بناء واجهة مستخدم لتطبيق وسائط اجتماعية"
            },
            briefDescription: {
              en: "Create a complete social media interface with Flutter",
              ar: "إنشاء واجهة وسائط اجتماعية كاملة باستخدام Flutter"
            },
            contentPlaceholder: {
              en: "Step-by-step project building a social media app interface. Feed design, profile screens, and interaction components. Code for complex UI elements like stories and posts.",
              ar: "مشروع خطوة بخطوة لبناء واجهة تطبيق وسائط اجتماعية. تصميم التغذية، شاشات الملف الشخصي، ومكونات التفاعل. كود لعناصر واجهة المستخدم المعقدة مثل القصص والمنشورات."
            },
            hasQuiz: false,
            isCompleted: false
          },
          {
            id: "e-commerce-interface",
            title: {
              en: "E-commerce App Interface",
              ar: "واجهة تطبيق التجارة الإلكترونية"
            },
            briefDescription: {
              en: "Design a complete shopping app UI with product listings",
              ar: "تصميم واجهة مستخدم كاملة لتطبيق تسوق مع قوائم المنتجات"
            },
            contentPlaceholder: {
              en: "Project tutorial for building an e-commerce interface. Product listing, details, and cart screens. Implementation of filtering and search functionality.",
              ar: "دروس المشروع لبناء واجهة التجارة الإلكترونية. عرض المنتجات، التفاصيل، وشاشات سلة التسوق. تنفيذ وظائف التصفية والبحث."
            },
            hasQuiz: false,
            isCompleted: false
          },
          {
            id: "final-project",
            title: {
              en: "Final Course Project",
              ar: "المشروع النهائي للدورة"
            },
            briefDescription: {
              en: "Apply everything you've learned in a comprehensive app",
              ar: "تطبيق كل ما تعلمته في تطبيق شامل"
            },
            contentPlaceholder: {
              en: "Comprehensive project combining all course concepts. Requirements specification and design planning. Complete implementation with custom themes, animations, and responsive design.",
              ar: "مشروع شامل يجمع بين جميع مفاهيم الدورة. مواصفات المتطلبات وتخطيط التصميم. تنفيذ كامل مع سمات مخصصة، رسوم متحركة، وتصميم متجاوب."
            },
            hasQuiz: true,
            isCompleted: false
          }
        ],
        isCompleted: false
      }
    ]
  },
  "python-data-science": {
    id: "python-data-science",
    title: {
      en: "Python for Data Science",
      ar: "بايثون لعلم البيانات"
    },
    briefDescription: {
      en: "Master data analysis and visualization with Python",
      ar: "إتقان تحليل البيانات والتصور باستخدام بايثون"
    },
    detailedDescription: {
      en: "Dive into the world of data science with Python, the most popular programming language for data analysis. This course covers essential Python libraries like Pandas, NumPy, and Matplotlib, and guides you through the entire data science workflow from data collection to visualization and interpretation. Whether you're a complete beginner or have some programming experience, this course will equip you with the skills to extract valuable insights from complex datasets.",
      ar: "انغمس في عالم علم البيانات مع بايثون، اللغة البرمجية الأكثر شعبية لتحليل البيانات. تغطي هذه الدورة مكتبات بايثون الأساسية مثل Pandas وNumPy وMatplotlib، وترشدك خلال سير عمل علم البيانات بالكامل من جمع البيانات إلى التصور والتفسير. سواء كنت مبتدئًا تمامًا أو لديك بعض الخبرة في البرمجة، ستزودك هذه الدورة بالمهارات اللازمة لاستخراج رؤى قيمة من مجموعات البيانات المعقدة."
    },
    category: {
      en: "Data Science",
      ar: "علم البيانات"
    },
    language: {
      en: "English",
      ar: "الإنجليزية"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
    imagePlaceholder: {
      en: "Python logo with data analysis charts and graphs",
      ar: "شعار بايثون مع رسوم بيانية لتحليل البيانات"
    },
    chapters: [
      {
        id: "python-foundations",
        title: {
          en: "Python Foundations for Data Science",
          ar: "أساسيات بايثون لعلم البيانات"
        },
        lessons: [
          {
            id: "intro-to-python",
            title: {
              en: "Introduction to Python for Data Analysis",
              ar: "مقدمة في بايثون لتحليل البيانات"
            },
            briefDescription: {
              en: "Learn why Python is the preferred language for data science",
              ar: "تعرف لماذا بايثون هي اللغة المفضلة لعلم البيانات"
            },
            contentPlaceholder: {
              en: "Overview of Python's role in data science. Comparison with other programming languages. Introduction to Jupyter notebooks and basic Python syntax.",
              ar: "نظرة عامة على دور بايثون في علم البيانات. مقارنة مع لغات البرمجة الأخرى. مقدمة إلى دفاتر Jupyter وتركيب بايثون الأساسي."
            },
            hasQuiz: true,
            isCompleted: true
          },
          {
            id: "python-data-structures",
            title: {
              en: "Python Data Structures for Data Analysis",
              ar: "هياكل بيانات بايثون لتحليل البيانات"
            },
            briefDescription: {
              en: "Master lists, dictionaries, and other Python data structures",
              ar: "إتقان القوائم والقواميس وهياكل بيانات بايثون الأخرى"
            },
            contentPlaceholder: {
              en: "Detailed explanation of Python's built-in data structures. Code examples for manipulating lists, dictionaries, sets, and tuples. Practice exercises with real-world data.",
              ar: "شرح مفصل لهياكل البيانات المدمجة في بايثون. أمثلة برمجية للتعامل مع القوائم والقواميس والمجموعات والمتتاليات. تمارين عملية مع بيانات من العالم الحقيقي."
            },
            hasQuiz: true,
            isCompleted: true
          },
          {
            id: "functions-control-flow",
            title: {
              en: "Functions and Control Flow",
              ar: "الدوال وتدفق التحكم"
            },
            briefDescription: {
              en: "Write efficient Python code with functions and control statements",
              ar: "كتابة كود بايثون فعال باستخدام الدوال وعبارات التحكم"
            },
            contentPlaceholder: {
              en: "Tutorial on defining and using functions in Python. Control flow statements including if-else, loops, and list comprehensions. Example functions for data preprocessing tasks.",
              ar: "دروس حول تعريف واستخدام الدوال في بايثون. عبارات تدفق التحكم بما في ذلك if-else، الحلقات، وقوائم الاستيعاب. أمثلة دوال لمهام معالجة البيانات المسبقة."
            },
            hasQuiz: true,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "numpy-pandas",
        title: {
          en: "NumPy and Pandas Fundamentals",
          ar: "أساسيات NumPy و Pandas"
        },
        lessons: [
          {
            id: "numpy-arrays",
            title: {
              en: "Working with NumPy Arrays",
              ar: "العمل مع مصفوفات NumPy"
            },
            briefDescription: {
              en: "Learn to use NumPy for numerical computing in Python",
              ar: "تعلم استخدام NumPy للحوسبة العددية في بايثون"
            },
            contentPlaceholder: {
              en: "Introduction to NumPy arrays and vectorized operations. Performance benefits over Python lists. Mathematical operations and broadcasting with NumPy.",
              ar: "مقدمة إلى مصفوفات NumPy والعمليات المتجهية. فوائد الأداء مقارنة بقوائم بايثون. العمليات الرياضية والبث باستخدام NumPy."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "pandas-dataframes",
            title: {
              en: "Data Manipulation with Pandas",
              ar: "معالجة البيانات باستخدام Pandas"
            },
            briefDescription: {
              en: "Master DataFrame operations for effective data analysis",
              ar: "إتقان عمليات DataFrame لتحليل البيانات الفعال"
            },
            contentPlaceholder: {
              en: "Comprehensive guide to Pandas DataFrames and Series. Data loading, filtering, grouping, and aggregation. Handling missing data and data cleaning techniques.",
              ar: "دليل شامل لـ DataFrames و Series في Pandas. تحميل البيانات، التصفية، التجميع، والتلخيص. التعامل مع البيانات المفقودة وتقنيات تنظيف البيانات."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "data-transformation",
            title: {
              en: "Data Transformation and Feature Engineering",
              ar: "تحويل البيانات وهندسة الميزات"
            },
            briefDescription: {
              en: "Learn techniques to prepare data for analysis and modeling",
              ar: "تعلم تقنيات تحضير البيانات للتحليل والنمذجة"
            },
            contentPlaceholder: {
              en: "Methods for transforming data structures and types. Feature engineering techniques for machine learning. Working with datetime, categorical, and text data.",
              ar: "طرق تحويل هياكل وأنواع البيانات. تقنيات هندسة الميزات للتعلم الآلي. العمل مع بيانات التاريخ والوقت، البيانات الفئوية، والنصوص."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "data-merging",
            title: {
              en: "Merging and Joining Datasets",
              ar: "دمج وربط مجموعات البيانات"
            },
            briefDescription: {
              en: "Combine multiple datasets for comprehensive analysis",
              ar: "دمج مجموعات بيانات متعددة للتحليل الشامل"
            },
            contentPlaceholder: {
              en: "Various methods of combining datasets in Pandas. Different join types (inner, outer, left, right) with examples. Handling duplicate data during merging operations.",
              ar: "طرق مختلفة لدمج مجموعات البيانات في Pandas. أنواع الانضمام المختلفة (داخلي، خارجي، يسار، يمين) مع أمثلة. التعامل مع البيانات المكررة أثناء عمليات الدمج."
            },
            hasQuiz: false,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "data-visualization",
        title: {
          en: "Data Visualization with Python",
          ar: "تصور البيانات باستخدام بايثون"
        },
        lessons: [
          {
            id: "matplotlib-basics",
            title: {
              en: "Creating Basic Charts with Matplotlib",
              ar: "إنشاء مخططات أساسية باستخدام Matplotlib"
            },
            briefDescription: {
              en: "Learn to create various types of plots with Matplotlib",
              ar: "تعلم إنشاء أنواع مختلفة من المخططات باستخدام Matplotlib"
            },
            contentPlaceholder: {
              en: "Introduction to Matplotlib's plotting functions. Creating line charts, bar charts, scatter plots, and histograms. Customizing plot appearance and saving figures.",
              ar: "مقدمة إلى وظائف الرسم في Matplotlib. إنشاء مخططات خطية، مخططات شريطية، مخططات التشتت، والمدرجات التكرارية. تخصيص مظهر المخططات وحفظ الأشكال."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "seaborn-advanced",
            title: {
              en: "Advanced Visualization with Seaborn",
              ar: "التصور المتقدم باستخدام Seaborn"
            },
            briefDescription: {
              en: "Create more sophisticated statistical visualizations",
              ar: "إنشاء تصورات إحصائية أكثر تطوراً"
            },
            contentPlaceholder: {
              en: "Overview of Seaborn for statistical data visualization. Creating heatmaps, pair plots, joint distributions, and regression plots. Customizing Seaborn plots for professional presentations.",
              ar: "نظرة عامة على Seaborn لتصور البيانات الإحصائية. إنشاء خرائط حرارية، مخططات زوجية، توزيعات مشتركة، ومخططات الانحدار. تخصيص مخططات Seaborn للعروض التقديمية الاحترافية."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "interactive-viz",
            title: {
              en: "Interactive Visualizations with Plotly",
              ar: "التصورات التفاعلية باستخدام Plotly"
            },
            briefDescription: {
              en: "Create interactive charts for dynamic data exploration",
              ar: "إنشاء مخططات تفاعلية لاستكشاف البيانات الديناميكي"
            },
            contentPlaceholder: {
              en: "Introduction to Plotly Express for interactive visualizations. Creating interactive scatter plots, line charts, and 3D visualizations. Adding hover information and animations to plots.",
              ar: "مقدمة إلى Plotly Express للتصورات التفاعلية. إنشاء مخططات تشتت تفاعلية، مخططات خطية، وتصورات ثلاثية الأبعاد. إضافة معلومات التحويم والرسوم المتحركة إلى المخططات."
            },
            hasQuiz: false,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "data-analysis",
        title: {
          en: "Practical Data Analysis",
          ar: "تحليل البيانات العملي"
        },
        lessons: [
          {
            id: "exploratory-analysis",
            title: {
              en: "Exploratory Data Analysis",
              ar: "تحليل البيانات الاستكشافي"
            },
            briefDescription: {
              en: "Learn systematic approaches to understand your datasets",
              ar: "تعلم نهج منهجي لفهم مجموعات البيانات الخاصة بك"
            },
            contentPlaceholder: {
              en: "Methods for initial data exploration. Descriptive statistics and distribution analysis. Identifying patterns, relationships, and anomalies in data.",
              ar: "طرق الاستكشاف الأولي للبيانات. الإحصاءات الوصفية وتحليل التوزيع. تحديد الأنماط والعلاقات والشذوذ في البيانات."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "statistical-analysis",
            title: {
              en: "Statistical Analysis with Python",
              ar: "التحليل الإحصائي باستخدام بايثون"
            },
            briefDescription: {
              en: "Apply statistical methods to derive insights from data",
              ar: "تطبيق الأساليب الإحصائية لاستخلاص الرؤى من البيانات"
            },
            contentPlaceholder: {
              en: "Implementation of statistical tests in Python. Correlation analysis, hypothesis testing, and confidence intervals. Practical examples using real-world datasets.",
              ar: "تنفيذ الاختبارات الإحصائية في بايثون. تحليل الارتباط، اختبار الفرضيات، وفترات الثقة. أمثلة عملية باستخدام مجموعات بيانات من العالم الحقيقي."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "case-study",
            title: {
              en: "Data Science Case Study",
              ar: "دراسة حالة في علم البيانات"
            },
            briefDescription: {
              en: "Apply all learned concepts to a real-world analysis project",
              ar: "تطبيق جميع المفاهيم المكتسبة على مشروع تحليل من العالم الحقيقي"
            },
            contentPlaceholder: {
              en: "End-to-end data analysis project. Data acquisition, cleaning, exploration, visualization, and interpretation. Presenting findings and actionable insights.",
              ar: "مشروع تحليل بيانات شامل. اكتساب البيانات، التنظيف، الاستكشاف، التصور، والتفسير. تقديم النتائج والرؤى القابلة للتنفيذ."
            },
            hasQuiz: true,
            isCompleted: false
          }
        ],
        isCompleted: false
      }
    ]
  },
  "javascript-fullstack": {
    id: "javascript-fullstack",
    title: {
      en: "JavaScript Full-Stack Development",
      ar: "تطوير تطبيقات الويب المتكاملة باستخدام JavaScript"
    },
    briefDescription: {
      en: "Build complete web applications with JavaScript",
      ar: "بناء تطبيقات ويب متكاملة باستخدام JavaScript"
    },
    detailedDescription: {
      en: "Become a versatile developer capable of building end-to-end web applications using JavaScript throughout the entire stack. This comprehensive course covers frontend development with modern frameworks, backend development with Node.js, database integration, and deployment. By the end, you'll be able to design, build, and deploy complete web applications independently, making you a valuable full-stack JavaScript developer ready for today's job market.",
      ar: "كن مطورًا متعدد المهارات قادرًا على بناء تطبيقات ويب كاملة باستخدام JavaScript في جميع طبقات التطبيق. تغطي هذه الدورة الشاملة تطوير الواجهة الأمامية باستخدام الأطر الحديثة، وتطوير الخلفية باستخدام Node.js، وتكامل قواعد البيانات، والنشر. بحلول النهاية، ستكون قادرًا على تصميم وبناء ونشر تطبيقات ويب كاملة بشكل مستقل، مما يجعلك مطورًا قيمًا للـ JavaScript الشامل جاهزًا لسوق العمل اليوم."
    },
    category: {
      en: "Web Development",
      ar: "تطوير الويب"
    },
    language: {
      en: "English",
      ar: "الإنجليزية"
    },
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
    imagePlaceholder: {
      en: "HTML, CSS, JavaScript, and Node.js logos grouped together",
      ar: "شعارات HTML و CSS و JavaScript و Node.js مجمعة معًا"
    },
    chapters: [
      {
        id: "js-fundamentals",
        title: {
          en: "JavaScript Fundamentals",
          ar: "أساسيات JavaScript"
        },
        lessons: [
          {
            id: "js-intro",
            title: {
              en: "Introduction to Modern JavaScript",
              ar: "مقدمة في JavaScript الحديثة"
            },
            briefDescription: {
              en: "Learn the core concepts of JavaScript ES6+ syntax",
              ar: "تعلم المفاهيم الأساسية لتركيب JavaScript ES6+"
            },
            contentPlaceholder: {
              en: "Overview of JavaScript's role in web development. ES6+ features like arrow functions, destructuring, and template literals. Setting up a development environment with Node.js.",
              ar: "نظرة عامة على دور JavaScript في تطوير الويب. ميزات ES6+ مثل الدوال السهمية، والتفكيك، والحرفيات القالبية. إعداد بيئة تطوير مع Node.js."
            },
            hasQuiz: true,
            isCompleted: true
          },
          {
            id: "data-types-objects",
            title: {
              en: "Data Types and Objects in JavaScript",
              ar: "أنواع البيانات والكائنات في JavaScript"
            },
            briefDescription: {
              en: "Master JavaScript's data structures and object-oriented features",
              ar: "إتقان هياكل البيانات وميزات البرمجة كائنية التوجه في JavaScript"
            },
            contentPlaceholder: {
              en: "Detailed explanation of JavaScript's primitive and reference types. Working with objects, arrays, and JSON. Object-oriented programming concepts in JavaScript.",
              ar: "شرح مفصل لأنواع البيانات الأساسية والمرجعية في JavaScript. العمل مع الكائنات، المصفوفات، و JSON. مفاهيم البرمجة كائنية التوجه في JavaScript."
            },
            hasQuiz: true,
            isCompleted: true
          },
          {
            id: "functions-scope",
            title: {
              en: "Functions, Scope, and Closures",
              ar: "الدوال، النطاق، والإغلاقات"
            },
            briefDescription: {
              en: "Understand advanced JavaScript function concepts",
              ar: "فهم مفاهيم الدوال المتقدمة في JavaScript"
            },
            contentPlaceholder: {
              en: "Deep dive into JavaScript functions and their behavior. Scope chains, closures, and the 'this' keyword. Higher-order functions and functional programming patterns.",
              ar: "تعمق في دوال JavaScript وسلوكها. سلاسل النطاق، الإغلاقات، وكلمة 'this'. الدوال عالية الرتبة وأنماط البرمجة الوظيفية."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "async-programming",
            title: {
              en: "Asynchronous JavaScript",
              ar: "البرمجة غير المتزامنة في JavaScript"
            },
            briefDescription: {
              en: "Master promises, async/await, and event handling",
              ar: "إتقان الوعود، async/await، والتعامل مع الأحداث"
            },
            contentPlaceholder: {
              en: "Evolution of asynchronous patterns in JavaScript. Working with Promises and async/await. Handling events and managing asynchronous flows.",
              ar: "تطور أنماط البرمجة غير المتزامنة في JavaScript. العمل مع الوعود و async/await. التعامل مع الأحداث وإدارة التدفقات غير المتزامنة."
            },
            hasQuiz: true,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "frontend-dev",
        title: {
          en: "Frontend Development with React",
          ar: "تطوير الواجهة الأمامية باستخدام React"
        },
        lessons: [
          {
            id: "react-basics",
            title: {
              en: "React Fundamentals",
              ar: "أساسيات React"
            },
            briefDescription: {
              en: "Learn to build user interfaces with React",
              ar: "تعلم بناء واجهات المستخدم باستخدام React"
            },
            contentPlaceholder: {
              en: "Introduction to React and its component-based architecture. Creating functional components and using JSX. Managing component state and props.",
              ar: "مقدمة في React وبنيتها القائمة على المكونات. إنشاء المكونات الوظيفية واستخدام JSX. إدارة حالة المكونات والخصائص."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "react-hooks",
            title: {
              en: "React Hooks and State Management",
              ar: "خطافات React وإدارة الحالة"
            },
            briefDescription: {
              en: "Master modern React state management techniques",
              ar: "إتقان تقنيات إدارة الحالة الحديثة في React"
            },
            contentPlaceholder: {
              en: "Comprehensive guide to React hooks (useState, useEffect, useContext). Global state management with Context API. Introduction to state management libraries.",
              ar: "دليل شامل لخطافات React (useState، useEffect، useContext). إدارة الحالة العالمية باستخدام Context API. مقدمة إلى مكتبات إدارة الحالة."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "router-api",
            title: {
              en: "Routing and API Integration",
              ar: "التوجيه وتكامل واجهات برمجة التطبيقات"
            },
            briefDescription: {
              en: "Build multi-page applications with data from APIs",
              ar: "بناء تطبيقات متعددة الصفحات مع بيانات من واجهات برمجة التطبيقات"
            },
            contentPlaceholder: {
              en: "Implementing client-side routing with React Router. Making API calls with Fetch and Axios. Handling loading states and errors in API interactions.",
              ar: "تنفيذ التوجيه من جانب العميل باستخدام React Router. إجراء استدعاءات API باستخدام Fetch و Axios. التعامل مع حالات التحميل والأخطاء في تفاعلات API."
            },
            hasQuiz: false,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "backend-dev",
        title: {
          en: "Backend Development with Node.js",
          ar: "تطوير الخلفية باستخدام Node.js"
        },
        lessons: [
          {
            id: "node-basics",
            title: {
              en: "Node.js and Express Fundamentals",
              ar: "أساسيات Node.js و Express"
            },
            briefDescription: {
              en: "Learn to create web servers and APIs with Node.js",
              ar: "تعلم إنشاء خوادم الويب و APIs باستخدام Node.js"
            },
            contentPlaceholder: {
              en: "Introduction to Node.js runtime and npm. Building a basic server with Express. RESTful API design principles and implementation.",
              ar: "مقدمة في بيئة تشغيل Node.js و npm. بناء خادم أساسي باستخدام Express. مبادئ تصميم وتنفيذ واجهات برمجة التطبيقات RESTful."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "database-integration",
            title: {
              en: "Database Integration with MongoDB",
              ar: "تكامل قواعد البيانات مع MongoDB"
            },
            briefDescription: {
              en: "Connect your Node.js applications to MongoDB databases",
              ar: "ربط تطبيقات Node.js الخاصة بك بقواعد بيانات MongoDB"
            },
            contentPlaceholder: {
              en: "Setting up MongoDB and connecting to a Node.js application. Creating data models with Mongoose. CRUD operations and database queries.",
              ar: "إعداد MongoDB والاتصال بتطبيق Node.js. إنشاء نماذج البيانات باستخدام Mongoose. عمليات CRUD واستعلامات قواعد البيانات."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "auth-security",
            title: {
              en: "Authentication and Security",
              ar: "المصادقة والأمان"
            },
            briefDescription: {
              en: "Implement user authentication and secure your applications",
              ar: "تنفيذ مصادقة المستخدم وتأمين تطبيقاتك"
            },
            contentPlaceholder: {
              en: "User authentication with JWT and sessions. Password hashing and security best practices. Authorization and access control in Express applications.",
              ar: "مصادقة المستخدم باستخدام JWT والجلسات. تجزئة كلمات المرور وأفضل ممارسات الأمان. التفويض والتحكم في الوصول في تطبيقات Express."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "api-testing",
            title: {
              en: "API Testing and Documentation",
              ar: "اختبار وتوثيق واجهة برمجة التطبيقات"
            },
            briefDescription: {
              en: "Learn to test and document your backend APIs",
              ar: "تعلم اختبار وتوثيق واجهات برمجة التطبيقات الخلفية الخاصة بك"
            },
            contentPlaceholder: {
              en: "Testing Node.js applications with Jest and Supertest. Creating API documentation with Swagger/OpenAPI. Error handling and logging in production applications.",
              ar: "اختبار تطبيقات Node.js باستخدام Jest و Supertest. إنشاء وثائق API باستخدام Swagger/OpenAPI. معالجة الأخطاء وتسجيل السجلات في تطبيقات الإنتاج."
            },
            hasQuiz: false,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "fullstack-project",
        title: {
          en: "Full-Stack Project Development",
          ar: "تطوير مشروع متكامل"
        },
        lessons: [
          {
            id: "project-planning",
            title: {
              en: "Project Planning and Architecture",
              ar: "تخطيط وهندسة المشروع"
            },
            briefDescription: {
              en: "Design the architecture of a full-stack application",
              ar: "تصميم بنية تطبيق متكامل"
            },
            contentPlaceholder: {
              en: "Requirements gathering and application design. Frontend and backend architecture planning. Database schema design and API endpoints specification.",
              ar: "جمع المتطلبات وتصميم التطبيق. تخطيط بنية الواجهة الأمامية والخلفية. تصميم مخطط قاعدة البيانات ومواصفات نقاط نهاية API."
            },
            hasQuiz: false,
            isCompleted: false
          },
          {
            id: "frontend-implementation",
            title: {
              en: "Frontend Implementation",
              ar: "تنفيذ الواجهة الأمامية"
            },
            briefDescription: {
              en: "Build the user interface for your full-stack project",
              ar: "بناء واجهة المستخدم لمشروعك المتكامل"
            },
            contentPlaceholder: {
              en: "Creating React components for the project. Implementing state management and routing. Connecting to backend APIs and handling responses.",
              ar: "إنشاء مكونات React للمشروع. تنفيذ إدارة الحالة والتوجيه. الاتصال بواجهات برمجة التطبيقات الخلفية ومعالجة الاستجابات."
            },
            hasQuiz: false,
            isCompleted: false
          },
          {
            id: "backend-implementation",
            title: {
              en: "Backend Implementation",
              ar: "تنفيذ الخلفية"
            },
            briefDescription: {
              en: "Create the server-side components for your application",
              ar: "إنشاء مكونات جانب الخادم لتطبيقك"
            },
            contentPlaceholder: {
              en: "Building Express API endpoints. Implementing data models and database operations. Adding authentication and authorization logic.",
              ar: "بناء نقاط نهاية Express API. تنفيذ نماذج البيانات وعمليات قاعدة البيانات. إضافة منطق المصادقة والتفويض."
            },
            hasQuiz: false,
            isCompleted: false
          },
          {
            id: "deployment",
            title: {
              en: "Testing and Deployment",
              ar: "الاختبار والنشر"
            },
            briefDescription: {
              en: "Test and deploy your full-stack application",
              ar: "اختبار ونشر تطبيقك المتكامل"
            },
            contentPlaceholder: {
              en: "Testing frontend and backend components. Preparing the application for production. Deployment options (Heroku, Netlify, AWS) and CI/CD pipelines.",
              ar: "اختبار مكونات الواجهة الأمامية والخلفية. تجهيز التطبيق للإنتاج. خيارات النشر (Heroku، Netlify، AWS) وخطوط أنابيب CI/CD."
            },
            hasQuiz: true,
            isCompleted: false
          }
        ],
        isCompleted: false
      }
    ]
  },
  "cyber-security": {
    id: "cyber-security",
    title: {
      en: "Cyber Security Fundamentals",
      ar: "أساسيات الأمن السيبراني"
    },
    briefDescription: {
      en: "Learn to protect systems and networks from digital attacks",
      ar: "تعلم حماية الأنظمة والشبكات من الهجمات الرقمية"
    },
    detailedDescription: {
      en: "Develop essential cybersecurity skills to protect information systems from threats and vulnerabilities. This course covers the fundamentals of network security, cryptography, ethical hacking, and security best practices. You'll learn to identify security risks, implement protection measures, and respond to security incidents. Whether you're looking to start a career in cybersecurity or add security skills to your current role, this course provides the foundation you need to understand and address digital security challenges.",
      ar: "طور مهارات الأمن السيبراني الأساسية لحماية أنظمة المعلومات من التهديدات ونقاط الضعف. تغطي هذه الدورة أساسيات أمن الشبكات، والتشفير، والقرصنة الأخلاقية، وأفضل ممارسات الأمان. ستتعلم تحديد مخاطر الأمان، وتنفيذ تدابير الحماية، والاستجابة لحوادث الأمان. سواء كنت تتطلع إلى بدء مهنة في الأمن السيبراني أو إضافة مهارات أمنية إلى دورك الحالي، توفر هذه الدورة الأساس الذي تحتاجه لفهم ومعالجة تحديات الأمن الرقمي."
    },
    category: {
      en: "Security",
      ar: "الأمن السيبراني"
    },
    language: {
      en: "English",
      ar: "الإنجليزية"
    },
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
    imagePlaceholder: {
      en: "Security shield with binary code in the background",
      ar: "درع أمان مع رموز ثنائية في الخلفية"
    },
    chapters: [
      {
        id: "security-basics",
        title: {
          en: "Introduction to Cybersecurity",
          ar: "مقدمة في الأمن السيبراني"
        },
        lessons: [
          {
            id: "security-landscape",
            title: {
              en: "The Cybersecurity Landscape",
              ar: "مشهد الأمن السيبراني"
            },
            briefDescription: {
              en: "Understand the current state of cybersecurity threats",
              ar: "فهم الحالة الراهنة للتهديدات السيبرانية"
            },
            contentPlaceholder: {
              en: "Overview of modern cybersecurity challenges and trends. Common attack vectors and threat actors. The evolving nature of cyber threats and defense mechanisms.",
              ar: "نظرة عامة على تحديات واتجاهات الأمن السيبراني الحديثة. متجهات الهجوم الشائعة والجهات الفاعلة المهددة. الطبيعة المتطورة للتهديدات السيبرانية وآليات الدفاع."
            },
            hasQuiz: true,
            isCompleted: true
          },
          {
            id: "security-principles",
            title: {
              en: "Core Security Principles",
              ar: "مبادئ الأمن الأساسية"
            },
            briefDescription: {
              en: "Learn the fundamental concepts that guide cybersecurity",
              ar: "تعلم المفاهيم الأساسية التي توجه الأمن السيبراني"
            },
            contentPlaceholder: {
              en: "CIA triad (Confidentiality, Integrity, Availability) explained. Defense in depth and principle of least privilege. Risk management frameworks and approaches.",
              ar: "شرح ثالوث CIA (السرية، السلامة، التوفر). الدفاع في العمق ومبدأ الامتياز الأدنى. أطر وأساليب إدارة المخاطر."
            },
            hasQuiz: true,
            isCompleted: true
          },
          {
            id: "security-careers",
            title: {
              en: "Cybersecurity Career Paths",
              ar: "المسارات المهنية في الأمن السيبراني"
            },
            briefDescription: {
              en: "Explore different roles and specializations in security",
              ar: "استكشاف الأدوار والتخصصات المختلفة في الأمن"
            },
            contentPlaceholder: {
              en: "Overview of various cybersecurity roles (analyst, engineer, pentester, etc.). Required skills and certifications for different paths. Industry demand and career progression opportunities.",
              ar: "نظرة عامة على أدوار الأمن السيبراني المختلفة (محلل، مهندس، مختبر اختراق، إلخ). المهارات والشهادات المطلوبة للمسارات المختلفة. الطلب في الصناعة وفرص التقدم المهني."
            },
            hasQuiz: false,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "network-security",
        title: {
          en: "Network Security",
          ar: "أمن الشبكات"
        },
        lessons: [
          {
            id: "network-fundamentals",
            title: {
              en: "Network Security Fundamentals",
              ar: "أساسيات أمن الشبكات"
            },
            briefDescription: {
              en: "Learn the basics of protecting computer networks",
              ar: "تعلم أساسيات حماية شبكات الكمبيوتر"
            },
            contentPlaceholder: {
              en: "Key concepts in network architecture and security. Common network attacks and vulnerabilities. Network security controls and their implementation.",
              ar: "المفاهيم الرئيسية في بنية وأمن الشبكات. هجمات ونقاط ضعف الشبكة الشائعة. ضوابط أمن الشبكة وتنفيذها."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "firewalls-ids",
            title: {
              en: "Firewalls and Intrusion Detection Systems",
              ar: "جدران الحماية وأنظمة كشف التسلل"
            },
            briefDescription: {
              en: "Understand the tools that protect network perimeters",
              ar: "فهم الأدوات التي تحمي محيطات الشبكة"
            },
            contentPlaceholder: {
              en: "Types of firewalls and their capabilities. Intrusion detection and prevention systems. Configuring and managing network security devices.",
              ar: "أنواع جدران الحماية وقدراتها. أنظمة كشف ومنع التسلل. تكوين وإدارة أجهزة أمن الشبكات."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "wireless-security",
            title: {
              en: "Wireless Network Security",
              ar: "أمن الشبكات اللاسلكية"
            },
            briefDescription: {
              en: "Protect WiFi networks from common vulnerabilities",
              ar: "حماية شبكات WiFi من نقاط الضعف الشائعة"
            },
            contentPlaceholder: {
              en: "Wireless security protocols (WEP, WPA, WPA2, WPA3). Common attacks against wireless networks. Securing wireless access points and clients.",
              ar: "بروتوكولات أمان الشبكات اللاسلكية (WEP، WPA، WPA2، WPA3). الهجمات الشائعة ضد الشبكات اللاسلكية. تأمين نقاط الوصول اللاسلكية والعملاء."
            },
            hasQuiz: true,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "cryptography",
        title: {
          en: "Cryptography and Secure Communications",
          ar: "التشفير والاتصالات الآمنة"
        },
        lessons: [
          {
            id: "crypto-basics",
            title: {
              en: "Cryptography Fundamentals",
              ar: "أساسيات التشفير"
            },
            briefDescription: {
              en: "Learn the science of encoding and decoding information",
              ar: "تعلم علم ترميز وفك ترميز المعلومات"
            },
            contentPlaceholder: {
              en: "History and basic principles of cryptography. Symmetric vs. asymmetric encryption algorithms. Hash functions and digital signatures.",
              ar: "تاريخ ومبادئ أساسية للتشفير. خوارزميات التشفير المتماثل مقابل غير المتماثل. دوال التجزئة والتوقيعات الرقمية."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "pki",
            title: {
              en: "Public Key Infrastructure",
              ar: "البنية التحتية للمفتاح العام"
            },
            briefDescription: {
              en: "Understand how digital certificates enable secure connections",
              ar: "فهم كيفية تمكين الشهادات الرقمية للاتصالات الآمنة"
            },
            contentPlaceholder: {
              en: "Components of PKI and certificate authorities. Digital certificate creation and management. SSL/TLS protocols and HTTPS implementation.",
              ar: "مكونات PKI وسلطات الشهادات. إنشاء وإدارة الشهادات الرقمية. بروتوكولات SSL/TLS وتنفيذ HTTPS."
            },
            hasQuiz: false,
            isCompleted: false
          },
          {
            id: "vpn-secure-comms",
            title: {
              en: "VPNs and Secure Communications",
              ar: "الشبكات الافتراضية الخاصة والاتصالات الآمنة"
            },
            briefDescription: {
              en: "Learn how to encrypt network traffic for privacy",
              ar: "تعلم كيفية تشفير حركة مرور الشبكة للخصوصية"
            },
            contentPlaceholder: {
              en: "Types of VPN technologies and their use cases. Setting up and configuring VPN connections. Secure messaging and file transfer protocols.",
              ar: "أنواع تقنيات VPN واستخداماتها. إعداد وتكوين اتصالات VPN. بروتوكولات المراسلة ونقل الملفات الآمنة."
            },
            hasQuiz: true,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "ethical-hacking",
        title: {
          en: "Ethical Hacking and Penetration Testing",
          ar: "القرصنة الأخلاقية واختبار الاختراق"
        },
        lessons: [
          {
            id: "ethical-hacking-intro",
            title: {
              en: "Introduction to Ethical Hacking",
              ar: "مقدمة في القرصنة الأخلاقية"
            },
            briefDescription: {
              en: "Learn the methodology of security testing",
              ar: "تعلم منهجية اختبار الأمان"
            },
            contentPlaceholder: {
              en: "Ethical hacking principles and legal considerations. Penetration testing types and methodology. Setting up a testing environment with virtual machines.",
              ar: "مبادئ القرصنة الأخلاقية والاعتبارات القانونية. أنواع ومنهجية اختبار الاختراق. إعداد بيئة اختبار باستخدام الآلات الافتراضية."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "recon-scanning",
            title: {
              en: "Reconnaissance and Scanning",
              ar: "الاستطلاع والمسح"
            },
            briefDescription: {
              en: "Master the first phases of penetration testing",
              ar: "إتقان المراحل الأولى من اختبار الاختراق"
            },
            contentPlaceholder: {
              en: "Information gathering techniques and tools. Network scanning and enumeration. Vulnerability assessment and identification.",
              ar: "تقنيات وأدوات جمع المعلومات. مسح وتعداد الشبكة. تقييم وتحديد نقاط الضعف."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "exploitation",
            title: {
              en: "Exploitation Techniques",
              ar: "تقنيات الاستغلال"
            },
            briefDescription: {
              en: "Learn how attackers exploit system vulnerabilities",
              ar: "تعلم كيف يستغل المهاجمون نقاط ضعف النظام"
            },
            contentPlaceholder: {
              en: "Common exploitation methods and tools. Metasploit framework usage. Privilege escalation techniques and maintaining access.",
              ar: "طرق وأدوات الاستغلال الشائعة. استخدام إطار Metasploit. تقنيات تصعيد الامتيازات والحفاظ على الوصول."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "reporting",
            title: {
              en: "Reporting and Remediation",
              ar: "التقارير والمعالجة"
            },
            briefDescription: {
              en: "Document and communicate security findings effectively",
              ar: "توثيق وتوصيل نتائج الأمان بفعالية"
            },
            contentPlaceholder: {
              en: "Creating comprehensive penetration testing reports. Severity classification and risk assessment. Recommending effective security controls and fixes.",
              ar: "إنشاء تقارير شاملة لاختبار الاختراق. تصنيف الخطورة وتقييم المخاطر. التوصية بضوابط وإصلاحات أمنية فعالة."
            },
            hasQuiz: false,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "security-management",
        title: {
          en: "Security Management and Incident Response",
          ar: "إدارة الأمن والاستجابة للحوادث"
        },
        lessons: [
          {
            id: "security-policies",
            title: {
              en: "Security Policies and Compliance",
              ar: "سياسات الأمن والامتثال"
            },
            briefDescription: {
              en: "Learn to develop and implement security governance",
              ar: "تعلم تطوير وتنفيذ حوكمة الأمن"
            },
            contentPlaceholder: {
              en: "Creating effective security policies and procedures. Regulatory compliance (GDPR, HIPAA, PCI DSS, etc.). Security awareness and training programs.",
              ar: "إنشاء سياسات وإجراءات أمنية فعالة. الامتثال التنظيمي (GDPR، HIPAA، PCI DSS، إلخ). برامج التوعية والتدريب الأمنية."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "incident-response",
            title: {
              en: "Incident Response Planning",
              ar: "تخطيط الاستجابة للحوادث"
            },
            briefDescription: {
              en: "Prepare for and manage security incidents",
              ar: "الاستعداد وإدارة حوادث الأمن"
            },
            contentPlaceholder: {
              en: "Incident response framework and team structure. Detection, analysis, containment, and recovery phases. Documenting and learning from security incidents.",
              ar: "إطار الاستجابة للحوادث وهيكل الفريق. مراحل الكشف، التحليل، الاحتواء، والاسترداد. توثيق والتعلم من حوادث الأمن."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "forensics",
            title: {
              en: "Digital Forensics Basics",
              ar: "أساسيات الطب الشرعي الرقمي"
            },
            briefDescription: {
              en: "Learn how to collect and analyze digital evidence",
              ar: "تعلم كيفية جمع وتحليل الأدلة الرقمية"
            },
            contentPlaceholder: {
              en: "Principles of digital forensics and evidence handling. Tools and techniques for data acquisition and analysis. Case studies in computer forensic investigations.",
              ar: "مبادئ الطب الشرعي الرقمي والتعامل مع الأدلة. أدوات وتقنيات لاكتساب وتحليل البيانات. دراسات حالة في تحقيقات الطب الشرعي الحاسوبي."
            },
            hasQuiz: false,
            isCompleted: false
          }
        ],
        isCompleted: false
      }
    ]
  },
  "uiux-design": {
    id: "uiux-design",
    title: {
      en: "UI/UX Design for Beginners",
      ar: "تصميم واجهات وتجربة المستخدم للمبتدئين"
    },
    briefDescription: {
      en: "Create user-centered designs for digital products",
      ar: "إنشاء تصاميم تركز على المستخدم للمنتجات الرقمية"
    },
    detailedDescription: {
      en: "Learn to design beautiful, functional, and user-friendly interfaces for websites and applications. This course covers the entire UI/UX design process, from user research and wireframing to creating high-fidelity mockups and prototypes. You'll master industry-standard design tools and principles while building a portfolio of real-world projects. Whether you're a complete beginner or a developer wanting to enhance your design skills, this course will help you create compelling digital experiences that users love.",
      ar: "تعلم تصميم واجهات جميلة وعملية وسهلة الاستخدام للمواقع والتطبيقات. تغطي هذه الدورة عملية تصميم UI/UX بالكامل، من بحث المستخدم والتخطيط السلكي إلى إنشاء نماذج ونماذج أولية عالية الدقة. ستتقن أدوات ومبادئ التصميم القياسية في الصناعة أثناء بناء محفظة من المشاريع الواقعية. سواء كنت مبتدئًا تمامًا أو مطورًا ترغب في تعزيز مهارات التصميم لديك، ستساعدك هذه الدورة على إنشاء تجارب رقمية مقنعة يحبها المستخدمون."
    },
    category: {
      en: "Design",
      ar: "التصميم"
    },
    language: {
      en: "English",
      ar: "الإنجليزية"
    },
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
    imagePlaceholder: {
      en: "Design tools (pen, ruler) with a screen showing app interface design",
      ar: "أدوات تصميم (قلم، مسطرة) مع شاشة تعرض تصميم واجهة تطبيق"
    },
    chapters: [
      {
        id: "design-fundamentals",
        title: {
          en: "Design Fundamentals",
          ar: "أساسيات التصميم"
        },
        lessons: [
          {
            id: "ui-ux-intro",
            title: {
              en: "Introduction to UI/UX Design",
              ar: "مقدمة في تصميم UI/UX"
            },
            briefDescription: {
              en: "Understand the difference between UI and UX design",
              ar: "فهم الفرق بين تصميم UI و UX"
            },
            contentPlaceholder: {
              en: "Explanation of UI vs. UX with visual examples. The role of UI/UX designers in product development. Overview of the design process and deliverables.",
              ar: "شرح للفرق بين UI و UX مع أمثلة مرئية. دور مصممي UI/UX في تطوير المنتج. نظرة عامة على عملية التصميم والمخرجات."
            },
            hasQuiz: true,
            isCompleted: true
          },
          {
            id: "design-principles",
            title: {
              en: "Core Design Principles",
              ar: "مبادئ التصميم الأساسية"
            },
            briefDescription: {
              en: "Learn the fundamental principles that guide good design",
              ar: "تعلم المبادئ الأساسية التي توجه التصميم الجيد"
            },
            contentPlaceholder: {
              en: "Exploration of balance, contrast, hierarchy, alignment, and other design principles. Visual examples of principles in action. Exercises to practice applying these principles.",
              ar: "استكشاف التوازن، التباين، التسلسل الهرمي، المحاذاة، وغيرها من مبادئ التصميم. أمثلة مرئية للمبادئ قيد التطبيق. تمارين لممارسة تطبيق هذه المبادئ."
            },
            hasQuiz: true,
            isCompleted: true
          },
          {
            id: "color-theory",
            title: {
              en: "Color Theory and Psychology",
              ar: "نظرية الألوان وعلم النفس"
            },
            briefDescription: {
              en: "Master the use of color in digital interfaces",
              ar: "إتقان استخدام الألوان في الواجهات الرقمية"
            },
            contentPlaceholder: {
              en: "Color wheel, schemes, and relationships explained. Psychological effects of different colors. Creating accessible color palettes and applying them to interfaces.",
              ar: "شرح لعجلة الألوان، والمخططات، والعلاقات. التأثيرات النفسية للألوان المختلفة. إنشاء لوحات ألوان يمكن الوصول إليها وتطبيقها على الواجهات."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "typography",
            title: {
              en: "Typography for Digital Interfaces",
              ar: "الطباعة للواجهات الرقمية"
            },
            briefDescription: {
              en: "Learn to select and use fonts effectively in designs",
              ar: "تعلم اختيار واستخدام الخطوط بفعالية في التصاميم"
            },
            contentPlaceholder: {
              en: "Font classifications and anatomy. Pairing fonts and establishing typographic hierarchy. Typography best practices for readability and accessibility.",
              ar: "تصنيفات الخطوط وتشريحها. إقران الخطوط وإنشاء تسلسل هرمي طباعي. أفضل ممارسات الطباعة للقراءة وإمكانية الوصول."
            },
            hasQuiz: false,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "user-centered-design",
        title: {
          en: "User-Centered Design Process",
          ar: "عملية التصميم المتمحورة حول المستخدم"
        },
        lessons: [
          {
            id: "user-research",
            title: {
              en: "User Research Methods",
              ar: "طرق بحث المستخدم"
            },
            briefDescription: {
              en: "Learn techniques to understand user needs and behaviors",
              ar: "تعلم تقنيات لفهم احتياجات وسلوكيات المستخدم"
            },
            contentPlaceholder: {
              en: "Overview of qualitative and quantitative research methods. Conducting user interviews, surveys, and usability testing. Analyzing and synthesizing research findings.",
              ar: "نظرة عامة على طرق البحث النوعية والكمية. إجراء مقابلات المستخدم، والاستطلاعات، واختبار قابلية الاستخدام. تحليل وتوليف نتائج البحث."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "personas-scenarios",
            title: {
              en: "User Personas and Scenarios",
              ar: "شخصيات وسيناريوهات المستخدم"
            },
            briefDescription: {
              en: "Create representative user profiles to guide design decisions",
              ar: "إنشاء ملفات تعريف المستخدم التمثيلية لتوجيه قرارات التصميم"
            },
            contentPlaceholder: {
              en: "Methodology for creating effective user personas. Developing user scenarios and journey maps. Using personas to inform and validate design decisions.",
              ar: "منهجية لإنشاء شخصيات المستخدم الفعالة. تطوير سيناريوهات المستخدم وخرائط الرحلة. استخدام الشخصيات لإبلاغ والتحقق من صحة قرارات التصميم."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "information-architecture",
            title: {
              en: "Information Architecture",
              ar: "هندسة المعلومات"
            },
            briefDescription: {
              en: "Organize content and features in a logical structure",
              ar: "تنظيم المحتوى والميزات في بنية منطقية"
            },
            contentPlaceholder: {
              en: "Principles of organizing and structuring information. Creating sitemaps and content hierarchies. Card sorting and tree testing techniques.",
              ar: "مبادئ تنظيم وهيكلة المعلومات. إنشاء خرائط الموقع وتسلسلات المحتوى الهرمية. تقنيات فرز البطاقات واختبار الشجرة."
            },
            hasQuiz: false,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "design-tools",
        title: {
          en: "Design Tools and Workflow",
          ar: "أدوات وسير عمل التصميم"
        },
        lessons: [
          {
            id: "figma-basics",
            title: {
              en: "Getting Started with Figma",
              ar: "البدء مع Figma"
            },
            briefDescription: {
              en: "Learn to use the industry-standard interface design tool",
              ar: "تعلم استخدام أداة تصميم الواجهة القياسية في الصناعة"
            },
            contentPlaceholder: {
              en: "Introduction to Figma's interface and features. Creating frames, shapes, and text elements. Working with layers, groups, and the assets panel.",
              ar: "مقدمة في واجهة Figma وميزاتها. إنشاء الإطارات والأشكال وعناصر النص. العمل مع الطبقات والمجموعات ولوحة الأصول."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "wireframing",
            title: {
              en: "Wireframing and Low-Fidelity Prototypes",
              ar: "التخطيط السلكي والنماذج الأولية منخفضة الدقة"
            },
            briefDescription: {
              en: "Create simple layouts to plan interface structure",
              ar: "إنشاء تخطيطات بسيطة لتخطيط بنية الواجهة"
            },
            contentPlaceholder: {
              en: "Purpose and types of wireframes explained. Creating wireframes for different screen sizes. Turning wireframes into clickable low-fidelity prototypes.",
              ar: "شرح الغرض وأنواع المخططات السلكية. إنشاء مخططات سلكية لأحجام شاشات مختلفة. تحويل المخططات السلكية إلى نماذج أولية منخفضة الدقة قابلة للنقر."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "components",
            title: {
              en: "Component-Based Design",
              ar: "التصميم القائم على المكونات"
            },
            briefDescription: {
              en: "Build reusable design systems for consistent interfaces",
              ar: "بناء أنظمة تصميم قابلة لإعادة الاستخدام لواجهات متناسقة"
            },
            contentPlaceholder: {
              en: "Creating and using components in Figma. Building a design system with styles and components. Auto layout and responsive components.",
              ar: "إنشاء واستخدام المكونات في Figma. بناء نظام تصميم بأنماط ومكونات. التخطيط التلقائي والمكونات المتجاوبة."
            },
            hasQuiz: false,
            isCompleted: false
          },
          {
            id: "high-fidelity",
            title: {
              en: "High-Fidelity Mockups",
              ar: "نماذج عالية الدقة"
            },
            briefDescription: {
              en: "Create detailed, polished visual designs",
              ar: "إنشاء تصاميم مرئية مفصلة ومصقولة"
            },
            contentPlaceholder: {
              en: "Transforming wireframes into high-fidelity designs. Applying visual styles, colors, and typography. Creating multiple screens and states.",
              ar: "تحويل المخططات السلكية إلى تصاميم عالية الدقة. تطبيق الأنماط المرئية والألوان والطباعة. إنشاء شاشات وحالات متعددة."
            },
            hasQuiz: true,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "prototyping",
        title: {
          en: "Prototyping and Interaction Design",
          ar: "النماذج الأولية وتصميم التفاعل"
        },
        lessons: [
          {
            id: "interaction-basics",
            title: {
              en: "Interaction Design Principles",
              ar: "مبادئ تصميم التفاعل"
            },
            briefDescription: {
              en: "Learn how to create intuitive, engaging user interactions",
              ar: "تعلم كيفية إنشاء تفاعلات مستخدم بديهية وجذابة"
            },
            contentPlaceholder: {
              en: "Core principles of effective interaction design. Designing for different input methods and devices. Animation principles for interface elements.",
              ar: "المبادئ الأساسية لتصميم التفاعل الفعال. التصميم لطرق وأجهزة الإدخال المختلفة. مبادئ الرسوم المتحركة لعناصر الواجهة."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "interactive-prototypes",
            title: {
              en: "Creating Interactive Prototypes",
              ar: "إنشاء نماذج أولية تفاعلية"
            },
            briefDescription: {
              en: "Build clickable prototypes to simulate real app behavior",
              ar: "بناء نماذج أولية قابلة للنقر لمحاكاة سلوك التطبيق الحقيقي"
            },
            contentPlaceholder: {
              en: "Setting up prototype connections and interactions in Figma. Creating animations and transitions between screens. Testing and sharing interactive prototypes.",
              ar: "إعداد اتصالات وتفاعلات النموذج الأولي في Figma. إنشاء رسوم متحركة وانتقالات بين الشاشات. اختبار ومشاركة النماذج الأولية التفاعلية."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "usability-testing",
            title: {
              en: "Usability Testing with Prototypes",
              ar: "اختبار قابلية الاستخدام باستخدام النماذج الأولية"
            },
            briefDescription: {
              en: "Test your designs with real users to identify improvements",
              ar: "اختبار تصاميمك مع مستخدمين حقيقيين لتحديد التحسينات"
            },
            contentPlaceholder: {
              en: "Planning and conducting usability tests. Observing and documenting user behaviors. Analyzing results and making design iterations.",
              ar: "تخطيط وإجراء اختبارات قابلية الاستخدام. مراقبة وتوثيق سلوكيات المستخدم. تحليل النتائج وإجراء تكرارات التصميم."
            },
            hasQuiz: false,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "practical-projects",
        title: {
          en: "Practical Design Projects",
          ar: "مشاريع تصميم عملية"
        },
        lessons: [
          {
            id: "mobile-app-design",
            title: {
              en: "Mobile App Design Project",
              ar: "مشروع تصميم تطبيق جوال"
            },
            briefDescription: {
              en: "Design a complete mobile application from concept to prototype",
              ar: "تصميم تطبيق جوال كامل من المفهوم إلى النموذج الأولي"
            },
            contentPlaceholder: {
              en: "Step-by-step project designing a mobile application interface. From research and sketching to high-fidelity prototype. Implementing mobile design patterns and best practices.",
              ar: "مشروع خطوة بخطوة لتصميم واجهة تطبيق جوال. من البحث والرسم التخطيطي إلى النموذج الأولي عالي الدقة. تنفيذ أنماط وأفضل ممارسات تصميم الجوال."
            },
            hasQuiz: false,
            isCompleted: false
          },
          {
            id: "responsive-web",
            title: {
              en: "Responsive Website Design",
              ar: "تصميم موقع ويب متجاوب"
            },
            briefDescription: {
              en: "Create a website that adapts to different screen sizes",
              ar: "إنشاء موقع ويب يتكيف مع أحجام الشاشات المختلفة"
            },
            contentPlaceholder: {
              en: "Project for designing a responsive website. Creating layouts for desktop, tablet, and mobile screens. Implementing responsive design principles and component adaptations.",
              ar: "مشروع لتصميم موقع ويب متجاوب. إنشاء تخطيطات لشاشات سطح المكتب والأجهزة اللوحية والجوال. تنفيذ مبادئ التصميم المتجاوب وتكييفات المكونات."
            },
            hasQuiz: false,
            isCompleted: false
          },
          {
            id: "portfolio-project",
            title: {
              en: "Building Your Design Portfolio",
              ar: "بناء محفظة التصميم الخاصة بك"
            },
            briefDescription: {
              en: "Create a professional portfolio to showcase your work",
              ar: "إنشاء محفظة احترافية لعرض أعمالك"
            },
            contentPlaceholder: {
              en: "Guidance on selecting and presenting your best design work. Creating case studies that highlight your process and skills. Tips for portfolio websites and job applications.",
              ar: "إرشادات حول اختيار وعرض أفضل أعمال التصميم الخاصة بك. إنشاء دراسات حالة تسلط الضوء على عمليتك ومهاراتك. نصائح لمواقع المحافظ وطلبات العمل."
            },
            hasQuiz: true,
            isCompleted: false
          }
        ],
        isCompleted: false
      }
    ]
  },
  "machine-learning": {
    id: "machine-learning",
    title: {
      en: "Machine Learning with Python",
      ar: "التعلم الآلي باستخدام بايثون"
    },
    briefDescription: {
      en: "Implement machine learning algorithms with Python",
      ar: "تنفيذ خوارزميات التعلم الآلي باستخدام بايثون"
    },
    detailedDescription: {
      en: "Discover the exciting world of machine learning through hands-on projects with Python. This comprehensive course covers the theoretical foundations and practical implementations of various machine learning algorithms. You'll learn to process and analyze data, train models, evaluate their performance, and deploy them in real-world applications. From supervised and unsupervised learning to neural networks, this course equips you with the skills to solve complex problems using the power of machine learning.",
      ar: "اكتشف عالم التعلم الآلي المثير من خلال مشاريع عملية باستخدام بايثون. تغطي هذه الدورة الشاملة الأسس النظرية والتطبيقات العملية لمختلف خوارزميات التعلم الآلي. ستتعلم معالجة وتحليل البيانات، وتدريب النماذج، وتقييم أدائها، ونشرها في تطبيقات العالم الحقيقي. من التعلم الخاضع للإشراف وغير الخاضع للإشراف إلى الشبكات العصبية، تزودك هذه الدورة بالمهارات اللازمة لحل المشكلات المعقدة باستخدام قوة التعلم الآلي."
    },
    category: {
      en: "AI & ML",
      ar: "الذكاء الاصطناعي والتعلم الآلي"
    },
    language: {
      en: "English",
      ar: "الإنجليزية"
    },
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
    imagePlaceholder: {
      en: "Neural network visualization or digital brain with Python logo",
      ar: "تصور شبكة عصبية أو دماغ رقمي مع شعار بايثون"
    },
    chapters: [
      {
        id: "ml-foundations",
        title: {
          en: "Foundations of Machine Learning",
          ar: "أسس التعلم الآلي"
        },
        lessons: [
          {
            id: "intro-to-ml",
            title: {
              en: "Introduction to Machine Learning",
              ar: "مقدمة في التعلم الآلي"
            },
            briefDescription: {
              en: "Understand the core concepts and types of machine learning",
              ar: "فهم المفاهيم الأساسية وأنواع التعلم الآلي"
            },
            contentPlaceholder: {
              en: "Overview of machine learning concepts and applications. Types of machine learning: supervised, unsupervised, and reinforcement learning. Setting up a Python environment for machine learning.",
              ar: "نظرة عامة على مفاهيم وتطبيقات التعلم الآلي. أنواع التعلم الآلي: الخاضع للإشراف، غير الخاضع للإشراف، والتعلم التعزيزي. إعداد بيئة بايثون للتعلم الآلي."
            },
            hasQuiz: true,
            isCompleted: true
          },
          {
            id: "python-ds-ml",
            title: {
              en: "Python Libraries for Data Science and ML",
              ar: "مكتبات بايثون لعلوم البيانات والتعلم الآلي"
            },
            briefDescription: {
              en: "Learn the essential Python libraries for machine learning",
              ar: "تعلم مكتبات بايثون الأساسية للتعلم الآلي"
            },
            contentPlaceholder: {
              en: "Deep dive into NumPy, Pandas, Matplotlib, and Scikit-learn. Data manipulation and preprocessing techniques. Visualizing data for machine learning analysis.",
              ar: "تعمق في NumPy وPandas وMatplotlib وScikit-learn. تقنيات معالجة البيانات والمعالجة المسبقة. تصور البيانات لتحليل التعلم الآلي."
            },
            hasQuiz: true,
            isCompleted: true
          },
          {
            id: "ml-workflow",
            title: {
              en: "The Machine Learning Workflow",
              ar: "سير عمل التعلم الآلي"
            },
            briefDescription: {
              en: "Understand the end-to-end process of ML projects",
              ar: "فهم العملية الشاملة لمشاريع التعلم الآلي"
            },
            contentPlaceholder: {
              en: "Stages of a machine learning project from problem definition to deployment. Data collection, cleaning, and preparation strategies. Model selection, training, evaluation, and deployment.",
              ar: "مراحل مشروع التعلم الآلي من تعريف المشكلة إلى النشر. استراتيجيات جمع البيانات وتنظيفها وإعدادها. اختيار النموذج، التدريب، التقييم، والنشر."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "data-preprocessing",
            title: {
              en: "Data Preprocessing for ML",
              ar: "معالجة البيانات المسبقة للتعلم الآلي"
            },
            briefDescription: {
              en: "Learn how to prepare data for machine learning algorithms",
              ar: "تعلم كيفية إعداد البيانات لخوارزميات التعلم الآلي"
            },
            contentPlaceholder: {
              en: "Handling missing data and outliers. Feature scaling, normalization, and standardization. Feature engineering and dimensionality reduction techniques.",
              ar: "التعامل مع البيانات المفقودة والقيم الشاذة. تدريج الميزات، التطبيع، والتوحيد القياسي. هندسة الميزات وتقنيات تقليل الأبعاد."
            },
            hasQuiz: false,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "supervised-learning",
        title: {
          en: "Supervised Learning",
          ar: "التعلم الخاضع للإشراف"
        },
        lessons: [
          {
            id: "linear-regression",
            title: {
              en: "Linear Regression",
              ar: "الانحدار الخطي"
            },
            briefDescription: {
              en: "Master the fundamentals of regression algorithms",
              ar: "إتقان أساسيات خوارزميات الانحدار"
            },
            contentPlaceholder: {
              en: "Theory and mathematics behind linear regression. Simple and multiple linear regression implementation. Model evaluation metrics for regression problems.",
              ar: "النظرية والرياضيات وراء الانحدار الخطي. تنفيذ الانحدار الخطي البسيط والمتعدد. مقاييس تقييم النموذج لمشاكل الانحدار."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "classification",
            title: {
              en: "Classification Algorithms",
              ar: "خوارزميات التصنيف"
            },
            briefDescription: {
              en: "Learn various methods for classification problems",
              ar: "تعلم طرق مختلفة لمشاكل التصنيف"
            },
            contentPlaceholder: {
              en: "Logistic regression, decision trees, and k-nearest neighbors. Understanding classification metrics (accuracy, precision, recall, F1). Implementing and comparing different classifiers on real datasets.",
              ar: "الانحدار اللوجستي، أشجار القرار، وk-أقرب الجيران. فهم مقاييس التصنيف (الدقة، الضبط، الاستدعاء، F1). تنفيذ ومقارنة مصنفات مختلفة على مجموعات بيانات حقيقية."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "svm",
            title: {
              en: "Support Vector Machines",
              ar: "آلات المتجهات الداعمة"
            },
            briefDescription: {
              en: "Implement powerful SVM algorithms for classification",
              ar: "تنفيذ خوارزميات SVM القوية للتصنيف"
            },
            contentPlaceholder: {
              en: "Theory behind support vector machines and kernel methods. Linear and non-linear SVM implementations. Hyperparameter tuning for optimal SVM performance.",
              ar: "النظرية وراء آلات المتجهات الداعمة وطرق النواة. تنفيذات SVM الخطية وغير الخطية. ضبط المعلمات الفائقة للأداء الأمثل لـ SVM."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "ensemble",
            title: {
              en: "Ensemble Methods",
              ar: "طرق التجميع"
            },
            briefDescription: {
              en: "Combine multiple models for better predictive power",
              ar: "دمج نماذج متعددة للحصول على قوة تنبؤية أفضل"
            },
            contentPlaceholder: {
              en: "Random forests, gradient boosting, and stacking methods. Bagging vs. boosting approaches. Implementing ensemble models for improved accuracy.",
              ar: "الغابات العشوائية، تعزيز التدرج، وطرق التكديس. نهج التكييس مقابل التعزيز. تنفيذ نماذج التجميع لتحسين الدقة."
            },
            hasQuiz: false,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "unsupervised-learning",
        title: {
          en: "Unsupervised Learning",
          ar: "التعلم غير الخاضع للإشراف"
        },
        lessons: [
          {
            id: "clustering",
            title: {
              en: "Clustering Algorithms",
              ar: "خوارزميات التجميع"
            },
            briefDescription: {
              en: "Group similar data points without labeled examples",
              ar: "تجميع نقاط البيانات المتشابهة بدون أمثلة مُعلَّمة"
            },
            contentPlaceholder: {
              en: "K-means, hierarchical, and DBSCAN clustering methods. Evaluating clustering performance. Real-world applications of clustering algorithms.",
              ar: "طرق التجميع K-means، الهرمي، و DBSCAN. تقييم أداء التجميع. تطبيقات العالم الحقيقي لخوارزميات التجميع."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "dim-reduction",
            title: {
              en: "Dimensionality Reduction",
              ar: "تقليل الأبعاد"
            },
            briefDescription: {
              en: "Reduce feature space while preserving information",
              ar: "تقليل مساحة الميزات مع الحفاظ على المعلومات"
            },
            contentPlaceholder: {
              en: "Principal Component Analysis (PCA) and t-SNE methods. Feature extraction vs. feature selection. Visualizing high-dimensional data in lower dimensions.",
              ar: "طرق تحليل المكونات الرئيسية (PCA) و t-SNE. استخراج الميزات مقابل اختيار الميزات. تصور البيانات عالية الأبعاد في أبعاد أقل."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "anomaly-detection",
            title: {
              en: "Anomaly Detection",
              ar: "كشف الشذوذ"
            },
            briefDescription: {
              en: "Identify unusual patterns in data",
              ar: "تحديد الأنماط غير العادية في البيانات"
            },
            contentPlaceholder: {
              en: "Statistical and machine learning approaches to anomaly detection. Isolation forests and one-class SVM methods. Applications in fraud detection and system monitoring.",
              ar: "النهج الإحصائية والتعلم الآلي لكشف الشذوذ. غابات العزلة وطرق SVM ذات الفئة الواحدة. تطبيقات في كشف الاحتيال ومراقبة النظام."
            },
            hasQuiz: false,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "neural-networks",
        title: {
          en: "Neural Networks and Deep Learning",
          ar: "الشبكات العصبية والتعلم العميق"
        },
        lessons: [
          {
            id: "nn-fundamentals",
            title: {
              en: "Neural Network Fundamentals",
              ar: "أساسيات الشبكات العصبية"
            },
            briefDescription: {
              en: "Understand the building blocks of neural networks",
              ar: "فهم اللبنات الأساسية للشبكات العصبية"
            },
            contentPlaceholder: {
              en: "Perceptrons, activation functions, and feedforward networks. Backpropagation and gradient descent optimization. Implementing a simple neural network from scratch.",
              ar: "المُدركات، دوال التنشيط، والشبكات الأمامية. الانتشار الخلفي وتحسين الانحدار التدريجي. تنفيذ شبكة عصبية بسيطة من الصفر."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "keras-tensorflow",
            title: {
              en: "Deep Learning with Keras and TensorFlow",
              ar: "التعلم العميق باستخدام Keras و TensorFlow"
            },
            briefDescription: {
              en: "Build neural networks using popular frameworks",
              ar: "بناء شبكات عصبية باستخدام أطر العمل الشائعة"
            },
            contentPlaceholder: {
              en: "Introduction to TensorFlow and Keras. Building and training deep neural networks. Techniques for preventing overfitting in neural networks.",
              ar: "مقدمة في TensorFlow و Keras. بناء وتدريب الشبكات العصبية العميقة. تقنيات منع الإفراط في التركيب في الشبكات العصبية."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "cnn",
            title: {
              en: "Convolutional Neural Networks",
              ar: "الشبكات العصبية التلافيفية"
            },
            briefDescription: {
              en: "Learn specialized neural networks for image processing",
              ar: "تعلم الشبكات العصبية المتخصصة لمعالجة الصور"
            },
            contentPlaceholder: {
              en: "CNN architecture and operations (convolution, pooling). Image classification and object detection with CNNs. Transfer learning with pre-trained CNN models.",
              ar: "بنية وعمليات CNN (التلافيف، التجميع). تصنيف الصور وكشف الكائنات باستخدام CNN. التعلم بالنقل باستخدام نماذج CNN المدربة مسبقًا."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "rnn",
            title: {
              en: "Recurrent Neural Networks",
              ar: "الشبكات العصبية المتكررة"
            },
            briefDescription: {
              en: "Process sequential data with neural networks",
              ar: "معالجة البيانات المتسلسلة باستخدام الشبكات العصبية"
            },
            contentPlaceholder: {
              en: "RNN architecture and the concept of memory in neural networks. LSTM and GRU cells for long-term dependencies. Applications in text generation, sentiment analysis, and time series prediction.",
              ar: "بنية RNN ومفهوم الذاكرة في الشبكات العصبية. خلايا LSTM و GRU للتبعيات طويلة المدى. تطبيقات في توليد النص، تحليل المشاعر، والتنبؤ بالسلاسل الزمنية."
            },
            hasQuiz: false,
            isCompleted: false
          }
        ],
        isCompleted: false
      },
      {
        id: "ml-deployment",
        title: {
          en: "Model Evaluation and Deployment",
          ar: "تقييم ونشر النماذج"
        },
        lessons: [
          {
            id: "model-evaluation",
            title: {
              en: "Model Evaluation Techniques",
              ar: "تقنيات تقييم النماذج"
            },
            briefDescription: {
              en: "Learn methods to assess your machine learning models",
              ar: "تعلم طرق تقييم نماذج التعلم الآلي الخاصة بك"
            },
            contentPlaceholder: {
              en: "Cross-validation methods and metrics for different problems. Learning curves and bias-variance tradeoff. Techniques for hyperparameter tuning and model selection.",
              ar: "طرق التحقق المتقاطع ومقاييس لمشاكل مختلفة. منحنيات التعلم والمفاضلة بين التحيز والتباين. تقنيات لضبط المعلمات الفائقة واختيار النموذج."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "model-deployment",
            title: {
              en: "Deploying Machine Learning Models",
              ar: "نشر نماذج التعلم الآلي"
            },
            briefDescription: {
              en: "Move from experimentation to production environments",
              ar: "الانتقال من التجريب إلى بيئات الإنتاج"
            },
            contentPlaceholder: {
              en: "Saving and loading trained models. Creating APIs for model inference. Deployment options including web services and edge devices.",
              ar: "حفظ وتحميل النماذج المدربة. إنشاء واجهات برمجة التطبيقات لاستنتاج النموذج. خيارات النشر بما في ذلك خدمات الويب وأجهزة الحافة."
            },
            hasQuiz: true,
            isCompleted: false
          },
          {
            id: "ml-ethics",
            title: {
              en: "Ethics in Machine Learning",
              ar: "الأخلاقيات في التعلم الآلي"
            },
            briefDescription: {
              en: "Understand ethical considerations in AI applications",
              ar: "فهم الاعتبارات الأخلاقية في تطبيقات الذكاء الاصطناعي"
            },
            contentPlaceholder: {
              en: "Bias and fairness in machine learning models. Privacy concerns and data protection. Responsible AI development and deployment practices.",
              ar: "التحيز والإنصاف في نماذج التعلم الآلي. مخاوف الخصوصية وحماية البيانات. ممارسات التطوير والنشر المسؤولة للذكاء الاصطناعي."
            },
            hasQuiz: false,
            isCompleted: false
          },
          {
            id: "capstone-project",
            title: {
              en: "Capstone Project",
              ar: "مشروع التخرج"
            },
            briefDescription: {
              en: "Apply all your skills to a real-world ML project",
              ar: "تطبيق جميع مهاراتك على مشروع تعلم آلي من العالم الحقيقي"
            },
            contentPlaceholder: {
              en: "End-to-end machine learning project covering all course concepts. Data collection, preprocessing, model selection and training. Evaluation, optimization, and deployment of your solution.",
              ar: "مشروع تعلم آلي شامل يغطي جميع مفاهيم الدورة. جمع البيانات، المعالجة المسبقة، اختيار النموذج والتدريب. تقييم وتحسين ونشر الحل الخاص بك."
            },
            hasQuiz: true,
            isCompleted: false
          }
        ],
        isCompleted: false
      }
    ]
  }
};

export default coursesData;
