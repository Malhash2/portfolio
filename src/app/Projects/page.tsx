"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { twMerge } from "tailwind-merge";

// Optional: If you don't use calsans, you can remove this and the className usage below

export default function Projects() {
    return (
        <main className="min-h-screen bg-gray-950 text-white py-20">
            <div className="max-w-2xl mx-auto px-4 mb-8">
                <h1 className="text-4xl font-bold mb-4">
                    My <span className="text-green-400">Work</span>
                </h1>
                <p className="text-gray-400">
                    A collection of projects ranging from full-stack web apps to game development.
                </p>
            </div>

            <TracingBeam className="px-6">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                    {projectData.map((item, index) => (
                        <div key={`content-${index}`} className="mb-16">

                            {/* Primary Category Badge */}
                            <h2 className="bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-mono w-fit px-3 py-1 mb-4">
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

                                {/* Extra Idea: Tech Stack List */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.tags?.map((tag, i) => (
                                        <span key={i} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Extra Idea: Links */}
                                <div className="flex gap-4">
                                    {item.link && (
                                        <Link
                                            href={item.link}
                                            target="_blank"
                                            className="text-sm font-semibold text-green-400 hover:text-green-300 transition-colors"
                                        >
                                            View Source -&gt;
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </main>
    );
}

// TEMPLATE DATA
const projectData = [
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
    // {
    //     title: "Project Title Placeholder",
    //     badge: "Category",
    //     tags: ["Tech A", "Tech B", "Tech C"],
    //     image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
    //     description: (
    //         <>
    //             <p>
    //                 This is a template for future projects. Describe the problem you solved here.
    //                 Mention the specific challenges you faced and how your technical choices
    //                 overcame them.
    //             </p>
    //             <p>
    //                 Highlight the impact of the project (e.g., "Reduced load times by 40%" or
    //                 "Used by 500+ students").
    //             </p>
    //         </>
    //     ),
    // },
];
