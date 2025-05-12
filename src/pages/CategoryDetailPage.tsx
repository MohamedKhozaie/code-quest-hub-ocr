import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Laptop, Monitor, HardDrive, Cpu, ArrowRight, Server, Wifi, Mouse, Globe, ShieldCheck, CheckCircle, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Static data for the Computer Basics category
const computerBasicsData = {
    title: "Computer Basics",
    description: "Master the fundamentals of computer hardware, software, and essential operations",
    heroImage: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format&fit=crop",
    topics: [
        {
            id: "hardware-essentials",
            title: "Hardware Essentials",
            icon: HardDrive,
            description: "Learn about the physical components that make up a computer system",
            completed: true,
            items: [
                { title: "CPU and Processing", description: "How the central processing unit works", completed: true },
                { title: "Memory and Storage", description: "Understanding RAM, hard drives, and SSDs", completed: true },
                { title: "Input/Output Devices", description: "Keyboards, mice, monitors, and printers", completed: true },
                { title: "Motherboards", description: "The main circuit board of a computer system", completed: true }
            ]
        },
        {
            id: "operating-systems",
            title: "Operating Systems",
            icon: Monitor,
            description: "Explore different operating systems and their functions",
            completed: true,
            items: [
                { title: "Windows Basics", description: "Navigation, file management, and settings", completed: true },
                { title: "macOS Introduction", description: "Apple's desktop operating system", completed: true },
                { title: "Linux Fundamentals", description: "Open-source operating system options", completed: true },
                { title: "Mobile OS Overview", description: "Android and iOS basics", completed: true }
            ]
        },
        {
            id: "networking-basics",
            title: "Networking Basics",
            icon: Wifi,
            description: "Understand how computers connect and communicate",
            completed: true,
            items: [
                { title: "Network Types", description: "LANs, WANs, and wireless networks", completed: true },
                { title: "Internet Connectivity", description: "Routers, modems, and ISPs", completed: true },
                { title: "Network Security", description: "Protecting your network from threats", completed: true },
                { title: "IP Addressing", description: "How computers are identified on networks", completed: true }
            ]
        },
        {
            id: "software-applications",
            title: "Software Applications",
            icon: Laptop,
            description: "Get familiar with common software tools and applications",
            completed: true,
            items: [
                { title: "Productivity Software", description: "Word processing, spreadsheets, and presentations", completed: true },
                { title: "Web Browsers", description: "Navigating and using the internet effectively", completed: true },
                { title: "Email Clients", description: "Managing electronic communications", completed: true },
                { title: "Media Applications", description: "Photo, audio, and video applications", completed: true }
            ]
        },
        {
            id: "computer-security",
            title: "Computer Security",
            icon: ShieldCheck,
            description: "Learn how to keep your computer and data safe",
            completed: true,
            items: [
                { title: "Antivirus Software", description: "Protecting against malware and viruses", completed: true },
                { title: "Password Management", description: "Creating and managing secure passwords", completed: true },
                { title: "Safe Browsing", description: "Avoiding online threats and scams", completed: true },
                { title: "Data Backups", description: "Ensuring your information is never lost", completed: true }
            ]
        },
        {
            id: "internet-basics",
            title: "Internet Basics",
            icon: Globe,
            description: "Navigate the digital world of the internet",
            completed: true,
            items: [
                { title: "Web Browsing", description: "Efficiently finding information online", completed: true },
                { title: "Email Usage", description: "Setting up and managing email accounts", completed: true },
                { title: "Online Security", description: "Staying safe while using the internet", completed: true },
                { title: "Cloud Services", description: "Using online storage and applications", completed: true }
            ]
        }
    ],
    relatedCategories: [
        { title: "Programming", href: "/courses?category=programming" },
        { title: "Cyber Security", href: "/courses?category=cyber-security" },
    ]
};

// Static data for other categories (could be expanded later)
const categoriesData: Record<string, any> = {
    "computer-basics": computerBasicsData
    // Other categories would be added here
};

