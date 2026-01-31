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
                    <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-cyan-100 to-cyan-600">
                        Mohammed Al-Hashimi
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
                        Software Developer <span className="text-cyan-400">•</span> Full Stack Developer
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
                        className="px-8 py-3 rounded-full border border-cyan-500/50 bg-cyan-950/30 text-cyan-400 font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
                    >
                        View My Work
                    </Link>

                    <Link
                        href="/Contact"
                        className="px-8 py-3 rounded-full border border-white/10 text-gray-300 font-semibold hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/50 transition duration-200"
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
