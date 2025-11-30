"use client";

import Image from "next/image";
import { CodeBlock } from "@/components/ui/code-block";

export default function Home() {
	const code = `const coder = {
  name: 'Mohammed Al-Hashimi',
  education: 'B.Eng. Software Engineering @ Western University',
  skills: [
    'Java', 'JavaScript', 'Python', 'C#', 'C++', 'C'
    'SQL/NoSQL', 'React', 'Node.js', 'Express.js',
    'Tailwind CSS', 'AWS', 'Firebase', 'Next.js',
    'Git', 'HTML', 'CSS'
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  ContinousLearner: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`;
	return (
		<main className="min-h-screen bg-gray-950 text-white p-8 space-y-16">

			<section>
				<h1 className="text-2xl font-bold mb-6 pt-8">About Me</h1>
				<CodeBlock
					language="jsx"
					filename="About.jsx"
					highlightLines={[9, 13, 14, 18]}
					code={code}
				/>
			</section>

			<section className="flex flex-col md:flex-row items-center md:items-start gap-8">

				<div className="flex-1">
					<h2 className="text-xl font-semibold mb-4 text-green-400">
						WHO AM I?
					</h2>
					<p className="text-gray-300 leading-relaxed">
						I’m a fourth-year Software Engineering student at Western University with experience in full-stack development, database systems, and scalable web applications. I’m skilled in Java, Python, JavaScript, and C#, with hands-on practice using React, Node.js, Express.js, and both SQL/NoSQL databases.

						I’ve worked on projects ranging from a Unity 3D RPG to a travel platform with real-time Firestore integration and a robust SQL-based e-commerce system. Beyond academics, I’ve gained practical experience tutoring programming and contributing to community software initiatives.

						I’m passionate about backend engineering and system optimization, and I enjoy building efficient, reliable solutions that solve real-world problems. My goal is to apply my knowledge and creativity to impactful projects that drive innovation and deliver value.					</p>
				</div>

				{/* Picture */}
				<div className="flex-shrink-0">
					<div className="w-64 h-64 rounded-lg overflow-hidden border-4 border-blue-500 shadow-lg">
						<Image
							src="/me.webp" // place your image in /public/me.jpg
							alt="Mohammed Al-Hashimi"
							width={256}
							height={256}
							className="object-cover"
						/>
					</div>
				</div>
			</section>
		</main>
	);
}