const CategoryDetailPage = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const [category, setCategory] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API fetch delay
        const timer = setTimeout(() => {
            if (categoryId && categoriesData[categoryId]) {
                setCategory(categoriesData[categoryId]);
            }
            setLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, [categoryId]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <main className="container px-4 mx-auto py-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="animate-pulse space-y-4">
                            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-64 bg-gray-200 rounded"></div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="h-64 bg-gray-200 rounded"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    if (!category) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <main className="container px-4 mx-auto py-8">
                    <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 text-center shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">Category not found</h2>
                        <p className="text-gray-600 mb-6">The category you're looking for doesn't exist.</p>
                        <Button asChild>
                            <Link to="/home">Back to Home</Link>
                        </Button>
                    </div>
                </main>
            </div>
        );
    }

    const TopicIcon = (props: { icon: any }) => {
        const Icon = props.icon;
        return <Icon className="h-6 w-6 text-blue-600" />;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="container px-4 mx-auto py-6">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-8">
                        <div className="h-64 bg-gradient-to-r from-blue-600 to-blue-400 relative">
                            <div className="absolute inset-0 opacity-20" style={{
                                backgroundImage: `url(${category.heroImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}></div>
                            <div className="absolute inset-0 flex items-center px-6 md:px-10">
                                <div className="max-w-2xl text-white">
                                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{category.title}</h1>
                                    <p className="text-lg md:text-xl text-blue-50">{category.description}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-gray-100">
                            <div className="flex flex-wrap gap-4 items-center justify-between">
                                <div className="flex flex-wrap items-center gap-2">
                                    <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                                        <Laptop className="h-3 w-3 mr-1" />
                                        Beginner Friendly
                                    </Badge>
                                    <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                                        <Cpu className="h-3 w-3 mr-1" />
                                        Hardware & Software
                                    </Badge>
                                    <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                                        <Server className="h-3 w-3 mr-1" />
                                        Technology Fundamentals
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                                        <CheckCircle className="h-3 w-3 mr-1" />
                                        All Topics Completed
                                    </Badge>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between text-sm mb-1">
                                    <span>Course Progress</span>
                                    <span className="font-medium">100%</span>
                                </div>
                                <Progress value={100} className="h-2 bg-gray-100" />
                            </div>
                        </div>
                    </div>

                    {/* Topic Grid */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold mb-6">Topics Covered</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.topics.map((topic: any) => (
                                <Card key={topic.id} className="cursor-pointer hover:border-blue-300 transition-colors">
                                    <CardHeader className="pb-2">
                                        <div className="flex items-start gap-3">
                                            <div className="rounded-full w-12 h-12 bg-blue-100 flex items-center justify-center">
                                                <TopicIcon icon={topic.icon} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <CardTitle className="text-xl">{topic.title}</CardTitle>
                                                    {topic.completed && (
                                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-gray-600 mb-4">
                                            {topic.description}
                                        </CardDescription>
                                        <ul className="text-sm space-y-2">
                                            {topic.items.slice(0, 3).map((item: any, index: number) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <div className="min-w-4 mt-0.5">
                                                        {item.completed ? (
                                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                                        ) : (
                                                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                                                        )}
                                                    </div>
                                                    <span>{item.title}</span>
                                                </li>
                                            ))}
                                            {topic.items.length > 3 && (
                                                <li className="text-blue-600 text-xs">+ {topic.items.length - 3} more (all completed)</li>
                                            )}
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="border-t pt-4">
                                        <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                                            Review Topic
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Final Exam Section */}
                    <div className="bg-white border rounded-xl p-6 mb-8">
                        <div className="flex items-center gap-4">
                            <div className="rounded-full w-14 h-14 bg-yellow-100 flex items-center justify-center">
                                <Trophy className="h-8 w-8 text-yellow-600" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold">Final Exam Available</h2>
                                <p className="text-gray-600 mb-4">Congratulations! You've completed all the topics in this category. You're now ready to take the final exam.</p>
                            </div>
                        </div>
                        <div className="mt-4 p-4 rounded-lg bg-blue-50 border border-blue-100">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="font-medium text-lg">Computer Basics Certification Exam</h3>
                                    <p className="text-gray-600 text-sm">45 minutes · 30 questions · Passing score: 70%</p>
                                </div>
                                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                                    <Link to={`/categories/${categoryId}/exam`}>
                                        Start Final Exam
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Related Categories */}
                    <div className="bg-white rounded-xl border p-6 mb-8">
                        <h2 className="text-xl font-bold mb-4">Related Categories</h2>
                        <div className="flex flex-wrap gap-2">
                            {category.relatedCategories.map((relCategory: any, index: number) => (
                                <Link to={relCategory.href} key={index}>
                                    <Button variant="outline" className="hover:bg-blue-50">
                                        {relCategory.title}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Get Certificate Section (replacing Get Started) */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-8 text-white text-center">
                        <Trophy className="h-12 w-12 mx-auto mb-3 text-yellow-300" />
                        <h2 className="text-2xl font-bold mb-2">Ready to get certified?</h2>
                        <p className="text-blue-100 mb-4">Take the final exam and earn your Computer Basics Certificate</p>
                        <Button asChild className="bg-white text-blue-700 hover:bg-blue-50">
                            <Link to={`/categories/${categoryId}/exam`}>
                                Get Certified Now
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CategoryDetailPage; 