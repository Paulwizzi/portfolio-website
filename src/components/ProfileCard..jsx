import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, User, Layers, GraduationCap, Mail, Menu } from "lucide-react";

const ProfileCard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
     <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 relative">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col items-center bg-black text-white w-16 py-8 space-y-6">
        <Home className="w-6 h-6" />
        <Link to="/about">
        <button><User className="w-6 h-6" /></button>
        </Link>
        <Layers className="w-6 h-6" />
        <Link to="/qualification">
          <button><GraduationCap className="w-6 h-6" /></button>
        </Link>
        <Mail className="w-6 h-6" />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 justify-center items-center p-6 pb-20 md:pb-6">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8">
          <div className="bg-white p-4 rounded-xl shadow-xl">
            <img
              src="/profile-placeholder.png"
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-black">WISDDOM PAUL</h1>
            <p className="text-lg md:text-xl text-gray-600 mt-1">DESIGNER</p>
            <div className="mt-5 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/projects"> 
              <button className="px-6 py-2 border-2 border-black shadow hover:bg-black hover:text-white transition">
                RESUME</button>
            </Link>  
            <Link to="/contact"> 
              <button className="px-6 py-2 border-2 border-black shadow hover:bg-black hover:text-white transition">
                CONTACT</button>
            </Link>      
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white flex justify-around items-center py-3 md:hidden z-50">
        <button><Home className="w-6 h-6" /></button>
        <Link to="/about">
        <button><User className="w-6 h-6" /></button>
        </Link>
        <button><Layers className="w-6 h-6" /></button>
        <Link to="/qualification">
          <button><GraduationCap className="w-6 h-6" /></button>
        </Link>
        <button><Mail className="w-6 h-6" /></button>
      </div>
    </div>
  );
};

export default ProfileCard;
