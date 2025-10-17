import React, { useState, useEffect } from "react";
import DarkLogo from "./assets/DarkLogo.png";
import KTPSplash from "./assets/KTP_spash-01.png";
import Lily from "./assets/lily.jpeg";
import Splish from "./assets/SplishSplash_BACKcover.jpg";
import RTSSplashScreen from "./assets/RTS_SplashScreen.jpg";
import MHHS from "./assets/MHHS_media-22.png";
import StickerMEEE from "./assets/StickerMEEE.png";
import StickerMe2 from "./assets/StickerME2.png";
import StickerME3 from "./assets/StickerME3.png";
import TiltedCard from './tiltedCard';
import AboutMe from './AboutMe';
import Play from './Play';
import CircularText from './circularText';
import NavBar from './navBar';
import TextType from './typedText';
export default function App() {
  const projects = [
    { id: 1, title: "", image: KTPSplash, description: "UI/UX · Illustration · Motion", subtitle: "An interactive website gamifying climate change", year: "2023", name: "Kill The Planet" },
    { id: 2, title: "", image: RTSSplashScreen, description: "UI/UX · Illustration · Branding", subtitle: "An experimental arcade game merging digital play and physical interaction", year: "2024-2025", name: "Ruin the Show" },
    { id: 3, title: "", image: Splish, description: "3D · Illustration · Motion ", subtitle: "Spotify DJ album branding and visual design", year: "2025", name: "FREELANCE" },
    { id: 4, title: "", image: MHHS, description: "Leadership · Print Production · Motion Graphics", subtitle: "Guided creative projects while designing printed branding materials", year: "2024-2025", name: "MISSION HILLS HIGH SCHOOL" },
    { id: 5, title: "", image: Lily, description: "3D · Fashion Design · Motion Interaction ", subtitle: "Created an immersive exhibit and 8-piece sustainable collection for RIT’s fashion showcase.", year: "2023-2025", name: "Beyond Fashion" }
  ];

  const [currentCenterIndex, setCurrentCenterIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState<'work' | 'play' | 'about'>('work');
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-hide loading screen with smooth transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      // Wait for fade animation to complete before hiding
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // 800ms fade duration
    }, 12000); // 12 seconds before starting transition

    return () => clearTimeout(timer);
  }, []);

  const handleProjectClick = (clickedIndex: React.SetStateAction<number>) => {
    setCurrentCenterIndex(clickedIndex);
  };

  const handleShowPlay = () => {
    setCurrentPage('play');
  };

  const handleShowAboutMe = () => {
    setCurrentPage('about');
  };

  const handleBackToWork = () => {
    setCurrentPage('work');
  };

  const handleEnterSite = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 2000ms fade duration
  };

  // Show different pages based on current page state
  if (currentPage === 'play') {
    return (
      <div className="w-full h-screen flex flex-col text-neutral-900">
        <NavBar 
          currentPage={currentPage}
          onShowWork={handleBackToWork}
          onShowPlay={handleShowPlay}
          onShowAbout={handleShowAboutMe}
        />
        <div className="flex-1">
          <Play />
        </div>
      </div>
    );
  }

  if (currentPage === 'about') {
    return <AboutMe onBack={handleBackToWork} />;
  }

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
      <NavBar 
        currentPage={currentPage}
        onShowWork={handleBackToWork}
        onShowPlay={handleShowPlay}
        onShowAbout={handleShowAboutMe}
      />

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col justify-between pb-8 -mt-4">

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
                <TiltedCard
                  key={project.id}
                  imageSrc={project.image}
                  altText={project.subtitle}
                  captionText={project.title}
                  containerHeight="250px"
                  containerWidth="250px"
                  imageHeight="250px"
                  imageWidth="250px"
                  rotateAmplitude={1}
                  scaleOnHover={1.1}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  onClick={() => handleProjectClick(project.originalIndex)}
                  overlayContent={
                    <div className="absolute inset-0 rounded flex items-center justify-center">
                      <span className="font-semibold text-center px-2 text-base text-white">{project.title}</span>
                    </div>
                  }
                />
              ))}
            </div>

            {/* Center hero project */}
            <TiltedCard
              imageSrc={centerProject.image}
              altText={centerProject.subtitle}
              captionText={centerProject.title}
              containerHeight="450px"
              containerWidth="450px"
              imageHeight="450px"
              imageWidth="450px"
              rotateAmplitude={.1}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="absolute inset-0 rounded flex items-center justify-center">
                  <span className="text-white text-center text-5xl font-bold">{centerProject.title}</span>
                </div>
              }
            />

            {/* Right side projects */}
            <div className="flex items-center gap-8 ml-12">
              {sideProjects.filter(p => p.position === 'right').map((project) => (
                <TiltedCard
                  key={project.id}
                  imageSrc={project.image}
                  altText={project.subtitle}
                  captionText={project.title}
                  containerHeight="250px"
                  containerWidth="250px"
                  imageHeight="250px"
                  imageWidth="250px"
                  rotateAmplitude={.3}
                  scaleOnHover={1.09}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  onClick={() => handleProjectClick(project.originalIndex)}
                  overlayContent={
                    <div className="absolute inset-0 rounded flex items-center justify-center">
                      <span className="font-semibold text-center px-2 text-base text-white">{project.title}</span>
                    </div>
                  }
                />
              ))}
            </div>
          </div>

         
         
          {/* Sticker with hover text bubble */}
          <div className="absolute left-8 top-1/2 translate-y-[275px] group">
            <div className="relative">
              {/* Default sticker */}
              <img 
                src={StickerMEEE} 
                alt="Sticker" 
                className="w-30 h-30 object-contain cursor-pointer group-hover:opacity-0"
              />
              {/* Hover sticker */}
              <img 
                src={StickerMe2} 
                alt="Sticker Hover" 
                className="absolute top-0 left-0 w-30 h-30 object-contain cursor-pointer  opacity-0 group-hover:opacity-100"
              />
              {/* Text bubble that appears on hover */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                Hey there! 👋
                {/* Arrow pointing down */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
              </div>
            </div>
          </div>          {/* Project details positioned under the center card, aligned with its right edge */}
          <div className="absolute left-1/2 translate-x-[225px] top-1/2 translate-y-[275px]">
            <div className="flex flex-col space-y-2 w-120">
              <p className="uppercase text-xs text-neutral-500 -mt-2">{centerProject.year}</p>
              <p className="uppercase text-2xl font-semibold text-black">{centerProject.name}</p>
              <p className="text-xs whitespace-nowrap -mt-2">{centerProject.description}</p>
              <p className="text-s text-black">
                {centerProject.subtitle}
              </p>
            </div>
          </div>
        </div>

      

      </main>
      

      {/* Loading Screen Overlay - COMMENTED OUT FOR TESTING */}
      {/* {isLoading && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-700 ease-in-out ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="text-center">
            <TextType 
              text={["Hi, I'm Lily!", "A passionate designer.", "Welcome to my portfolio.", ""]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
        </div>
      )} */}
    </div>
  );
}
