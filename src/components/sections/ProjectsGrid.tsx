"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Code2, Layers } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface IProject {
  id: number;
  title: string;
  category: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  tech: string[];
  frontendRepo: string;
  backendRepo: string;
  live: string;
  video: string;
}
export function ProjectsGrid() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<null | IProject>(null);

  return (
    <>
      {/* --- GRID VIEW --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pb-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id || index}
            layoutId={`card-${project.id || index}`}
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            {/* Image Section */}
            <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900">
              <img
                src={project.image || "/api/placeholder/600/400"} // Fallback image if none provided
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay with Quick Actions */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <span className="flex items-center gap-2 text-white font-medium px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
                  View Details
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col gap-3 grow">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <Layers className="w-5 h-5 text-gray-400" />
              </div>

              <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
                {project.shortDescription}
              </p>

              {/* Tech Stack Pills (Limit to 3) */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.tech?.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech?.length > 3 && (
                  <span className="px-2.5 py-1 text-xs font-medium text-gray-400">
                    + {project.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- DETAILS MODAL (The "Page" View) --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content */}
            <motion.div
              layoutId={`card-${selectedProject.id || projects.indexOf(selectedProject)}`}
              className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            >
              {/* Close Button (Sticky) */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Content Area */}
              <div className="overflow-y-auto custom-scrollbar">
                {/* Media Section: Video or Image */}
                <div className="w-full aspect-video bg-black">
                  {selectedProject.video ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={selectedProject.video}
                      title={selectedProject.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Content Body */}
                <div className="p-8 space-y-8">
                  {/* Header & Links */}
                  <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-8">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedProject.title}
                      </h2>
                      <p className="text-gray-500 dark:text-gray-400 font-medium">
                        {selectedProject.category || "Full Stack Application"}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {selectedProject.frontendRepo && (
                        <a
                          href={selectedProject.frontendRepo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-medium transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Client
                        </a>
                      )}
                      {selectedProject.backendRepo && (
                        <a
                          href={selectedProject.backendRepo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-medium transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Server
                        </a>
                      )}
                      {selectedProject.live && (
                        <a
                          href={selectedProject.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all shadow-lg shadow-primary/25"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-4">
                      <h3 className="text-lg font-bold flex items-center gap-2">
                        <Code2 className="w-5 h-5 text-primary" />
                        Project Overview
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    {/* Tech Stack Sidebar */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold flex items-center gap-2">
                        <Layers className="w-5 h-5 text-primary" />
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap content-start gap-2">
                        {selectedProject.tech?.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
