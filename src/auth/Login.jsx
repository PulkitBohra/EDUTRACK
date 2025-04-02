import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      navigate("/upload"); // Redirect to Excel Upload Page
    } else {
      alert("Please enter email and password!");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-[url('/t.jpg')]">

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full bg-black/30 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-xl font-bold">EduTrack</h1>
        <Button variant="ghost" className="text-white hover:bg-white hover:text-black" onClick={() => navigate("/")}>
          Home
        </Button>
      </nav>

      {/* Login Card */}
      <Card className="w-[400px] bg-white/90 shadow-xl rounded-2xl p-6 backdrop-blur-md">
        <CardContent className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
          <p className="text-gray-500 mb-6">Sign in to your account</p>

          {/* Input Fields */}
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Login Button - FIXED */}
          <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700" onClick={handleLogin}>
            Login
          </Button>

          {/* Divider */}
          <div className="my-4 w-full text-center border-b border-gray-300 leading-[0.1em]">
            <span className="bg-white px-2 text-gray-500">OR</span>
          </div>

          {/* OAuth Buttons */}
          <div className="flex gap-4 w-full">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <FaGoogle className="text-red-500" />
              Sign in with Google
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <FaGithub className="text-black" />
              Sign in with GitHub
            </Button>
          </div>

          {/* Signup Link */}
          <p className="mt-4 text-sm text-gray-600">
            Don't have an account? 
            <span className="text-indigo-600 cursor-pointer hover:underline" onClick={() => navigate("/signup")}>
              Sign up
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
