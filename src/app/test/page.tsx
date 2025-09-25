"use client";

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
		<main className="min-h-screen bg-gray-950 text-white p-8">
			<h1 className="text-2xl font-bold mb-6">About Me</h1>
			<CodeBlock
				language="jsx"
				filename="About.jsx"
				highlightLines={[9, 13, 14, 18]}
				code={code}
			/>
		</main>
	);
}
