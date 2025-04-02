import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/shared/Navbar"; // Import the Navbar component
import { Button } from "@/components/ui/button"; // Ensure the import is correct

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Navbar />
      <main className="w-full h-screen relative">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://lnmiit.ac.in/wp-content/uploads/2024/02/lnmiit_view.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/30">
          <h1 className="text-6xl font-bold">Igniting Minds,</h1>
          <h1 className="text-6xl font-bold">Empowering Future</h1>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
