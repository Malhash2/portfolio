"use client";

import React from "react";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center overflow-hidden relative">

            {/* 1. BACKGROUND EFFECTS */}
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            {/* 2. MAIN CONTENT (Centered) */}
            <div className="relative z-20 flex flex-col items-center text-center space-y-8 px-4">

                {/* Name & Title */}
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Mohammed Al-Hashimi
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
                        Software Developer <span className="text-green-400">•</span> Full Stack Developer
                    </p>
                </div>

                {/* Tagline */}
                <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
                    Building scalable systems, solving complex problems, and crafting intuitive digital experiences.
                </p>

                {/* 3. NAVIGATION BUTTONS */}
                <div className="flex flex-col md:flex-row gap-4 mt-8">
                    <Link
                        href="/Projects"
                        className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition duration-200"
                    >
                        View My Work
                    </Link>

                    <Link
                        href="/Contact"
                        className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition duration-200"
                    >
                        Contact Me
                    </Link>
                </div>

            </div>

            {/* Optional: Subtle footer text */}
            <div className="absolute bottom-10 text-gray-600 text-xs uppercase tracking-widest">
                Western University • Software Engineering
            </div>

        </main>
    );
}
