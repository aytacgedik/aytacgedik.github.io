"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { SOCIAL_LINKS_DATA } from "../hero/hero.constants";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

export interface NavItem {
  name: string;
  url: string;
  icon?: LucideIcon;
}

interface NavbarProps {
  navItems: NavItem[];
  splashCursorEnabled: boolean;
  setSplashCursorEnabled: (value: boolean) => void;
  brandName?: string;
  className?: string;
}

export function Navbar({
  navItems,
  splashCursorEnabled,
  setSplashCursorEnabled,
  brandName = "Aytac Gedik",
  className,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const sectionRefs = useRef<Map<string, HTMLElement | null>>(new Map());
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    sectionRefs.current.clear();

    if (pathname === "/") {
      const options = {
        root: null, // viewport
        rootMargin: "-40% 0px -60% 0px",
        threshold: 0,
      };

      observer.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (entry.isIntersecting && id) {
            setActiveSection(id);
          }
        });
      }, options);

      navItems.forEach((item) => {
        const sectionId = item.url.startsWith("#")
          ? item.url.substring(1)
          : null;
        if (sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            sectionRefs.current.set(sectionId, element);
            observer.current?.observe(element);
          }
        }
      });
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
      sectionRefs.current.clear();
    };
  }, [navItems, pathname]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isLinkActive = (item: NavItem): boolean => {
    const sectionId = item.url.startsWith("#") ? item.url.substring(1) : null;
    return sectionId === activeSection;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent",
        className
      )}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="#home"
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
              onClick={() => setActiveSection("home")}
            >
              {brandName}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out",
                  isLinkActive(item)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={isLinkActive(item) ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div
              className="h-6 w-px bg-border mx-2 lg:mx-4 "
              aria-hidden="true"
            ></div>
            <div className="flex items-center space-x-2">
              <Switch
                id="splash-mode"
                checked={splashCursorEnabled}
                onCheckedChange={setSplashCursorEnabled}
              />
              <Label htmlFor="splash-mode"  className="text-muted-foreground hover:text-foreground transition-colors">Splash Cursor</Label>
            </div>
            <div
              className="h-6 w-px bg-border mx-2 lg:mx-4 "
              aria-hidden="true"
            ></div>

            <div className="flex items-center space-x-3">
              {SOCIAL_LINKS_DATA.map((social) => (
                <a
                  key={social.testid}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  data-testid={social.testid}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open main menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader className="border-b pb-4 mb-4">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.url}
                        className={cn(
                          "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ease-in-out",
                          isLinkActive(item)
                            ? "bg-primary/10 text-primary" 
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground" 
                        )}
                        aria-current={isLinkActive(item) ? "page" : undefined}
                      >
                        {/* FIX: Wrap icon and name in a single span */}
                        <span className="flex items-center">
                          {" "}
                          {item.icon && (
                            <item.icon className="inline-block h-4 w-4 mr-2 flex-shrink-0" />
                          )}{" "}
                          {item.name}
                        </span>
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
