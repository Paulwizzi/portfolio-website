import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  User,
  Layers,
  GraduationCap,
  Mail,
  Share2,
} from "lucide-react";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col justify-between items-center bg-black text-white w-16 py-6">
        <div className="space-y-6">
         <Link to="/">
          <Home className="w-6 h-6" />
         </Link>      
         <Link to="/about">
          <button><User className="w-6 h-6" /></button>
         </Link>
          <Layers className="w-6 h-6" />
        <Link to="/qualification">
          <button><GraduationCap className="w-6 h-6" /></button>
        </Link>
          <Mail className="w-6 h-6" />
        </div>
        <Share2 className="w-6 h-6" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="bg-white p-6 sm:p-12 rounded-[3rem] border border-black shadow-[8px_8px_0_0_black] max-w-3xl w-full text-center">
          <h1 className="text-3xl sm:text-4xl font-bold drop-shadow-[2px_2px_black] mb-6">
            ABOUT ME
          </h1>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      {/* Mobile Bottom Sidebar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white flex justify-around items-center py-3 md:hidden">
       <Link to="/">
          <Home className="w-6 h-6" />
         </Link> 
        <Link to="/about">
         <button><User className="w-6 h-6" /></button>
        </Link>
        <Layers className="w-5 h-5" />
        <Link to="/qualification">
          <button><GraduationCap className="w-6 h-6" /></button>
        </Link>
        <Mail className="w-5 h-5" />
        <Share2 className="w-5 h-5" />
      </div>
    </div>
  );
};

export default AboutMe;
