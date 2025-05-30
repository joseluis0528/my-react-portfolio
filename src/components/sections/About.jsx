import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {

    const frontendSkills = ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"];
    const backendSkills = ["Node.js", "Express", "MongoDB", "MySQL", "Python"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-2">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
                
                <div className="glass rounded-xl p-8 border-white/20 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I am a first year student at Waubonsee Community College, studying Computer Science. 
                        I am passionate about technology and coding. 
                        I love to learn new things and work on exciting projects.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-tranlate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((skill, index) => (
                                    <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {skill}
                                    </span>
                                ))}                     
                            </div> 
                        </div>
                        <div className="rounded-xl p-6 hover:-tranlate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((skill, index) => (
                                    <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-4"> 🧑🏽‍💻 Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>A.S. in Computer Science</strong> - Waubonesee Community College (2025 - Present)
                            </li>
                            <li>
                                Relevant Coursework: Web Developement, C++ Programming (Data Structures & Algorithms, Object-Oriented Programming).
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Job number 1 (dates)</h4>
                                <p>Job description.</p>
                            </div>
                        </div>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Job number 2 (dates)</h4>
                                <p>Job description.</p>
                            </div>
                        </div>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Job number 3 (dates)</h4>
                                <p>Job description.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}