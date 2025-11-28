

import React, { useState } from "react";

const projects: { name: string; color: string }[] = [
  { name: "Casa de Piedra", color: "#ff0000" },
  { name: "Sines", color: "#3232ff" },
  { name: "Notion", color: "#ff0000" },
  { name: "Ange!ic", color: "#dc32dc" },
  { name: "Bakerminoes", color: "#ff0000" },
  { name: "Rush merch", color: "#ff0000" },
];
import Head from "next/head";
import CV from "./cv";

const Home: React.FC = () => {
  const [showCV, setShowCV] = useState(false);

  return (
    <div className="page" style={{ position: "relative", minHeight: "100vh" }}>
      <Head>
        <title>Home | Portfolio</title>
      </Head>
      <main style={{ display: "flex", height: "100vh", width: "100vw", background: "#000" }}>
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            paddingRight: "5rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            paddingLeft: "0.5rem",
            gap: "1.5rem",
            width: "100%"
          }}>
            <div style={{ width: "100%", textAlign: "right" }}>
              <span style={{ fontSize: "5vw", color: "#fff", fontWeight: 700, textDecoration: "none", lineHeight: 1, cursor: "default", display: "block" }}>Colin Inkyu Kim</span>
              <span
                style={{ fontSize: "5vw", color: "#fff", fontWeight: 700, textDecoration: "none", lineHeight: 1, cursor: "pointer", display: "block" }}
                onClick={() => setShowCV(true)}
                tabIndex={0}
                role="button"
                aria-label="Open CV"
              >
                C.V.
              </span>
              <a style={{ fontSize: "5vw", color: "#ff0000", fontWeight: 700, textDecoration: "none", lineHeight: 1 }} href="#">Casa de Piedra</a><br />
              <a style={{ fontSize: "5vw", color: "#3232ff", fontWeight: 700, textDecoration: "none", lineHeight: 1 }} href="#">Sines</a><br />
              <a style={{ fontSize: "5vw", color: "#ff0000", fontWeight: 700, textDecoration: "none", lineHeight: 1 }} href="#">Notion</a><br />
              <a style={{ fontSize: "5vw", color: "#dc32dc", fontWeight: 700, textDecoration: "none", lineHeight: 1 }} href="#">Ange!ic</a><br />
              <a style={{ fontSize: "5vw", color: "#ff0000", fontWeight: 700, textDecoration: "none", lineHeight: 1 }} href="#">Bakerminoes</a><br />
              <a style={{ fontSize: "5vw", color: "#ff0000", fontWeight: 700, textDecoration: "none", lineHeight: 1 }} href="#">Rush merch</a>
            </div>
          </div>
        </div>
      </main>
      {/* CV Overlay */}
      {showCV && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "50vw",
            height: "100vh",
            background: "#000",
            zIndex: 10,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            padding: 0,
            border: "none",
            boxShadow: "none"
          }}
        >
          <div style={{ flex: 1, padding: "2rem 1rem 2rem 2rem" }}>
            <CV />
          </div>
          <div style={{ position: "absolute", top: 20, right: 20 }}>
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
