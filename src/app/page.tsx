"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroSection } from "@/components/sections/HeroSection";
import { TechStack } from "@/components/sections/TechStack";
import { ContentSwitcher } from "@/components/sections/ContentSwitcher";
import { ContactForm } from "@/components/sections/ContactForm";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <main className="max-w-4xl mx-auto px-6 pt-12 pb-12 selection:bg-primary selection:text-black">
      <ThemeToggle />
      <HeroSection onContactClick={() => setShowContactForm(!showContactForm)} />
      <TechStack />
      <ContentSwitcher />

      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <ContactForm />
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-24 border-t border-gray-200 dark:border-gray-800 pt-8 pb-12 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-500 font-medium lowercase tracking-widest uppercase">
          © Md Jakir Hossain. 2026 All rights reserved
        </p>
      </footer>
    </main>
  );
}