
export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                        <p className="text-gray-300 mb-4">
                            A cloud platform that allows users to deploy and manage applications in a serverless environment. It provides a user-friendly interface for deploying applications, managing resources, and monitoring performance.
                        </p>
                        <div>
                            {["React", "Node.js", "AWS", "DOCKE"].map((tech, index) => (
                                <span 
                                    key={index} 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <button className="bg-blue-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59, 130, 246, 0.4)]">
                                <a href="#" className="text-white">View Project</a></button>
                            {/* <a href="#" className="text-blue4-400 hover:text-blue-400 transition-colors">View Project</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}