import { RevealOnScroll } from "./RevealOnScroll"
import { useState } from "react";
import emailjs from 'emailjs-com';

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, event.target, import.meta.env.VITE_PUBLIC_ID)
      .then((result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
      }).catch(() => 
        alert("Failed to send message. Please try again later."));

  }
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent text-center">Contact Me</h2>
          <form className="bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
            
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input 
              type="text" 
              id="name"
              name="name"
              required
              value={formData.name}
              className="w-full p-2 border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="John Doe"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} /> 
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input 
              type="email" 
              id="email" 
              name="email"
              required
              value={formData.email}
              className="w-full p-2 border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500" 
              placeholder="johndoe@gmail.com"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea 
              id="message" 
              name="message" 
              required 
              rows={5} 
              value={formData.message}
              className="w-full p-2 border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your message"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })} ></textarea>
            </div>
            
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">Send Message</button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
    )
}