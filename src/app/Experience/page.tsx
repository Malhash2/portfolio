"use client";
import React from "react";
import { motion } from "framer-motion"; // Ensure you have framer-motion installed
import { LampContainer } from "@/components/ui/lamp";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Experience() {
    return (
        <main className="bg-gray-950 min-h-screen">

            {/* Lamp Header Section */}
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    My Journey <br /> & Experience
                </motion.h1>
            </LampContainer>

            {/* Experience Cards Section */}
            {/* We add negative margin -mt-80 (adjust as needed) to pull the cards up 
          into the light of the lamp, otherwise they sit too far down */}
            <div className="max-w-5xl mx-auto px-8 -mt-60 pb-20 relative z-10">
                <HoverEffect items={experienceData} />
            </div>

        </main>
    );
}

// DATA: Pre-filled with your context + templates
const experienceData = [
    {
        title: "Software Engineering Student @ Western Univ.",
        description:
            "Currently in 4th year, focusing on full-stack development and system optimization. Dean's List student with a passion for scalable architecture.",
        link: "https://www.uwo.ca",
    },
    {
        title: "Programming Tutor",
        description:
            "Mentored junior students in Java, Python, and Data Structures. Helped break down complex algorithmic concepts into digestible lessons.",
        link: "#", // Add link if applicable, or keep #
    },
    {
        title: "Community Software Contributor",
        description:
            "Collaborated with open-source teams to fix bugs and improve documentation. Gained experience in Git workflows and code reviews.",
        link: "https://github.com/yourusername",
    },
    {
        title: "Frontend Developer Intern (Template)",
        description:
            "Assisted in rebuilding the company landing page using React and Tailwind CSS. improved site performance scores by 20%.",
        link: "#",
    },
    {
        title: "Freelance Web Developer",
        description:
            "Delivered custom web solutions for local small businesses. Managed full lifecycle from client requirements to deployment.",
        link: "#",
    },
    {
        title: "Hackathon Participant",
        description:
            "Competed in 24-hour coding challenges, building rapid prototypes and pitching solutions to industry judges.",
        link: "#",
    },
];
