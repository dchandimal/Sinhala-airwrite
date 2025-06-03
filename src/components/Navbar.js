import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "objective",
        "significance",
        "features",
        "team",
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "objective", label: "Objective" },
    { id: "significance", label: "Applications" },
    { id: "features", label: "Features" },
    { id: "team", label: "Team" },
  ];

  return (
    <>
      <style jsx>{`
        .navbar-enhanced {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .navbar-scrolled {
          background-color: rgba(255, 255, 255, 0.1) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .navbar-brand-enhanced {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .navbar-brand-enhanced::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #007bff, #0056b3);
          transition: width 0.3s ease;
        }

        .navbar-brand-enhanced:hover::before {
          width: 100%;
        }

        .navbar-brand-enhanced:hover {
          transform: translateY(-1px);
          color: #0056b3 !important;
        }

        .nav-btn {
          position: relative;
          border: none !important;
          background: none !important;
          color: #6c757d !important;
          font-weight: 500;
          padding: 0.5rem 1rem !important;
          margin: 0 0.25rem;
          border-radius: 25px !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          text-decoration: none !important;
        }

        .nav-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 123, 255, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }

        .nav-btn:hover::before {
          left: 100%;
        }

        .nav-btn:hover {
          color: #007bff !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 123, 255, 0.2);
          background: rgba(0, 123, 255, 0.05) !important;
        }

        .nav-btn:active {
          transform: translateY(0);
        }

        .nav-btn.active {
          color: #007bff !important;
          background: linear-gradient(
            135deg,
            rgba(0, 123, 255, 0.1),
            rgba(0, 123, 255, 0.05)
          ) !important;
          box-shadow: 0 2px 10px rgba(0, 123, 255, 0.15);
          transform: translateY(-1px);
        }

        .nav-btn.active::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: #007bff;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: translateX(-50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateX(-50%) scale(1.2);
            opacity: 0.7;
          }
          100% {
            transform: translateX(-50%) scale(1);
            opacity: 1;
          }
        }

        .navbar-toggler {
          border: none !important;
          padding: 0.25rem 0.5rem;
          transition: all 0.3s ease;
        }

        .navbar-toggler:hover {
          transform: scale(1.1);
          background-color: rgba(0, 123, 255, 0.1);
        }

        .navbar-toggler:focus {
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
        }

        .navbar-nav {
          gap: 0.25rem;
        }

        @media (max-width: 991.98px) {
          .nav-btn {
            margin: 0.25rem 0;
            text-align: left;
          }

          .nav-btn:hover {
            transform: translateX(5px);
            box-shadow: none;
          }
        }

        .navbar-collapse {
          transition: all 0.3s ease;
        }
      `}</style>

      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top navbar-enhanced ${
          isScrolled ? "navbar-scrolled" : ""
        } shadow-sm`}
      >
        <div className="container">
          <a
            className="navbar-brand fw-bold text-primary navbar-brand-enhanced"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
          >
            Sinhala Air Writing
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <button
                    className={`nav-link btn nav-btn ${
                      activeSection === item.id ? "active" : ""
                    }`}
                    onClick={() => scrollToSection(item.id)}
                    type="button"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
