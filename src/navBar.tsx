import React from "react";
import DarkLogo from "./assets/DarkLogo.png";
import ScrambledText from './ScrambleText';
interface NavBarProps {
  currentPage: 'work' | 'play' | 'about';
  onShowWork: () => void;
  onShowPlay: () => void;
  onShowAbout: () => void;
}


const NavBar: React.FC<NavBarProps> = ({ currentPage, onShowWork, onShowPlay, onShowAbout }) => {
  return (
    <><header className="flex items-center justify-between px-8 py-6">
          <button
              onClick={onShowWork}
              className="inline-flex h-10 w-15 items-center justify-center transition cursor-pointer group"
          >
              <img src={DarkLogo} alt="LK Logo" className="h-40 w-40 object-contain transition-transform duration-300 group-hover:-rotate-8" />
          </button>
          <nav className="flex gap-1 text-sm">
              <button
                  onClick={onShowWork}
                  className={`${currentPage === 'work' ? "text-neutral-900 font-semibold" : "hover:opacity-70"} cursor-pointer p-0 m-0 bg-transparent border-none `}
              >
                  <ScrambledText
                      className="!m-4"
                      radius={50}
                      duration={0.4}
                      speed={0.7}
                      scrambleChars=".:!@#$%"
                  >
                      Work
                  </ScrambledText>
              </button>
              <button
                  onClick={onShowPlay}
                  className={`${currentPage === 'play' ? "text-neutral-900 font-semibold" : "hover:opacity-70"} cursor-pointer p-0 m-0 bg-transparent border-none`}
              >
                  <ScrambledText
                      className="!m-4"
                      radius={50}
                      duration={0.4}
                      speed={0.7}
                      scrambleChars=".:!@#$%"
                  >
                      Play
                  </ScrambledText>
              </button>
              <button
                  onClick={onShowAbout}
                  className={`${currentPage === 'about' ? "text-neutral-900 font-semibold" : "hover:opacity-70"} cursor-pointer p-0 m-0 bg-transparent border-none`}
              >
                  <ScrambledText
                      className="!m-4"
                      radius={50}
                      duration={0.4}
                      speed={0.7}
                      scrambleChars=".:!@#$%"
                  >
                      About
                  </ScrambledText>
              </button>
          </nav>
      </header><p className="text-m mb-2 text-black pl-8">My Work</p></>
  );
};

export default NavBar;