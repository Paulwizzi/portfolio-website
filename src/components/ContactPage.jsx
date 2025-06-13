import React from "react";
import { Link } from "react-router-dom";
import { Home, User, Layers, GraduationCap, Mail, Share2 } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col items-center justify-center bg-black text-white w-16 py-8 space-y-8">
        <Link to="/"><Home className="w-6 h-6 hover:scale-125" /></Link>
        <Link to="/about"><User className="w-6 h-6 hover:scale-125" /></Link>
        <Layers className="w-6 h-6" />
        <Link to="/qualification"><GraduationCap className="w-6 h-6 hover:scale-125" /></Link>
        <Link to="/contact"><Mail className="w-6 h-6 hover:scale-125" /></Link>

        <Share2 className="absolute bottom-6" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-6 py-10 md:px-24 md:py-20">
        <h1 className="text-4xl font-bold text-center mb-10 tracking-wide">CONTACT</h1>
        
        <form className="max-w-3xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">FIRST NAME:</label>
              <input type="text" className="w-full border border-black p-2 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">LAST NAME:</label>
              <input type="text" className="w-full border border-black p-2 outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">EMAIL ID:</label>
            <input type="email" className="w-full border border-black p-2 outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">MESSAGE:</label>
            <textarea rows="5" className="w-full border border-black p-2 resize-none outline-none"></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded shadow-md hover:bg-gray-900 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-1 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md bg-black rounded-full py-4 text-white flex justify-around items-center py-3 md:hidden z-50 shadow-lg">
        <Link to="/"><Home className="w-6 h-6 hover:scale-125" /></Link>
        <Link to="/about"><User className="w-6 h-6 hover:scale-125" /></Link>
        <Layers className="w-6 h-6" />
        <Link to="/qualification"><GraduationCap className="w-6 h-6 hover:scale-125" /></Link>
        <Link to="/contact"><Mail className="w-6 h-6 hover:scale-125" /></Link>
      </div>
    </div>
  );
}
