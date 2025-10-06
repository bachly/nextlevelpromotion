"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { Container } from "./container";

const navbarItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "#about" },
  { name: "Our Products", path: "#products" },
  { name: "Contact", path: "#contact" },
];

const brandName = "NextLevelPromotion";

const Navbar = (): React.ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 36);

      // Reset to home if at top
      if (window.scrollY < 100) {
        setActiveHash("");
        return;
      }

      // Check if at bottom of page for contact section
      const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveHash("#contact");
        return;
      }

      // Update active hash based on scroll position
      const sections = ["about", "products", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 0) {
            setActiveHash(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isSticky && <div className="h-[88px]" />}
      <div className={cn(
        "w-full bg-white transition-all duration-500 ease-in-out",
        isSticky ? "fixed top-0 left-0 right-0 z-50 shadow-md py-4" : "relative py-8"
      )}>
        <Container className="lg:px-11 px-2">
        <motion.div className="flex justify-between items-center">
          <Link href="/" className="flex gap-3 w-1/3 cursor-pointer">
            <label className="text-3xl font-semibold tracking-tight text-brand-500">{brandName}</label>
          </Link>
          <div className="lg:flex hidden justify-between w-2/3 ">
            <div className="flex items-center justify-center w-1/2 gap-2 lg:gap-9 text-lg mb-4 lg:mb-0">
              {navbarItems.map((item) =>
                item.path.startsWith("#") ? (
                  <a
                    href={item.path}
                    className={cn(
                      "text-xl font-bold hover:text-brand-500 transition-colors",
                      activeHash === item.path ? "text-brand-500" : "text-neutral-700"
                    )}
                    key={item.name}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.path}
                    className={cn(
                      "text-xl font-bold hover:text-brand-500 transition-colors",
                      (item.path === "/" && activeHash === "") ? "text-brand-500" : "text-neutral-700"
                    )}
                    key={item.name}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
            <div className="w-1/2 flex justify-end">
              <GetStartedButton />
            </div>
          </div>
          <div className="lg:hidden">
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <motion.svg
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              transition={{ duration: 0.2 }}
              className="w-8 h-8 text-brand-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </motion.svg>
          ) : (
            <motion.svg
              initial={{ rotate: 0 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.2 }}
              className="w-8 h-8 text-brand-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </motion.svg>
          )}
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
              className="fixed inset-0 pt-10 flex flex-col justify-start items-center w-full h-full bg-white/95 backdrop-blur-md shadow-2xl z-[100]"
            >
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
                className="w-full h-full flex flex-col items-center"
              >
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={toggleMenu}
              className="fixed top-4 right-4 z-10"
            >
              {isOpen ? (
                <motion.svg
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.2 }}
                  className="w-8 h-8 text-brand-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </motion.svg>
              ) : (
                <motion.svg
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-8 h-8 text-brand-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </motion.svg>
              )}
            </motion.button>
            <ul className="py-2 flex flex-col items-center w-full gap-4 mt-10">
              {navbarItems.map((item) =>
                item.path.startsWith("#") ? (
                  <motion.div
                    key={item.name}
                    variants={{
                      open: {
                        x: 0,
                        opacity: 1,
                        transition: {
                          x: { stiffness: 1000, velocity: -100 }
                        }
                      },
                      closed: {
                        x: 50,
                        opacity: 0,
                        transition: {
                          x: { stiffness: 1000 }
                        }
                      }
                    }}
                  >
                    <a
                      onClick={() => setIsOpen(false)}
                      href={item.path}
                    >
                      <li className={cn(
                        "px-4 py-2 text-2xl font-bold transition-colors",
                        activeHash === item.path ? "text-brand-500" : "text-neutral-800"
                      )}>{item.name}</li>
                    </a>
                  </motion.div>
                ) : (
                  <motion.div
                    key={item.name}
                    variants={{
                      open: {
                        x: 0,
                        opacity: 1,
                        transition: {
                          x: { stiffness: 1000, velocity: -100 }
                        }
                      },
                      closed: {
                        x: 50,
                        opacity: 0,
                        transition: {
                          x: { stiffness: 1000 }
                        }
                      }
                    }}
                  >
                    <Link
                      onClick={() => setIsOpen(false)}
                      href={item.path}
                    >
                      <li className={cn(
                        "px-4 py-2 text-2xl font-bold transition-colors",
                        (item.path === "/" && activeHash === "") ? "text-brand-500" : "text-neutral-800"
                      )}>{item.name}</li>
                    </Link>
                  </motion.div>
                )
              )}
            </ul>
            <motion.div
              className="w-3/4 my-4"
              variants={{
                open: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    x: { stiffness: 1000, velocity: -100 }
                  }
                },
                closed: {
                  x: 50,
                  opacity: 0,
                  transition: {
                    x: { stiffness: 1000 }
                  }
                }
              }}
            >
              <a
                href="#products"
                className="flex items-center justify-center w-full py-2 rounded-full bg-brand-500 text-base font-semibold text-white"
              >
                Get started
                <ArrowDown className="h-4 w-4 ml-2" />
              </a>
            </motion.div>
          </motion.div>
          </motion.div>
          )}
        </AnimatePresence>
          </div>
        </motion.div>
      </Container>
      </div>
    </>
  );
};

export default Navbar;

const GetStartedButton = () => {
  return (
    <a
      href="#products"
      className="flex items-center justify-center w-full lg:w-36 py-2 rounded-full bg-brand-500 text-base font-semibold text-white"
    >
      Get started
      <ArrowDown className="h-4 w-4 ml-2" />
    </a>
  );
};
