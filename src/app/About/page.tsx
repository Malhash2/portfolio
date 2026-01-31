"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export default function About() {
    return (
        <main className="min-h-screen bg-gray-950 text-white pb-20">

            {/* 1. THE LAMP HEADER */}
            {/* The LampContainer is naturally tall, so we use it as the background for the top half */}
            <LampContainer className="pt-36">
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent md:text-8xl"
                >
                    About Me
                </motion.h1>
            </LampContainer>

            {/* 2. THE BIO SECTION */}
            {/* -mt-72 pulls this section UP to sit inside the glow of the lamp */}
            <section className="relative z-30 -mt-72 w-full max-w-6xl mx-auto px-6">

                {/* Card Container for better readability against the glow */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-gray-900/50 border border-gray-800 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl">

                    {/* Text Content */}
                    <div className="flex-1 space-y-6">
                        <h2 className="text-2xl font-semibold text-cyan-400 tracking-wide uppercase">
                            Who am I?
                        </h2>
                        <div className="text-gray-300 leading-relaxed text-lg space-y-4">
                            <p>
                                I’m a fourth-year Software Engineering student at Western University
                                with experience in full-stack development, database systems, and
                                scalable web applications. I’m skilled in Java, Python, JavaScript,
                                and C#, with hands-on practice using React, Node.js, Express.js, and
                                both SQL/NoSQL databases.
                            </p>
                            <p>
                                I’ve worked on projects ranging from a Unity 3D RPG to a travel
                                platform with real-time Firestore integration and a robust SQL-based
                                e-commerce system. Beyond academics, I’ve gained practical
                                experience tutoring programming and contributing to community
                                software initiatives.
                            </p>
                            <p>
                                I’m passionate about backend engineering and system optimization,
                                and I enjoy building efficient, reliable solutions that solve
                                real-world problems. My goal is to apply my knowledge and creativity
                                to impactful projects that drive innovation and deliver value.
                            </p>
                        </div>
                    </div>

                    {/* Picture */}
                    <div className="flex-shrink-0">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-slate-700/50 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/me.webp"
                                alt="Mohammed Al-Hashimi"
                                width={320}
                                height={320}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
