import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Settings, User, Menu, X, Home, BookOpen, Code, Graduation, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const navItems = [
    { name: "Home", path: "/home", icon: <Home className="h-4 w-4 mr-2" /> },
    { name: "Courses", path: "/courses", icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { name: "Problems", path: "/problems", icon: <Code className="h-4 w-4 mr-2" /> },
  ];

  const courseCategories = [
    { name: "Web Development", path: "/courses?category=Web%20Development" },
    { name: "Mobile Development", path: "/courses?category=Mobile%20Development" },
    { name: "Data Science", path: "/courses?category=Data%20Science" },
    { name: "Security", path: "/courses?category=Security" },
    { name: "Design", path: "/courses?category=Design" },
    { name: "AI & ML", path: "/courses?category=AI%20%26%20ML" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="flex items-center">
          <Link to="/home" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary/60 rounded-md flex items-center justify-center">
              <span className="font-bold text-xl text-white">PH</span>
            </div>
            <span className="font-bold text-xl text-primary hidden sm:inline-block">Programming Hub</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/home">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive("/home") && "bg-accent text-accent-foreground"
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    isActive("/courses") && "bg-accent text-accent-foreground"
                  )}
                >
                  Courses
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {courseCategories.map((category) => (
                      <li key={category.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={category.path}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{category.name}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Explore our {category.name.toLowerCase()} courses
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                    <li className="col-span-2">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/courses"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">
                            View All Courses
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Explore our complete catalog of courses
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/problems">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive("/problems") && "bg-accent text-accent-foreground"
                    )}
                  >
                    Problems
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-4 py-4">
                <Link
                  to="/home"
                  className={`flex items-center px-4 py-2 rounded-md ${isActive("/home") ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Link>
                <Link
                  to="/courses"
                  className={`flex items-center px-4 py-2 rounded-md ${isActive("/courses") ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Courses
                </Link>
                <Link
                  to="/problems"
                  className={`flex items-center px-4 py-2 rounded-md ${isActive("/problems") ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Code className="h-4 w-4 mr-2" />
                  Problems
                </Link>

                <div className="px-4 pt-2 pb-1 text-sm font-medium text-muted-foreground">
                  Course Categories
                </div>
                {courseCategories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.path}
                    className="flex items-center px-6 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-r from-primary to-primary/60 text-white">
                      US
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 z-50">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>My Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => setIsLoggedIn(false)}
                  className="text-destructive focus:text-destructive"
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-2">
              <Link to="/login" className="hidden sm:block">
                <Button variant="outline">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">Sign up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
