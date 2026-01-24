"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExperienceList } from "./ExperienceList";
import { ProjectsGrid } from "./ProjectsGrid";

type Tab = "portfolio" | "skills";

export function ContentSwitcher() {
  const [activeTab, setActiveTab] = useState<Tab>("portfolio");

  return (
    <div className="max-w-4xl mx-auto px-4 pt-10">
      <div className="flex justify-center mb-16">
        <div className="flex p-1.5 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 w-full max-w-md">
          <button
            onClick={() => setActiveTab("portfolio")}
            className={`flex-1 py-3 text-sm font-semibold rounded-xl transition-all relative z-10 ${
              activeTab === "portfolio"
                ? "text-gray-900 dark:text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            }`}
          >
            {activeTab === "portfolio" && (
              <motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-xl -z-10 shadow-sm"
                transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              />
            )}
            Projects
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`flex-1 py-3 text-sm font-semibold rounded-xl transition-all relative z-10 ${
              activeTab === "skills"
                ? "text-gray-900 dark:text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            }`}
          >
            {activeTab === "skills" && (
              <motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-xl -z-10 shadow-sm"
                transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              />
            )}
            Experiences
          </button>
        </div>
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "portfolio" ? <ProjectsGrid /> : <ExperienceList />}
      </motion.div>
    </div>
  );
}
