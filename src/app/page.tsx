"use client";

import Image from "next/image";
import { CodeBlock } from "@/components/ui/code-block";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
    const code = `const coder = {
  name: 'Mohammed Al-Hashimi',
  education: 'B.Eng. Software Engineering @ Western University',
  skills: [
    'Java', 'JavaScript', 'Python', 'C#', 'C++', 'C',
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
        <main className="min-h-screen bg-gray-950 text-white pb-20">

            {/* --- SECTION 1: HERO (Sparkles & Title) --- */}
            {/* I reduced the height to h-[30rem] so it's not too tall */}
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

            {/* --- SECTION 2: CODE BLOCK --- */}
            {/* Placed outside the hero so it has its own space. 
          -mt-32 pulls it up to overlap slightly with the sparkles/fade if you want that effect. 
          mx-auto centers it. */}
            <section className="-mt-32 relative z-30 w-full max-w-4xl mx-auto px-6">
                <CodeBlock
                    language="jsx"
                    filename="About.jsx"
                    highlightLines={[9, 13, 14, 18]}
                    code={code}
                />
            </section>

            {/* --- SECTION 3: BIO --- */}
            <section className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-6xl mx-auto px-8 mt-20">
                <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-4 text-green-400">
                        WHO AM I?
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        I’m a fourth-year Software Engineering student at Western University
                        with experience in full-stack development, database systems, and
                        scalable web applications. I’m skilled in Java, Python, JavaScript,
                        and C#, with hands-on practice using React, Node.js, Express.js, and
                        both SQL/NoSQL databases. <br /> <br />
                        I’ve worked on projects ranging from a Unity 3D RPG to a travel
                        platform with real-time Firestore integration and a robust SQL-based
                        e-commerce system. Beyond academics, I’ve gained practical
                        experience tutoring programming and contributing to community
                        software initiatives. <br /> <br />
                        I’m passionate about backend engineering and system optimization,
                        and I enjoy building efficient, reliable solutions that solve
                        real-world problems. My goal is to apply my knowledge and creativity
                        to impactful projects that drive innovation and deliver value.
                    </p>
                </div>

                {/* Picture */}
                <div className="flex-shrink-0">
                    <div className="w-64 h-64 rounded-lg overflow-hidden border-4 border-blue-500 shadow-lg">
                        <Image
                            src="/me.webp"
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
