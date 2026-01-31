"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { EncryptedText } from "@/components/ui/encrypted-text";

const GithubIcon = () => (
    <Image
        src="/GitHub_Invertocat_White.svg"
        alt="Github Icon"
        width={32}
        height={32}
        className="object-cover"
    />
);

const LinkedinIcon = () => (
    <Image
        src="linkedin-svg.svg"
        alt="Mohammed Al-Hashimi"
        width={32}
        height={32}
        className="object-cover"
    />
);

export default function Contact() {
    return (
        <main className="min-h-screen bg-gray-950 text-white p-8 flex flex-col justify-center items-center">
            <div className="w-full max-w-4xl space-y-12">

                {/* Header Section */}
                <section className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">
                        Reach <span className="text-cyan-400">Out</span> to Me
                    </h1>
                    <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
                        Whether you have a question, a project idea, or just want to say hi,
                        my inbox is always open. Awaiting your input.
                    </p>
                </section>

                {/* Contact Grid */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Left Column: Direct Contact (Encrypted) */}
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 flex flex-col justify-center space-y-8 hover:border-cyan-400/30 transition-colors duration-300">
                        <h2 className="text-xl font-semibold text-gray-200 mb-4">
                            Direct Contact
                        </h2>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="text-sm text-cyan-400 font-mono uppercase tracking-wider">
                                Email Address
                            </label>
                            <div className="font-mono text-lg md:text-xl text-gray-300">
                                <EncryptedText
                                    text="alhashim093@gmail.com"
                                />
                            </div>
                        </div>

                        {/* Phone Field */}
                        <div className="space-y-2">
                            <label className="text-sm text-cyan-400 font-mono uppercase tracking-wider">
                                Phone Number
                            </label>
                            <div className="font-mono text-lg md:text-xl text-gray-300">
                                <EncryptedText
                                    text="+1 519-694-8862"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Social Profiles */}
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 flex flex-col justify-center space-y-6 hover:border-cyan-400/30 transition-colors duration-300">
                        <h2 className="text-xl font-semibold text-gray-200 mb-4">
                            Social Profiles
                        </h2>

                        <Link
                            href="https://github.com/malhash2"
                            target="_blank"
                            className="group flex items-center gap-4 p-4 rounded-xl bg-gray-950 border border-gray-800 hover:border-cyan-400/50 hover:bg-gray-900 transition-all duration-300"
                        >
                            <div className="text-gray-400 group-hover:text-white transition-colors">
                                <GithubIcon />
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-200 group-hover:text-white">GitHub</h3>
                                <p className="text-sm text-gray-500">Check out my repos</p>
                            </div>
                        </Link>

                        <Link
                            href="https://linkedin.com/in/mohammed-al-hashimi-a14ba6246/"
                            target="_blank"
                            className="group flex items-center gap-4 p-4 rounded-xl bg-gray-950 border border-gray-800 hover:border-blue-400/50 hover:bg-gray-900 transition-all duration-300"
                        >
                            <div className="text-gray-400 group-hover:text-blue-400 transition-colors">
                                <LinkedinIcon />
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-200 group-hover:text-white">LinkedIn</h3>
                                <p className="text-sm text-gray-500">Lets&apos; connect professionally</p>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}
