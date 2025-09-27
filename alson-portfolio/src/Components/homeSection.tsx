// import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Home, User, Settings, Mail, Info } from 'lucide-react';
import "../Styles/homeSection.css"
import BallsBackground from "../utils/backgroundBalls";
import { useState } from 'react';

const HomeSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: User, label: 'Profile', href: '#profile' },
    { icon: Mail, label: 'Contact', href: '#contact' },
    { icon: Settings, label: 'Settings', href: '#settings' },
    { icon: Info, label: 'About', href: '#about' }
  ];

  return (
    <div className="wrapper">
      <div className="balls-background-wrapper">
        <BallsBackground />
      </div>

      <div className="content-container">
        <div className="left-column">
          <div className="menu-container">
            {/* Menu Toggle Button */}
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="menu-text">Menu</span>
              {isMenuOpen ? (
                <ChevronUp className="chevron-icon" size={20} />
              ) : (
                <ChevronDown className="chevron-icon" size={20} />
              )}
            </button>

            {/* Dropdown Menu */}
            <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
              <div className="menu-items">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="menu-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <item.icon className="menu-icon" size={18} />
                    <span className="menu-label">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="right-column">
         
        </div>
      </div>
      
      <style>{`
        .menu-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin: 2rem 0;
          z-index: 100;
        }

        .menu-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .menu-toggle:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .menu-toggle.active {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .menu-text {
          user-select: none;
        }

        .chevron-icon {
          transition: transform 0.3s ease;
        }

        .menu-toggle.active .chevron-icon {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 0.5rem;
          min-width: 200px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          overflow: hidden;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px) scale(0.95);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .dropdown-menu.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .menu-items {
          padding: 0.5rem;
        }

        .menu-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1rem;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.2s ease;
          opacity: 0;
          animation: fadeInUp 0.4s ease forwards;
          position: relative;
        }

        .dropdown-menu.open .menu-item {
          opacity: 1;
        }

        .menu-item:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transform: translateX(4px);
        }

        .menu-icon {
          flex-shrink: 0;
          opacity: 0.8;
          transition: opacity 0.2s ease;
        }

        .menu-item:hover .menu-icon {
          opacity: 1;
        }

        .menu-label {
          font-weight: 400;
          font-size: 0.95rem;
          user-select: none;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .menu-container {
            margin: 1rem 0;
          }

          .dropdown-menu {
            min-width: 180px;
          }

          .menu-toggle {
            padding: 0.625rem 1.25rem;
            font-size: 0.9rem;
          }

          .menu-item {
            padding: 0.75rem 0.875rem;
          }

          .menu-label {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeSection;