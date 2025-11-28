
const CV: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  return (
    <div className="page-content" style={{ background: '#000', color: '#fff', height: '100%', overflowY: 'auto' }}>
      <div className="column-set">
        <div className="column-unit">
          Colin Inkyu Kim<br />
          <i>Architecture + AI @ MIT</i><br /><br />
        </div>
        <div className="column-unit">
          I’m an architect interested in anything creative. <span style={{ color: "rgba(255, 0, 0, 0.85)" }}><br />Physica</span><span style={{ color: "rgba(255, 0, 0, 0.85)" }}>l,</span> <span style={{ color: "rgba(50, 50, 255, 0.85)" }}>digit</span><span style={{ color: "rgba(0, 0, 255, 0.85)" }}>al,</span> and <span style={{ color: "rgba(220, 50, 220, 0.85)" }}>where they inters</span><span style={{ color: "rgba(220, 50, 220, 0.85)" }}>ect.</span><br />Open to everything.<br /><br />Born in Nashville. Currently based in Boston.<br /><br />cik [at] mit [dot] edu<br />
          <a href="https://linkedin.com/in/cik" target="_blank" rel="noopener noreferrer">linkedin.com/in/cik</a>
        </div>
      </div>
      <br />
      <hr />
      <div className="column-set">
        <div className="column-unit">
          <div className="column-set">
            <div className="column-unit">Curriculum Vitae</div>
            {/* Overlay close button removed as requested */}
          </div>
          <br />
          <br />
          <hr />
        </div>
      </div>
      <div className="column-set">
        <div className="column-unit">Education<br /><br /></div>
        <div className="column-unit">
          Massachusetts Institute of Technology<i><br /><span style={{ color: "rgba(255, 0, 0, 0.85)" }}>B.S. in Architecture</span><br />
            <span style={{ color: "rgba(0, 0, 255, 0.85)" }}>B.S. in Artificial Intelligence and Decision Making</span>
            <br />4.9 GPA</i><br />expected graduation 2027
        </div>
      </div>
      <br />
      <hr />
      <div className="column-set">
        <div className="column-unit">Employment<br /><br /></div>
        <div className="column-unit">
          Nasdaq<br />
          <i><span style={{ color: "rgba(220, 50, 220, 0.85)" }}>Spatial Computing Intern</span><br />Boston, Massachusetts<br />2025</i><br />
          <span className="bodysmall">Architecting the next iteration of the Boston branch office, designing a physical layout and digital interface that replaces desktop computers with integrated mixed-reality systems to improve long-term employee productivity. Providing the CTO and major stakeholders with strategic consultation throughout the construction process to optimize the outlook of real estate as the company spearheads the adoption of upcoming technology at scale.</span><br />
          MIT Self-Assembly Lab<br />
          <i><span style={{ color: "rgba(220, 50, 220, 0.85)" }}>Undergraduate Researcher</span><br />Cambridge, Massachusetts<br />2024</i><br />
          <span className="bodysmall">Performed research analyzing and improving the load-bearing ability of algorithmically generated gravel patterns. Designed and documented various materials and configurations to aid the self-assembly of sustainable structures.</span><br />
        </div>
      </div>
      <hr />
      <div className="column-set">
        <div className="column-unit">Coursework<br /><br /></div>
        <div className="column-unit">
          <span style={{ color: "rgba(255, 0, 0, 0.85)" }}>4.023 Architecture Studio</span><br />4.022 Design Techniques &amp; Technologies<br />4.021 How to Design<br />4.302 Art, Design, &amp; Spatial Practices<br />4.401 Environmental Technologies in Buildings<br />4.657 History of Design<br /><br />
          <span style={{ color: "rgba(0, 0, 255, 0.85)" }}>6.1220 Design &amp; Analysis of Algorithms</span><br />6.1210 Intro to Algorithms<br />6.1200 Discrete Math<br />6.1010 Fundamentals of Programming<br />6.3900 Intro to Machine Learning<br />
          <span style={{ color: "rgba(220, 50, 220, 0.85)" }}>6.4400 Computer Graphics<br /></span>6.9630 PokerBots<br /><br />18.06 Linear Algebra
        </div>
      </div>
      <br />
      <hr />
      <div className="column-set">
        <div className="column-unit">Skills<br /><br /></div>
        <div className="column-unit">
          Studio Art<br />Modelmaking<br />Woodworking<br />Welding<br />3D printing<br /><br />Rhino<br />CAD<br />Enscape<br />ClimateStudio<br /><br />Photoshop<br />Illustrator<br />InDesign<br />After Effects<br />Premiere Pro<br />TouchDesigner<br /><br />Python — PyTorch<br />C++ — OpenGL<br />JavaScript — React, p5<br /><br />English — Fluent<br />Korean — Fluent<br />Latin — Reading Proficiency<br />Ancient Greek — Reading Proficiency<br /><br />
        </div>
      </div>
      <br />
      <div className="column-set">
        <div className="column-unit">Affiliations<br /></div>
        <div className="column-unit">
          MIT DesignPlus<br />MIT Lecture Series Committee<br />MIT Poker Club<br />Phi Delta Theta Fraternity (Mass Gamma)
        </div>
      </div>
      <br />
      <div className="column-set">
        <div className="column-unit">Interests<br /><br /></div>
        <div className="column-unit">
          Spatial Design<br />Audiovisual Design<br />Graphic Design<br />Generative Art<br />DJing &amp; Music Production<br />Filmmaking<br />Bouldering<br />Cryptic Crosswords<br />Tottenham Hotspur
        </div>
      </div>
      <hr />
      <div className="column-set column-set-gutter-2">
        <div className="column-unit"></div>
        <div className="column-unit" style={{ textAlign: "right" }}>
          <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} rel="top">(Back to top)</a>
        </div>
      </div>
    </div>
  );
};

export default CV;
