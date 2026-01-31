"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { twMerge } from "tailwind-merge";

export default function Projects() {
    return (
        <main className="min-h-screen bg-gray-950 text-white py-20">
            <div className="max-w-2xl mx-auto px-4 mb-8">
                <h1 className="text-4xl font-bold mb-4">
                    My <span className="text-cyan-400">Work</span>
                </h1>
                <p className="text-gray-400">
                    A collection of projects ranging from full-stack web apps to game development.
                </p>
            </div>

            <TracingBeam className="px-6">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative">

                    {/* --- SECTION 1: FINISHED PROJECTS --- */}
                    {finishedProjects.map((item, index) => (
                        <ProjectCard key={`finished-${index}`} item={item} />
                    ))}


                    {/* --- DIVIDER: CURRENTLY WORKING ON --- */}
                    <div className="mt-24 mb-16 border-t border-gray-800/60 pt-10">
                        <div className="flex items-center gap-4 mb-2">
                            <h2 className="text-2xl font-bold text-white">
                                Currently <span className="text-blue-400">Working On</span>
                            </h2>
                            <div className="h-px bg-blue-500/30 flex-1" />
                        </div>
                        <p className="text-gray-500 text-sm">
                            Exploring low-level systems and experimental architectures.
                        </p>
                    </div>


                    {/* --- SECTION 2: CURRENT PROJECTS (Libra) --- */}
                    {currentProjects.map((item, index) => (
                        <ProjectCard key={`current-${index}`} item={item} />
                    ))}

                </div>
            </TracingBeam>
        </main>
    );
}

// --- HELPER COMPONENT (Reusable Card) ---
function ProjectCard({ item }) {
    return (
        <div className="mb-16">
            {/* Badge */}
            <h2 className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-full text-xs font-mono w-fit px-3 py-1 mb-4">
                {item.badge}
            </h2>

            {/* Title */}
            <p className={twMerge("text-2xl font-bold mb-4 text-gray-100")}>
                {item.title}
            </p>

            <div className="text-sm prose prose-sm dark:prose-invert">
                {/* Project Image */}
                {item?.image && (
                    <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden border border-gray-800">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                )}

                {/* Description */}
                <div className="text-gray-300 leading-relaxed mb-6">
                    {item.description}
                </div>

                {/* Tech Stack List */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags?.map((tag, i) => (
                        <span key={i} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                    {item.link && (
                        <Link
                            href={item.link}
                            target="_blank"
                            className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                            View Source -&gt;
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}


// --- DATA SECTION 1: COMPLETED ---
const finishedProjects = [
    {
        title: "Explore Beyond",
        badge: "Full Stack",
        tags: ["React", "Firebase", "Firestore", "Tailwind"],
        image: "/Explore-Beyond.png",
        link: "https://github.com/Malhash2/ExploreBeyond",
        description: (
            <>
                <p>
                    A scalable travel booking platform designed to handle real-time user interactions.
                    Integrated <strong>Google Firestore</strong> for live data synchronization, allowing users to see
                    booking availability updates instantaneously.
                </p>
                <p>
                    Features include user authentication, dynamic itinerary planning, and a responsive
                    dashboard for travel agents to manage listings.
                </p>
            </>
        ),
    },
    {
        title: "Echo Chart",
        badge: "Backend Engineering",
        tags: ["Java", "SQL", "REST API"],
        image: "/Echo-Chart.png",
        link: "https://github.com/Malhash2/Echo-Chart",
        description: (
            <>
                <p>
                    A robust backend system for an e-commerce application focusing on data integrity and speed.
                    Designed complex <strong>SQL schemas</strong> to handle inventory management, order processing,
                    and customer data securely.
                </p>
                <p>
                    Implemented RESTful APIs to communicate with the frontend and optimized database queries
                    to reduce latency during high-traffic simulations.
                </p>
            </>
        ),
    },
    {
        title: "Zarvonia",
        badge: "Game Dev",
        tags: ["C#", "Unity 3D", "Physics Engine"],
        image: "/Zarvonia.png",
        link: "https://github.com/Malhash2/Zarvonia",
        description: (
            <>
                <p>
                    An immersive 3D Role Playing Game developed in Unity. Scripted complex character
                    behaviors, enemy AI, and inventory systems using <strong>C#</strong>.
                </p>
                <p>
                    Focused on performance optimization within the Unity engine to ensure smooth frame rates
                    while rendering high-fidelity assets and particle effects.
                </p>
            </>
        ),
    },
];

// --- DATA SECTION 2: CURRENTLY WORKING ON ---
const currentProjects = [
    {
        title: "Libra",
        badge: "Low-Level Programming", // Or "In Active Development"
        tags: ["TUI", "C", "Systems"],
        image: "/Libra.png",
        link: "https://github.com/Malhash2/Libra",
        description: (
            <>
                <p>
                    A terminal-based text editor written in <strong>C</strong>, built from the ground up to explore
                    low-level systems programming concepts such as raw terminal I/O, memory management, and
                    efficient text manipulation.
                </p>
                <p>
                    Currently focused on implementing core editor primitives including cursor movement,
                    buffer management, and incremental rendering, with an emphasis on performance,
                    simplicity, and understanding how editors work beneath modern abstractions.
                </p>
            </>
        ),
    },
];
