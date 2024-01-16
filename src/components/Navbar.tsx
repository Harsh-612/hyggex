import React from "react";
import logo from "../assets/Logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="h-fit flex justify-between mt-6">
      <img src={logo} className="scale-100" />
      <div className="flex gap-7 text-xl items-center">
        <div>Home</div>
        <div>Flashcard</div>
        <div>Contact</div>
        <div>FAQ</div>
        <button className="bg-gradient-to-t from-[#2283f0] to-[#061c93] px-4 py-1 rounded-full text-white">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
