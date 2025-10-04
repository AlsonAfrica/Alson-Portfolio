import "../Styles/introSection.css";
import { useState } from "react";

const IntroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((menu) => !menu);
  };
  return (
    <div className="wrapper">
      <div className="left-column">

        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <div className="menu-content">
            <p>This is your expandable content</p>
          </div>

          <div className="button-container">
            <button onClick={toggleMenu}>
              {" "}
              {menuOpen ? "Close" : "Open"} Menu{" "}
            </button>
          </div>
        </div>

        
        
        <div className="left-container">
          
        </div>

        <div className="right-container">
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
          <div className="right-container">
              <img className="profile-pic" src="profile-pic.png" alt="Profile Picture" />
              <h3 className="names">NHLAKANIPHO ALSON RADEBE</h3>
          </div>
        </div>
       



      </div>


      <div className="right-column">
        

      </div>
    </div>
  );
};
export default IntroSection;
