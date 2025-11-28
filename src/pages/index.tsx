

import React, { useState } from "react";
import Head from "next/head";
import CV from "./cv";

// Project interface definition
interface Project {
  id: string;
  name: string;
  color: 'red' | 'blue' | 'purple';
  sampleImage: string;
  pageLink: string;
}

// Color mapping
const PROJECT_COLORS = {
  red: '#ff0000',
  blue: '#3232ff',
  purple: '#dc32dc'
} as const;

// Project component
interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  onHover?: (projectId: string | null) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, onHover }) => {
  return (
    <a
      href={project.pageLink}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      onMouseEnter={() => onHover && onHover(project.id)}
      onMouseLeave={() => onHover && onHover(null)}
      style={{
        fontSize: '2rem',
        color: '#ffffff',
        textDecoration: 'none',
        fontFamily: 'Segoe UI, sans-serif',
        fontWeight: 300,
        cursor: 'pointer',
        display: 'block'
      }}
    >
      {project.name}
    </a>
  );
};

// Projects data - empty for now
const projects: Project[] = [
  {
    id: "casa-de-piedra",
    name: "casa de piedra",
    color: "red",
    sampleImage: "/IMG_2340.JPG",
    pageLink: "/casa-de-piedra"
  },
  {
    id: "sines",
    name: "sines",
    color: "blue",
    sampleImage: "/sines_thumb.png",
    pageLink: "/sines"
  },
  {
    id: "notion",
    name: "notion",
    color: "red",
    sampleImage: "/aa3DSC08217.png",
    pageLink: "/notion"
  },
  {
    id: "bakerminoes",
    name: "bakerminoes",
    color: "red",
    sampleImage: "/IMG_6495.JPG",
    pageLink: "/bakerminoes"
  },
];

const Home: React.FC = () => {
  const [showCV, setShowCV] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="page" style={{ position: "relative", minHeight: "100vh" }}>
      <Head>
        <title>Home | Portfolio</title>
      </Head>
      <main style={{ display: "flex", height: "100vh", width: "100vw", background: "transparent", justifyContent: "center", alignItems: "flex-start", position: "relative" }}>
        {/* Background image when hovering */}
        {hoveredProject && (
          <div
            style={{
              position: 'absolute',
              top: '25vh',
              left: '25vw',
              width: '50vw',
              height: '50vh',
              backgroundImage: `url(${projects.find(p => p.id === hoveredProject)?.sampleImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.4,
              zIndex: 10,
              pointerEvents: 'none',
              filter: `grayscale(100%) contrast(1.2)`,
            }}
          />
        )}
        
        {/* Color overlay */}
        {hoveredProject && (
          <div
            style={{
              position: 'absolute',
              top: '25vh',
              left: '25vw',
              width: '50vw',
              height: '50vh',
              background: `linear-gradient(rgba(${
                projects.find(p => p.id === hoveredProject)?.color === 'red' ? '255, 0, 0' :
                projects.find(p => p.id === hoveredProject)?.color === 'blue' ? '50, 50, 255' : '220, 50, 220'
              }, 0.15), rgba(${
                projects.find(p => p.id === hoveredProject)?.color === 'red' ? '255, 0, 0' :
                projects.find(p => p.id === hoveredProject)?.color === 'blue' ? '50, 50, 255' : '220, 50, 220'
              }, 0.15))`,
              zIndex: 11,
              pointerEvents: 'none',
              mixBlendMode: 'multiply'
            }}
          />
        )}
        
        <div className="absolute top-10 flex flex-col items-center z-10">
          <h1 className="text-white text-8xl font-light tracking-tight" style={{ fontFamily: 'Segoe UI, sans-serif', fontWeight: 300, fontSize: '3rem', color: '#ffffff' }}>colin inkyu kim</h1>
        </div>
        {/* Projects Section */}
        {projects.length > 0 && (
          <div className="absolute flex flex-col items-center z-10" style={{ top: '50%', transform: 'translateY(-50%)' }}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onHover={setHoveredProject} />
            ))}
          </div>
        )}
        
        {/* Bottom Navigation */}
        <div className="absolute bottom-10 flex flex-row items-center justify-center z-10 gap-8">
          <span
            style={{ fontSize: '1.2rem', color: '#ffffff', cursor: 'pointer', fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}
            onClick={() => setShowCV(true)}
            tabIndex={0}
            role="button"
            aria-label="Open CV"
          >
            cv
          </span>
          <a
            href="mailto:cik@mit.edu"
            style={{ fontSize: '1.2rem', color: '#ffffff', textDecoration: 'none', fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}
          >
            email
          </a>
        </div>
      </main>
      {/* CV Overlay */}
      {showCV && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(600px, 80vw)",
            height: "100vh",
            background: "#000",
            zIndex: 100,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            padding: 0,
            border: "none",
            boxShadow: "none"
          }}
        >
          <div style={{ flex: 1 }}>
            <CV />
          </div>
          <div style={{ position: "absolute", top: 20, right: 20, zIndex: 101 }}>
            <button
              style={{
                fontSize: "1.2rem",
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer",
              }}
              onClick={() => setShowCV(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
