import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const isContentPage = location === "/content";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      if (isContentPage) {
        window.location.href = '/' + href;
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="text-xl font-bold" onClick={handleNavClick}>Matthew Lee</a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            {!isContentPage && (
              <Link href="/content">
                <a className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-9 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/90">
                  Masters Photo
                </a>
              </Link>
            )}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={handleNavClick}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                  {!isContentPage && (
                    <Link href="/content">
                      <a className="text-lg font-medium text-primary hover:text-primary/90 transition-colors">
                        Masters Photo
                      </a>
                    </Link>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}