import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AddressBar from "./components/AddressBar";
import HeroSection from "./components/HeroSection";
import FAQ from "./components/FAQ";
import "./App.css";

const App: React.FC = () => {
  const [fullscreen, setFullscreen] = useState(false);
  return (
    <main className="px-8">
      {!fullscreen && (
        <>
          <Navbar />
          <AddressBar />
          <HeroSection fullscreen={fullscreen} setFullscreen={setFullscreen} />
          <FAQ />
        </>
      )}
      {fullscreen && (
        <HeroSection fullscreen={fullscreen} setFullscreen={setFullscreen} />
      )}
    </main>
  );
};

export default App;
