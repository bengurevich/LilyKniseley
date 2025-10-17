import React from 'react';
import DarkLogo from "./assets/DarkLogo.png";
import Lily from "./assets/lily.jpeg";

interface AboutMeProps {
  onBack: () => void;
}

export default function AboutMe({ onBack }: AboutMeProps) {
  return (
    <div className="w-full h-screen flex flex-col text-neutral-900">
      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-6">
        <button
          onClick={onBack}
          className="inline-flex h-20 w-20 items-center justify-center hover:opacity-70 transition"
        >
          <img src={DarkLogo} alt="LK Logo" className="h-50 w-50 object-contain" />
        </button>
        <nav className="flex gap-8 text-sm">
          <button onClick={onBack} className="hover:opacity-70">Work</button>
          <a href="#play" className="hover:opacity-70">Play</a>
          <a href="#about" className="text-neutral-900 font-semibold">About</a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex items-center justify-center px-8 pb-8">
        <div className="max-w-4xl w-full flex gap-16 items-center">
          {/* Left side - Image */}
          <div className="flex-shrink-0">
            <img 
              src={Lily} 
              alt="Lily Kniseley" 
              className="w-80 h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - About content */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Hi, I'm Lily! I'm a passionate designer who believes that anything imagined can be created. 
                With a background in UI/UX design, illustration, and motion graphics, I love bringing 
                ideas to life through thoughtful and engaging design.
              </p>
              
              <p>
                My work spans across web design, game interfaces, interactive experiences, and branding. 
                I'm always excited to tackle new challenges and explore innovative ways to solve design problems.
              </p>
              
              <p>
                When I'm not designing, you can find me exploring new technologies, sketching ideas, 
                or working on personal creative projects. I'm constantly learning and growing as a designer, 
                always looking for ways to push the boundaries of what's possible.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
              <div className="grid grid-cols-2 gap-4 text-neutral-700">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Design</h3>
                  <ul className="space-y-1">
                    <li>UI/UX Design</li>
                    <li>Visual Design</li>
                    <li>Illustration</li>
                    <li>Motion Graphics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Development</h3>
                  <ul className="space-y-1">
                    <li>Web Design</li>
                    <li>Game Design</li>
                    <li>Interactive Experiences</li>
                    <li>Branding</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={onBack}
                className="bg-neutral-900 text-white px-6 py-3 rounded-md hover:bg-neutral-700 transition-colors"
              >
                Back to Work
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}