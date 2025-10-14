import React, { useState } from "react";
import DarkLogo from "./assets/DarkLogo.png";
import KTPSplash from "./assets/KTP_spash-01.png";
import Lily from "./assets/lily.jpeg";
import Splish from "./assets/SplishSplash_BACKcover.jpg";
import RTSSplashScreen from "./assets/RTS_SplashScreen.jpg";
import MHHS from "./assets/MHHS_media-22.png"

export default function App() {
  const projects = [
    { id: 1, title: "", image: KTPSplash, description: "UI/UX · Illustration · Motion", subtitle: "an interactive website gamifying climate change", year: "2023" },
    { id: 2, title: "", image: RTSSplashScreen, description: "Web Design · Development", subtitle: "real-time strategy game interface", year: "2024" },
    { id: 3, title: "", image: Splish, description: "UI/UX · Game Design", subtitle: "engaging splash screen experience", year: "2024" },
    { id: 4, title: "", image: MHHS, description: "Web Design · Branding", subtitle: "personal portfolio showcase", year: "2025" },
    { id: 5, title: "", image: Lily, description: "Web Design · Branding", subtitle: "personal portfolio showcase", year: "2025" }
  ];

  const [currentCenterIndex, setCurrentCenterIndex] = useState(0);

  const handleProjectClick = (clickedIndex: React.SetStateAction<number>) => {
    setCurrentCenterIndex(clickedIndex);
  };

  // Get the projects arranged for display
  const getArrangedProjects = () => {
    const totalProjects = projects.length;
    const arranged = [];
    
    // Left side projects (previous 2)
    for (let i = 2; i >= 1; i--) {
      const index = (currentCenterIndex - i + totalProjects) % totalProjects;
      if (arranged.length < 2) {
        arranged.push({ ...projects[index], originalIndex: index, position: 'left' });
      }
    }
    
    // Right side projects (next 2) 
    for (let i = 1; i <= 2; i++) {
      const index = (currentCenterIndex + i) % totalProjects;
      if (arranged.length < 4) {
        arranged.push({ ...projects[index], originalIndex: index, position: 'right' });
      }
    }
    
    return arranged;
  };

  const sideProjects = getArrangedProjects();
  const centerProject = projects[currentCenterIndex];

  return (
    <div className="w-full h-screen flex flex-col text-neutral-900">
      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-6">
        <a
          href="#"
          className="inline-flex h-20 w-20 items-center justify-center"
        >
          <img src={DarkLogo} alt="LK Logo" className="h-50 w-50 object-contain" />
        </a>
        <nav className="flex gap-8 text-sm">
          <a href="#work" className="hover:opacity-70">Work</a>
          <a href="#play" className="hover:opacity-70">Play</a>
          <a href="#about" className="hover:opacity-70">About</a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col justify-between px-8 pb-8">
        {/* “My Work” label */}
        <p className="text-xs mb-2 text-neutral-600">My Work</p>

        {/* CENTER SECTION */}
        <div className="relative flex-1 flex items-center justify-center">
          {/* Background burst placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[60vh] w-[60vw] rounded-full" />
          </div>

          {/* Project row */}
          <div className="relative z-10 flex items-center justify-center w-full px-8">
            {/* Left side projects */}
            <div className="flex items-center gap-8 mr-12">
              {sideProjects.filter(p => p.position === 'left').map((project) => (
                <ProjectSplash 
                  key={project.id} 
                  title={project.title} 
                  image={project.image}
                  onClick={() => handleProjectClick(project.originalIndex)}
                />
              ))}
            </div>

            {/* Center hero project */}
            <div 
              key={centerProject.id} 
              className="w-[650px] h-[650px] border border-neutral-300 flex items-center justify-center text-5xl font-bold shadow-2xl bg-cover bg-center relative rounded" 
              style={{ backgroundImage: `url(${centerProject.image})` }}
            >
              <div className="absolute inset-0 rounded flex items-center justify-center">
                <span className="text-white text-center">{centerProject.title}</span>
              </div>
            </div>

            {/* Right side projects */}
            <div className="flex items-center gap-8 ml-12">
              {sideProjects.filter(p => p.position === 'right').map((project) => (
                <ProjectSplash 
                  key={project.id} 
                  title={project.title} 
                  image={project.image}
                  onClick={() => handleProjectClick(project.originalIndex)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER SECTION */}
        <div className="flex justify-between items-end">
          {/* Left side */}
          <div>
            <p className="text-sm">
              Hi I’m Lily... <span className="text-neutral-500">a designer</span>
              <br />
              who believes that anything imagined can be created
            </p>
            <div className="flex gap-3 mt-3">
              <button className="border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold hover:-translate-y-0.5 transition rounded-md shadow-sm">
                RESUME
              </button>
              <button className="border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold hover:-translate-y-0.5 transition rounded-md shadow-sm">
                ABOUT ME
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="text-right text-sm">
            <p className="uppercase text-xs text-neutral-500">Project Description</p>
            <p className="font-semibold">{centerProject.description}</p>
            <p className="text-neutral-700">
              {centerProject.subtitle}
            </p>
            <p className="mt-1 text-neutral-500">{centerProject.year}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

type ProjectSplashProps = {
  title: string;
  image: string;
  onClick: () => void;
};

function ProjectSplash({ title, image, onClick }: ProjectSplashProps) {
  return (
    <div 
      className="w-64 h-64 border border-neutral-300 flex items-center justify-center text-base font-medium text-white rounded bg-cover bg-center relative cursor-pointer hover:scale-105 transition-transform shadow-2xl hover:shadow-xl"
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
    >
      <div className="absolute inset-0 rounded flex items-center justify-center">
        <span className="font-semibold text-center px-2">{title}</span>
      </div>
    </div>
  );
}
