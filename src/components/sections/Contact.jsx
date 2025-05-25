
export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent text-center">Contact Me</h2>
        <form className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea id="message" rows="4" className="w-full p-2 border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">Send Message</button>
        </form>
      </div>
    </section>)
}