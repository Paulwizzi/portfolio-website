import React from "react";
import { Link } from "react-router-dom";
import { Home, User, Layers, GraduationCap, Mail, Share2, } from "lucide-react";
import img1 from "../assets/project1.png";
import img2 from "../assets/project2.png";
import img3 from "../assets/project3.png";
import img4 from "../assets/project4.png";
import img5 from "../assets/project5.png";
import img6 from "../assets/project6.png";

const projects = [
  img1, 
  img2,
  img3,
  img4,
  img5,
  img6
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col items-center justify-center bg-black text-white w-16 py-8 space-y-8">
        <Link to="/">
          <Home className="w-6 h-6 hover:scale-125" />
        </Link>
        <Link to="/about">
        <button><User className="w-6 h-6 hover:scale-125" /></button>
        </Link>
        <Layers className="w-6 h-6" />
        <Link to="/qualification">
         <button><GraduationCap className="w-6 h-6 hover:scale-125" /></button>
        </Link>
        <Mail className="w-6 h-6" />

        <Share2 className="absolute bottom-6" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pt-6 pb-20">
        <h1 className="text-4xl font-bold mb-8">PROJECTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {projects.map((src, idx) => (
            <div
              key={idx}
              className="bg-white shadow-xl rounded-lg overflow-hidden"
              style={{ boxShadow: "10px 10px 0 #000" }}
            >
              <img src={src} alt={`Project ${idx + 1}`} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation (Mobile Only) */}
      <div className="fixed bottom-1 left-17 right-0 w-11/12 max-w-md bg-black rounded-full py-4 text-white flex justify-around items-center py-3 md:hidden z-50 shadow-lg">
        <Link to="/">
          <Home className="w-6 h-6 hover:scale-125" />
        </Link>
        <Link to="/about">
          <button><User className="w-6 h-6 hover:scale-125" /></button>
        </Link>
        <button><Layers className="w-6 h-6" /></button>
        <Link to="/qualification">
          <button><GraduationCap className="w-6 h-6 hover:scale-125" /></button>
        </Link>
        <button><Mail className="w-6 h-6" /></button>
      </div>
    </div>
  );
}

