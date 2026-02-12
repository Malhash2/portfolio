"use client";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Experience() {
	return (
		<main className="bg-gray-950 min-h-screen">

			<section className="h-[30rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
				<h1 className="md:text-7xl text-5xl lg:text-9xl font-bold text-center text-white relative z-20">
					ENGINEER
				</h1>
				<div className="w-[40rem] h-40 relative">
					{/* Gradients */}
					<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
					<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
					<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
					<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

					{/* Sparkles Component */}
					<SparklesCore
						background="transparent"
						minSize={0.4}
						maxSize={1}
						particleDensity={1200}
						className="w-full h-full"
						particleColor="#FFFFFF"
					/>

					{/* Radial Mask */}
					<div className="absolute inset-0 w-full h-full bg-gray-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
				</div>
			</section>

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
		link: "#",
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
			"Maintained the Al-Mahdi Centre website and managed Breeze payment integrations for secure community donations and registrations.",
		link: "https://github.com/yourusername",
	},
	// {
	//     title: "Frontend Developer Intern (Template)",
	//     description:
	//         "Assisted in rebuilding the company landing page using React and Tailwind CSS. improved site performance scores by 20%.",
	//     link: "#",
	// },
	// {
	// 	title: "Freelance Web Developer",
	// 	description:
	// 		"Delivered custom web solutions for local small businesses. Managed full lifecycle from client requirements to deployment.",
	// 	link: "#",
	// },
	{
		title: "Hackathon Participant",
		description:
			"Competed in 24-hour coding challenges, building rapid prototypes and pitching solutions to industry judges.",
		link: "#",
	},
];
