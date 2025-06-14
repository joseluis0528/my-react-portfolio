import { RevealOnScroll } from "./RevealOnScroll";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent leading-right"
        >Hi, I am Jose</h1>
        <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
          I am a first year Computer Science student at Waubonsee Community College.
          My goal is to transfer to a four-year university to complete my degree and go to Law School following graduation.
          I am passionate about programming and I am currently learning about web development.
          I love to learn new technologies and improve my skills every day.
          I am currently looking for opportunities to apply my knowledge in real-world projects.
          I am excited to connect with like-minded individuals and explore new challenges.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="bg-blue-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59, 130, 246, 0.4)]">View Projects</a>
          <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59, 130, 246, 0.2)] hover:bg-blue-500/10">Contact Me</a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
}