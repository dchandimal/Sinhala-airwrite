import React, { useState, useEffect } from "react";

// Import university logo
import usjLogo from "../assets/logos/usj-logo.png";

const Footer = () => {
  const [hoveredTool, setHoveredTool] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  const coreTools = [
    { name: "React.js", category: "Frontend", color: "#61DAFB" },
    { name: "Python", category: "Backend", color: "#3776AB" },
    { name: "Flask", category: "Backend", color: "#000000" },
    { name: "TensorFlow", category: "ML/AI", color: "#FF6F00" },
    { name: "OpenCV", category: "Computer Vision", color: "#5C3EE8" },
    { name: "MediaPipe", category: "ML/AI", color: "#00C851" },
    { name: "NumPy", category: "Data Science", color: "#013243" },
    { name: "pandas", category: "Data Science", color: "#150458" },
    { name: "scikit-learn", category: "ML/AI", color: "#F7931E" },
    { name: "VS Code", category: "Development", color: "#007ACC" },
    { name: "Jupyter Notebook", category: "Development", color: "#F37626" },
  ];

  const socialLinks = [
    {
      name: "Email",
      url: "mailto:dinushachandimal186@gmail.com",
      icon: "📧",
      color: "#EA4335",
    },
    {
      name: "University Website",
      url: "https://www.sjp.ac.lk",
      icon: "🌐",
      color: "#1976D2",
    },
    {
      name: "GitHub",
      url: "#",
      icon: "💻",
      color: "#333",
    },
  ];

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById("footer");
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  const handleToolHover = (index, tool) => {
    setHoveredTool(index);
    setShowTooltip(true);
  };

  const handleToolLeave = () => {
    setHoveredTool(null);
    setShowTooltip(false);
  };

  return (
    <footer
      id="footer"
      className={`bg-dark text-white py-3 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        borderTop: "3px solid #007bff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: "float 20s ease-in-out infinite",
        }}
      />

      <div className="container relative z-10">
        <div className="row align-items-center">
          {/* University Info Section */}
          <div className="col-md-3">
            <div
              className={`d-flex align-items-center mb-2 mb-md-0 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              {/* University Logo */}
              <div className="me-3 transform transition-transform duration-300 hover:scale-105">
                <img
                  src={usjLogo}
                  alt="University of Sri Jayewardenepura Logo"
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  className="bg-white rounded p-1 shadow-sm hover:shadow-md"
                  onClick={() => window.open("https://www.sjp.ac.lk", "_blank")}
                  onError={(e) => {
                    // Fallback to styled div if logo fails to load
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback Logo */}
                <div
                  className="bg-white rounded p-2 shadow-sm hover:shadow-md transition-all duration-300"
                  style={{
                    width: "50px",
                    height: "50px",
                    display: "none",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#007bff",
                  }}
                  onClick={() => window.open("https://www.sjp.ac.lk", "_blank")}
                >
                  USJ
                </div>
              </div>
              <div className="hover:text-blue-300 transition-colors duration-300">
                <p className="mb-0 small">
                  © {currentYear} ICT Department
                  <br />
                  <span className="text-blue-200">Faculty of Technology</span>
                  <br />
                  <strong className="text-white">
                    University of Sri Jayewardenepura
                  </strong>
                </p>
              </div>
            </div>
          </div>

          {/* Core Tools & Technologies Section */}
          <div className="col-md-6">
            <div
              className={`text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              <h6
                className="mb-2 text-light position-relative"
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                }}
              >
                Core Tools & Technologies
                <div
                  className="mx-auto mt-1"
                  style={{
                    width: "50px",
                    height: "2px",
                    background: "linear-gradient(90deg, #007bff, #28a745)",
                    borderRadius: "1px",
                  }}
                />
              </h6>
              <div className="d-flex flex-wrap justify-content-center gap-1 position-relative">
                {coreTools.map((tool, index) => (
                  <span
                    key={index}
                    className="badge position-relative"
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: "500",
                      padding: "4px 8px",
                      margin: "1px",
                      background:
                        hoveredTool === index
                          ? `linear-gradient(45deg, ${tool.color}, ${tool.color}90)`
                          : "linear-gradient(45deg, #495057, #6c757d)",
                      border: `1px solid ${
                        hoveredTool === index ? tool.color : "transparent"
                      }`,
                      borderRadius: "15px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      transform:
                        hoveredTool === index
                          ? "scale(1.05) translateY(-1px)"
                          : "scale(1)",
                      boxShadow:
                        hoveredTool === index
                          ? `0 2px 8px ${tool.color}40`
                          : "0 1px 3px rgba(0,0,0,0.1)",
                      animation: isVisible
                        ? `slideInUp ${0.5 + index * 0.05}s ease-out`
                        : "none",
                    }}
                    onMouseEnter={() => handleToolHover(index, tool)}
                    onMouseLeave={handleToolLeave}
                  >
                    {tool.name}
                    {hoveredTool === index && (
                      <div
                        className="position-absolute text-xs"
                        style={{
                          bottom: "-25px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          background: "rgba(0,0,0,0.8)",
                          color: "white",
                          padding: "2px 6px",
                          borderRadius: "4px",
                          fontSize: "0.65rem",
                          whiteSpace: "nowrap",
                          zIndex: 10,
                        }}
                      >
                        {tool.category}
                      </div>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact & Social Section */}
          <div className="col-md-3 text-md-end">
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              style={{ animationDelay: "0.6s" }}
            >
              <p className="mb-2 small">
                <strong className="text-blue-200">Work by:</strong>
                <br />
                <span className="text-warning fw-bold">Group 18</span>
              </p>

              {/* Interactive Social Links */}
              <div className="mt-2 d-flex justify-content-md-end justify-content-center gap-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      link.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-light d-flex align-items-center justify-content-center"
                    style={{
                      textDecoration: "none",
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      background: "linear-gradient(45deg, #495057, #6c757d)",
                      transition: "all 0.3s ease",
                      border: "2px solid transparent",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.05)";
                      e.target.style.background = `linear-gradient(45deg, ${link.color}, ${link.color}90)`;
                      e.target.style.borderColor = link.color;
                      e.target.style.boxShadow = `0 2px 8px ${link.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                      e.target.style.background =
                        "linear-gradient(45deg, #495057, #6c757d)";
                      e.target.style.borderColor = "transparent";
                      e.target.style.boxShadow = "none";
                    }}
                    title={link.name}
                  >
                    <span style={{ fontSize: "16px" }}>{link.icon}</span>
                  </a>
                ))}
              </div>

              {/* Compact "Back to Top" button */}
              <div className="mt-2">
                <button
                  className="btn btn-outline-light btn-sm"
                  style={{
                    borderRadius: "15px",
                    padding: "4px 12px",
                    fontSize: "0.75rem",
                    transition: "all 0.3s ease",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background =
                      "linear-gradient(45deg, #007bff, #28a745)";
                    e.target.style.transform = "translateY(-1px)";
                    e.target.style.boxShadow = "0 2px 8px rgba(0,123,255,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  ↑ Top
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .transition-all {
          transition: all 0.3s ease;
        }

        .duration-300 {
          transition-duration: 0.3s;
        }

        .duration-700 {
          transition-duration: 0.7s;
        }

        .duration-1000 {
          transition-duration: 1s;
        }

        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }

        .hover\\:text-blue-300:hover {
          color: #93c5fd;
        }

        .hover\\:shadow-md:hover {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .translate-y-0 {
          transform: translateY(0);
        }

        .translate-y-10 {
          transform: translateY(2.5rem);
        }

        .-translate-x-10 {
          transform: translateX(-2.5rem);
        }

        .translate-x-0 {
          transform: translateX(0);
        }

        .translate-x-10 {
          transform: translateX(2.5rem);
        }

        .opacity-0 {
          opacity: 0;
        }

        .opacity-100 {
          opacity: 1;
        }

        .relative {
          position: relative;
        }

        .absolute {
          position: absolute;
        }

        .inset-0 {
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }

        .z-10 {
          z-index: 10;
        }

        .opacity-5 {
          opacity: 0.05;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
