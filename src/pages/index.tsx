

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
    sampleImage: "/casa_de_piedra_thumb.png",
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
    sampleImage: "/notion_thumb.png",
    pageLink: "/notion"
  },
  {
    id: "bakerminoes",
    name: "bakerminoes",
    color: "red",
    sampleImage: "/bakerminoes_thumb.png",
    pageLink: "/bakerminoes"
  },
  {
    id: "rush-merch",
    name: "rush merch",
    color: "red",
    sampleImage: "/rush_thumb.png",
    pageLink: "/rush-merch"
  },
];

const Home: React.FC = () => {
  const [showCV, setShowCV] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="page" style={{ position: "relative", minHeight: "100vh", userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none", msUserSelect: "none" }}>
      <Head>
        <title>cik</title>
      </Head>
      <main style={{ display: (showCV || activeProject) ? "none" : "flex", height: "100vh", width: "100vw", background: "transparent", justifyContent: "center", alignItems: "flex-start", position: "relative", userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none", msUserSelect: "none" }}>
        {/* Background image when hovering - full screen fill */}
        {hoveredProject && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundImage: `url(${projects.find(p => p.id === hoveredProject)?.sampleImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.3,
              zIndex: 5,
              pointerEvents: 'none',
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
              <ProjectCard 
                key={project.id} 
                project={project} 
                onHover={setHoveredProject}
                onClick={() => {
                  if (project.id === 'rush-merch' || project.id === 'bakerminoes' || project.id === 'notion' || project.id === 'sines') {
                    setActiveProject(project.id);
                  }
                }}
              />
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
            width: "min(800px, 90vw)",
            height: "100vh",
            background: "transparent",
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
                fontWeight: 200,
                lineHeight: 1,
                padding: "4px 8px"
              }}
              onClick={() => setShowCV(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
      {/* Project Overlay */}
      {activeProject && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(800px, 90vw)",
            height: "100vh",
            background: "transparent",
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
            {activeProject === 'rush-merch' && <RushMerch />}
            {activeProject === 'bakerminoes' && <Bakerminoes />}
            {activeProject === 'notion' && <Notion />}
            {activeProject === 'sines' && <Sines />}
          </div>
          <div style={{ position: "absolute", top: 20, right: 20, zIndex: 101 }}>
            <button
              style={{
                fontSize: "1.5rem",
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                fontWeight: 200,
                lineHeight: 1,
                padding: "4px 8px"
              }}
              onClick={() => setActiveProject(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// RushMerch Component with CV-style formatting
const RushMerch: React.FC = () => {
  return (
    <div style={{ 
      background: 'transparent', 
      color: '#fff', 
      height: '100%', 
      overflowY: 'auto',
      fontFamily: 'Segoe UI, sans-serif',
      fontWeight: 300,
      fontSize: '1.2rem',
      lineHeight: '1.6',
      padding: '2rem',
      textTransform: 'lowercase',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      position: 'relative',
      zIndex: 30,
      userSelect: 'none',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none'
    }}>
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      {/* Header Info */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "1fr 1fr", 
        gap: "0.5rem", 
        marginBottom: "2rem",
        fontSize: "1.2rem"
      }}>
        <div>
          fall 2025, fall 2024<br />
          photoshop, illustrator
        </div>
        <div>
          i make a t-shirt every year.
        </div>
      </div>
      
      {/* 2025 Gallery */}
      <div style={{ 
        position: "relative", 
        minHeight: "60vh", 
        marginBottom: "4rem" 
      }}>
        {/* Main 2025 image with caption */}
        <div style={{
          position: "absolute",
          left: "39.44%",
          top: "5.75%",
          width: "48.70%",
          zIndex: 1
        }}>
          <img 
            src="/placeholder-chrome-cowboy.jpg" 
            alt="chrome cowboy 2025"
            style={{ width: "100%", height: "auto" }}
          />
          <div style={{ 
            fontSize: "1.1rem", 
            marginTop: "0.5rem",
            fontFamily: 'Segoe UI, sans-serif',
            fontWeight: 300
          }}>
            2025: chrome cowboy
          </div>
        </div>
        
        {/* Additional 2025 images */}
        <div style={{
          position: "absolute",
          left: "16.39%",
          top: "0%",
          width: "36.70%",
          zIndex: 2
        }}>
          <img 
            src="/placeholder-2025-1.jpg" 
            alt="2025 design 1"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        
        <div style={{
          position: "absolute",
          left: "-4.38%",
          top: "15.75%",
          width: "52.30%",
          zIndex: 4
        }}>
          <img 
            src="/placeholder-2025-2.jpg" 
            alt="2025 design 2"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        
        <div style={{
          position: "absolute",
          left: "75.51%",
          top: "44.35%",
          width: "20%",
          zIndex: 3
        }}>
          <img 
            src="/placeholder-2025-3.jpg" 
            alt="2025 design 3"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      
      {/* 2024 Gallery */}
      <div style={{ 
        position: "relative", 
        minHeight: "60vh", 
        marginBottom: "4rem" 
      }}>
        {/* Main 2024 image with caption */}
        <div style={{
          position: "absolute",
          left: "2.07%",
          top: "19.44%",
          width: "42.19%",
          zIndex: 1
        }}>
          <img 
            src="/placeholder-devil.jpg" 
            alt="don't deal with the devil 2024"
            style={{ width: "100%", height: "auto" }}
          />
          <div style={{ 
            fontSize: "1.1rem", 
            marginTop: "0.5rem",
            fontFamily: 'Segoe UI, sans-serif',
            fontWeight: 300
          }}>
            2024: don't deal with the devil
          </div>
        </div>
        
        {/* Additional 2024 images */}
        <div style={{
          position: "absolute",
          left: "42.77%",
          top: "0%",
          width: "44.50%",
          zIndex: 2
        }}>
          <img 
            src="/placeholder-2024-1.jpg" 
            alt="2024 design 1"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        
        <div style={{
          position: "absolute",
          left: "34.77%",
          top: "32.91%",
          width: "58.38%",
          zIndex: 3
        }}>
          <img 
            src="/placeholder-2024-2.jpg" 
            alt="2024 design 2"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      
      {/* Footer */}
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        "come rush"
      </div>
    </div>
  );
};

// Bakerminoes Component with CV-style formatting
const Bakerminoes: React.FC = () => {
  return (
    <div style={{ 
      background: 'transparent', 
      color: '#fff', 
      height: '100%', 
      overflowY: 'auto',
      fontFamily: 'Segoe UI, sans-serif',
      fontWeight: 300,
      fontSize: '1.2rem',
      lineHeight: '1.6',
      padding: '2rem',
      textTransform: 'lowercase',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      position: 'relative',
      zIndex: 30,
      userSelect: 'none',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none'
    }}>
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      {/* Header Info */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "1fr 1fr", 
        gap: "0.5rem", 
        marginBottom: "2rem",
        fontSize: "1.2rem"
      }}>
        <div>
          spring 2024<br />
          mit 4.022 final project with pip engeriser<br />
          basswood, rockite, pla
        </div>
        <div>
          two uniquely whimsical<br />
          equally faithful-to-form<br />
          souvenir sets for baker house.
        </div>
      </div>
      
      {/* Gallery */}
      <div style={{ marginBottom: "3rem" }}>
        {/* First video with caption */}
        <div style={{ marginBottom: "2rem" }}>
          <video 
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "auto" }}
          >
            <source src="/placeholder-bakerminoes-1.mp4" type="video/mp4" />
          </video>
          <div style={{ 
            fontSize: "1.1rem", 
            marginTop: "0.5rem",
            fontFamily: 'Segoe UI, sans-serif',
            fontWeight: 300
          }}>
            one captures the construction of the original building with 15 unique pieces and a tailored box
          </div>
        </div>
        
        {/* Second video with caption */}
        <div style={{ marginBottom: "3rem" }}>
          <video 
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "auto" }}
          >
            <source src="/placeholder-bakerminoes-2.mp4" type="video/mp4" />
          </video>
          <div style={{ 
            fontSize: "1.1rem", 
            marginTop: "0.5rem",
            fontFamily: 'Segoe UI, sans-serif',
            fontWeight: 300
          }}>
            the other maximizes playability with variations on the classic domino shape and an etched floor plan guide
          </div>
        </div>
      </div>
      
      {/* Footer Quote */}
      <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        "it's so funny how the iconic curve's on the opposite side of the building entrance."<br />
        "i know, whenever i order domino's the driver can never figure out where to leave the food."<br />
        "wait, did you just say 'dominoes'?"<br />
        -carrie
      </div>
    </div>
  );
};

// Notion Component with CV-style formatting
const Notion: React.FC = () => {
  return (
    <div style={{ 
      background: 'transparent', 
      color: '#fff', 
      height: '100%', 
      overflowY: 'auto',
      fontFamily: 'Segoe UI, sans-serif',
      fontWeight: 300,
      fontSize: '1.2rem',
      lineHeight: '1.6',
      padding: '2rem',
      textTransform: 'lowercase',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      position: 'relative',
      zIndex: 30,
      userSelect: 'none',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none'
    }}>
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      {/* Header Info */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "1fr 1fr", 
        gap: "0.5rem", 
        marginBottom: "2rem",
        fontSize: "1.2rem"
      }}>
        <div>
          spring 2025<br />
          mit 4.302 final project<br />
          plywood, clay, metal, paper, pla, acrylic paint
        </div>
        <div>
          every element of the studio curriculum<br />
          represented through found objects.<br />
          <br />
          assembled into an interactive toy<br />
          a multisensory library<br />
          a notebook only i can read.<br />
          <br />
          a time capsule for the studio<br />
          created spontaneously in the studio.
        </div>
      </div>
      
      {/* Gallery */}
      <div style={{ marginBottom: "3rem" }}>
        {/* First image with caption */}
        <div style={{ marginBottom: "2rem" }}>
          <img 
            src="/placeholder-notion-1.jpg" 
            alt="3d-printed capsules"
            style={{ width: "100%", height: "auto" }}
          />
          <div style={{ 
            fontSize: "1.1rem", 
            marginTop: "0.5rem",
            fontFamily: 'Segoe UI, sans-serif',
            fontWeight: 300
          }}>
            3d-printed capsules, engineered for freedom of movement and a customizable interior
          </div>
        </div>
        
        {/* Second image with caption */}
        <div style={{ marginBottom: "2rem" }}>
          <img 
            src="/placeholder-notion-2.jpg" 
            alt="studio materials manifestations"
            style={{ width: "100%", height: "auto" }}
          />
          <div style={{ 
            fontSize: "1.1rem", 
            marginTop: "0.5rem",
            fontFamily: 'Segoe UI, sans-serif',
            fontWeight: 300
          }}>
            manifestations of studio materials, featuring a variety of unique tactile and auditory characteristics
          </div>
        </div>
        
        {/* Third image with caption */}
        <div style={{ marginBottom: "3rem" }}>
          <img 
            src="/placeholder-notion-3.jpg" 
            alt="papier-mâché chronology"
            style={{ width: "100%", height: "auto" }}
          />
          <div style={{ 
            fontSize: "1.1rem", 
            marginTop: "0.5rem",
            fontFamily: 'Segoe UI, sans-serif',
            fontWeight: 300
          }}>
            papier-mâché completes the studio chronology and allows organic imperfections to flourish
          </div>
        </div>
      </div>
      
      {/* Footer Quotes */}
      <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        "keep them white. it's more mysterious."<br />
        - tobias<br />
        <br />
        "it's funny you're an ai major, this is basically a blockchain."<br />
        - ardalan
      </div>
    </div>
  );
};

// Sines Component with CV-style formatting
const Sines: React.FC = () => {
  return (
    <div style={{ 
      background: 'transparent', 
      color: '#fff', 
      height: '100%', 
      overflowY: 'auto',
      fontFamily: 'Segoe UI, sans-serif',
      fontWeight: 300,
      fontSize: '1.2rem',
      lineHeight: '1.6',
      padding: '2rem',
      textTransform: 'lowercase',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      position: 'relative',
      zIndex: 30,
      userSelect: 'none',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none'
    }}>
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      {/* Header Info */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "1fr 1fr", 
        gap: "0.5rem", 
        marginBottom: "2rem",
        fontSize: "1.2rem"
      }}>
        <div>
          fall 2025<br />
          personal project with liam sheldon<br />
          python, p5.js, typescript
        </div>
        <div>
          an ai-based visual generator for live shows and djs.
        </div>
      </div>
    </div>
  );
};

export default Home;
