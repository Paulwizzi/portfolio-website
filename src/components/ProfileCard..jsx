import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, User, Layers, GraduationCap, Mail, Share2, } from "lucide-react";
import img from "../assets/profilepic.png";

const ProfileCard = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
     <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 relative">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col items-center justify-center bg-black text-white w-16 py-8 space-y-8">
         <Home className="w-6 h-6" />
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

      {/* Main Content */}
      <div className="flex flex-1 justify-center items-center p-6 pb-20 md:pb-6">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8">
          <div className="relative bg-white border-black border-2 p-4 rounded-lg shadow-lg">
            <img src={img}
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-black">WISDDOM PAUL</h1>
            <p className="text-lg md:text-2xl text-gray-600 font-bold text-black mt-1">DESIGNER</p>
            <div className="mt-5 flex flex-row gap-4 justify-center md:justify-start">
             <Link to="/projects"> 
              <button className="border-2 border-black hover:bg-black hover:text-white font-bold shadow-lg py-2 px-6 transition">
                RESUME
              </button>
             </Link>                 
             <Link to="/contact"> 
              <button className="px-6 py-2 border-2 border-black shadow-lg hover:bg-black hover:text-white font-bold transition">
                CONTACT
              </button>
             </Link>      
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation (Mobile Only) */}
      <div className="fixed bottom-1 left-17 right-0 w-11/12 max-w-md bg-black rounded-full py-4 text-white flex justify-around items-center py-3 md:hidden z-50 shadow-lg">
        <button><Home className="w-6 h-6" /></button>
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
};

export default ProfileCard;
