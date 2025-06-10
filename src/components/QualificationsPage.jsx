import React from "react";
import { Link } from "react-router-dom";
import { Home, User, Layers, GraduationCap, Mail } from "lucide-react";

export default function QualificationsPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      
      {/* Sidebar for Desktop */}
      <div className="hidden md:flex flex-col items-center bg-black text-white w-16 py-8 space-y-6">
        <Link to="/"><Home className="w-6 h-6" /></Link>
        <Link to="/about"><User className="w-6 h-6" /></Link>
        <Layers className="w-6 h-6" />
        <GraduationCap className="w-6 h-6" />
        <Mail className="w-6 h-6" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-6 py-10 md:py-16 md:px-20">
        <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">QUALIFICATION</h1>
        
        {/* Education */}
        <section className="mb-10">
          <h2 className="text-lg font-bold border-b border-black inline-block mb-2">Education</h2>
          <p className="font-medium">Btech in Computer Science, IIT, Delhi</p>
          <p>2013–2016</p>
          <p>GPA: 92%</p>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-lg font-bold border-b border-black inline-block mb-2">Skills</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>SEO Research</li>
            <li>Creative Writing</li>
            <li>Social Media</li>
            <li>Editing and Proofreading</li>
            <li>Email Marketing</li>
            <li>Research and Fact-checking</li>
            <li>Communication</li>
            <li>Keeping Deadlines</li>
          </ul>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-lg font-bold border-b border-black inline-block mb-2">Language</h2>
          <p>English — Fluent</p>
          <p>Hindi — Native</p>
        </section>
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white flex justify-around items-center py-3 md:hidden z-50">
        <Link to="/"><Home className="w-6 h-6" /></Link>
        <Link to="/about"><User className="w-6 h-6" /></Link>
        <Layers className="w-6 h-6" />
        <GraduationCap className="w-6 h-6" />
        <Mail className="w-6 h-6" />
      </div>
    </div>
  );
}
