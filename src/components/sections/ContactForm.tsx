"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate network request (Replace with your actual fetch)
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);

    /* try {
      const res = await fetch("/api/contact", { ... });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch (err) { setStatus("error"); }
    */
  };

  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <div>
        {/* --- LEFT COLUMN: Context & Direct Contact --- */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8 lg:sticky lg:top-24"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Let's work
              <span className="text-primary"> together.</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              I'm currently available for freelance work and open to full-time
              opportunities. If you have a project that needs some creative
              engineering, I'd love to hear about it.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-primary shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">
                  Email me at
                </p>
                <a
                  href="mailto:hello@victor.dev"
                  className="text-lg font-bold hover:text-primary transition-colors"
                >
                  mdjakir.cse.ju@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-primary shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">
                  Based in
                </p>
                <p className="text-lg font-bold">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Social Proof / Links
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-widest">
              Follow my work
            </p>
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-500 hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
