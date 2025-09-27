import "../Styles/introSection.css"
import { useState } from "react";

const IntroSection = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(menu => !menu);
    }
  return (
    <div className= "wrapper">
    <div className="left-column">
        <div className={`menu ${menuOpen ? 'open' : ''}`}>

       <div className="menu-content">
        <p>This is your expandable content</p>
      </div>

       <div className="button-container">
                 <button onClick={toggleMenu}> {menuOpen ? 'Close' : 'Open'} Menu </button>
        </div>
    </div>
    </div>
    <div className="right-column"></div>
    </div>
  );
};
export default IntroSection;