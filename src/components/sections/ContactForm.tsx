"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json" },
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <section className="mt-32 max-w-2xl mx-auto px-6 mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
                <p className="text-gray-600 dark:text-gray-400">Have a project in mind? Let's build something amazing together.</p>
            </div>

            <div className="bg-white dark:bg-gray-800/50 p-8 rounded-[32px] border border-gray-100 dark:border-gray-700 shadow-xl">
                {status === "success" ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center py-10 text-center"
                    >
                        <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-600 dark:text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                        <button
                            onClick={() => setStatus("idle")}
                            className="mt-6 text-primary font-bold hover:underline"
                        >
                            Send another message
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1">Name</label>
                            <input
                                required
                                type="text"
                                placeholder="John Doe"
                                className="w-full bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 rounded-2xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1">Email</label>
                            <input
                                required
                                type="email"
                                placeholder="john@example.com"
                                className="w-full bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 rounded-2xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1">Message</label>
                            <textarea
                                required
                                rows={4}
                                placeholder="Tell me about your project..."
                                className="w-full bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 rounded-2xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white resize-none"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        {status === "error" && (
                            <div className="flex items-center gap-2 text-red-500 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl text-sm">
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                <p>Failed to send message. Please try again or email me directly.</p>
                            </div>
                        )}

                        <button
                            disabled={status === "loading"}
                            className="w-full bg-primary hover:bg-yellow-500 text-gray-900 font-bold py-4 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            type="submit"
                        >
                            {status === "loading" ? (
                                <div className="w-6 h-6 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <Send className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
