import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Ensure the path is correct

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-[#8c1616] text-white py-4 px-2 flex items-center justify-between relative z-50 shadow-lg h-20">
      {/* Left: Logo */}
      <div className="ml-4">
        <img src="/LNMIIT-LOGO.jpg" alt="LNMIIT Logo" className="h-14 w-auto" />
      </div>

      {/* Centered Title */}
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center">
        <h1 className="text-lg font-bold">LNM Institute of Information Technology</h1>
        <p className="text-sm">Deemed to be University</p>
      </div>

      {/* Right: Navigation Links */}
      <div className="flex items-center gap-4 mr-10">
        <span className="cursor-pointer hover:bg-white hover:text-[#8c1616] px-4 py-2 rounded-md transition duration-300">
          Home
        </span>
        <span className="cursor-pointer transition duration-300 hover:text-gray-300 px-4 py-2">
          About
        </span>


        {/* Buttons */}
        <div className="mt-6 flex gap-4">

        <Button variant="outline" onClick={() => navigate("/login")}>
          Login
        </Button>
        <Button variant="outline" onClick={() => navigate("/signup")}>
          Signup
        </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; // Default export for the Navbar component
