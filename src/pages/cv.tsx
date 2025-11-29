import React from "react";

const CV: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
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
    }}>;
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 300, margin: '0 0 0.5rem 0', color: '#fff', fontFamily: 'Segoe UI, sans-serif' }}>
          colin inkyu kim
        </h1>
        <p style={{ fontSize: '1.2rem', margin: 0, opacity: 0.8, fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}>
          architecture + ai @ mit
        </p>
      </div>

      {/* About */}
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ fontSize: '1.2rem', textAlign: 'center', lineHeight: '1.7', fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}>
          born in nashville, currently based in boston.{' '}<br />
          architect interested in anything creative.{' '}
          <br />
          <span style={{ color: "#ff0000" }}>physical</span>,{' '}
          <span style={{ color: "#3232ff" }}>digital</span>, and{' '}
          <span style={{ color: "#dc32dc" }}>where they intersect</span>.
          <br />open to everything.
        </p>
      </div>

      {/* Education */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 300, marginBottom: '1rem', color: '#fff', fontFamily: 'Segoe UI, sans-serif' }}>
          education
        </h2>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 300, margin: '0 0 0.5rem 0', fontFamily: 'Segoe UI, sans-serif' }}>
            massachusetts institute of technology
          </h3>
          <p style={{ margin: '0.2rem 0', color: '#ff0000', fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}>b.s. in architecture</p>
          <p style={{ margin: '0.2rem 0', color: '#3232ff', fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}>b.s. in artificial intelligence and decision making</p>
          <p style={{ margin: '0.2rem 0', opacity: 0.8, fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}>4.9 GPA / expected graduation 2027</p>
        </div>
      </section>

      {/* Employment */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 300, marginBottom: '1rem', color: '#fff', fontFamily: 'Segoe UI, sans-serif' }}>
          experience
        </h2>
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 300, margin: '0 0 0.5rem 0', fontFamily: 'Segoe UI, sans-serif' }}>
            nasdaq
          </h3>
          <p style={{ margin: '0.2rem 0', color: '#dc32dc', fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}>spatial computing intern</p>
          <p style={{ margin: '0.2rem 0 1rem 0', opacity: 0.8, fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}>boston, massachusetts / 2025</p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', opacity: 0.9, fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}>
            Architecting the next iteration of the Boston branch office, designing a physical layout and digital interface that replaces desktop computers with integrated mixed-reality systems to improve long-term employee productivity.
          </p>
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 300, margin: '0 0 0.5rem 0', fontFamily: 'Segoe UI, sans-serif' }}>
            mit self-assembly lab
          </h3>
          <p style={{ margin: '0.2rem 0', color: '#dc32dc', fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}>undergraduate researcher</p>
          <p style={{ margin: '0.2rem 0 1rem 0', opacity: 0.8, fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}>cambridge, massachusetts / 2024</p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', opacity: 0.9, fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}>
            Performed research analyzing and improving the load-bearing ability of algorithmically generated gravel patterns. Designed and documented various materials and configurations to aid the self-assembly of sustainable structures.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 300, marginBottom: '1rem', color: '#fff', fontFamily: 'Segoe UI, sans-serif' }}>
          skills
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 300, marginBottom: '0.5rem', opacity: 0.8, fontFamily: 'Segoe UI, sans-serif' }}>fabrication</h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: 0, fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}>
              Studio Art, Modelmaking, Woodworking, Welding, 3D printing
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 300, marginBottom: '0.5rem', opacity: 0.8, fontFamily: 'Segoe UI, sans-serif' }}>software</h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: 0, fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}>
              Rhino, CAD, Enscape, ClimateStudio, Adobe Creative Suite, TouchDesigner
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 300, marginBottom: '0.5rem', opacity: 0.8, fontFamily: 'Segoe UI, sans-serif' }}>programming</h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: 0, fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}>
              Python (PyTorch), C++ (OpenGL), JavaScript (React, p5)
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 300, marginBottom: '0.5rem', opacity: 0.8, fontFamily: 'Segoe UI, sans-serif' }}>languages</h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: 0, fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}>
              English (Fluent), Korean (Fluent), Latin & Ancient Greek (Reading)
            </p>
          </div>
        </div>
      </section>

      {/* Coursework */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 300, marginBottom: '1rem', color: '#fff', fontFamily: 'Segoe UI, sans-serif' }}>
          relevant coursework
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 300, marginBottom: '0.5rem', color: '#ff0000', fontFamily: 'Segoe UI, sans-serif' }}>architecture</h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: 0, opacity: 0.9, fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}>
              Architecture Studio, Design Techniques & Technologies, How to Design, Art & Spatial Practices, Environmental Technologies, History of Design
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 300, marginBottom: '0.5rem', color: '#3232ff', fontFamily: 'Segoe UI, sans-serif' }}>computer science</h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: 0, opacity: 0.9, fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}>
              Design & Analysis of Algorithms, Intro to Algorithms, Discrete Math, Fundamentals of Programming, Intro to Machine Learning
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 300, marginBottom: '0.5rem', color: '#dc32dc', fontFamily: 'Segoe UI, sans-serif' }}>interdisciplinary</h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: 0, opacity: 0.9, fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}>
              Computer Graphics, PokerBots, Linear Algebra
            </p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 300, marginBottom: '1rem', color: '#fff', fontFamily: 'Segoe UI, sans-serif' }}>
          activities & interests
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 300, marginBottom: '0.5rem', opacity: 0.8, fontFamily: 'Segoe UI, sans-serif' }}>organizations</h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: 0, fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}>
              MIT DesignPlus, MIT Lecture Series Committee, MIT Poker Club, Phi Delta Theta Fraternity
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 300, marginBottom: '0.5rem', opacity: 0.8, fontFamily: 'Segoe UI, sans-serif' }}>interests</h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: 0, fontFamily: 'Segoe UI, sans-serif', fontWeight: 300 }}>
              Generative Art, Music Production, Filmmaking, Cryptic Crosswords, Tottenham Hotspura
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;