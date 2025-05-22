
export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text text-transparent leading-right">Hello, I am Jose Tech</h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I am a first year student at Waubonsee Community College, studying Computer Science. 
          I am passionate about technology and coding. 
          I love to learn new things and work on exciting projects.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="bg-blue-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59, 130, 246, 0.4)]">View Projects</a>
          <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59, 130, 246, 0.2)] hover:bg-blue-500/10">Contact Me</a>
        </div>
      </div>
    </section>
  );
}





          // <h1 className="text-5xl md:text-7xl font-bold text-white">
          //   Hello, I'm <span className="text-blue-500">Jose</span>
          // </h1>
          // <p className="mt-4 text-lg md:text-xl text-gray-400">
          //   A passionate developer with a love for coding and technology.
          // </p>
          // <a href="#about" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
          //   Learn More
          // </a>