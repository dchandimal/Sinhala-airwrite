import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style jsx>{`
        .hero-section {
          background: linear-gradient(
            135deg,
            #1e3a8a 0%,
            #3b82f6 25%,
            #60a5fa 50%,
            #1d4ed8 75%,
            #2563eb 100%
          );
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .hero-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(30, 58, 138, 0.2);
          z-index: 1;
        }

        .hero-section::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(147, 197, 253, 0.1) 1px,
            transparent 1px
          );
          background-size: 50px 50px;
          animation: float 20s linear infinite;
          z-index: 1;
        }

        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(-50px, -50px) rotate(360deg);
          }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          transform: ${isVisible ? "translateY(0)" : "translateY(50px)"};
          opacity: ${isVisible ? 1 : 0};
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-title {
          background: linear-gradient(
            45deg,
            #dbeafe,
            #bfdbfe,
            #93c5fd,
            #60a5fa
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s ease-in-out infinite;
          text-shadow: 0 0 30px rgba(147, 197, 253, 0.5);
          transform: translateX(${mousePosition.x}px)
            translateY(${mousePosition.y}px);
          transition: transform 0.1s ease-out;
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }

        @keyframes shimmer {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .hero-subtitle {
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? "translateY(0)" : "translateY(30px)"};
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
          text-shadow: 0 2px 10px rgba(30, 58, 138, 0.3);
          letter-spacing: 1px;
          color: #e0f2fe;
          font-size: 1.25rem;
          margin-bottom: 3rem;
        }

        .hero-btn {
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible
            ? "translateY(0) scale(1)"
            : "translateY(30px) scale(0.9)"};
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
          position: relative;
          overflow: hidden;
          border: 2px solid #60a5fa;
          background: linear-gradient(45deg, #3b82f6, #1d4ed8);
          color: white;
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
          border-radius: 50px;
          padding: 12px 40px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
        }

        .hero-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(147, 197, 253, 0.4),
            transparent
          );
          transition: left 0.6s ease;
        }

        .hero-btn:hover::before {
          left: 100%;
        }

        .hero-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
          background: linear-gradient(45deg, #2563eb, #1e40af);
          border-color: #93c5fd;
        }

        .hero-btn:active {
          transform: translateY(-2px) scale(1.02);
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .floating-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(96, 165, 250, 0.15);
          border: 1px solid rgba(147, 197, 253, 0.2);
          animation: floatUpDown 6s ease-in-out infinite;
        }

        .floating-circle:nth-child(1) {
          width: 100px;
          height: 100px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
          background: rgba(30, 58, 138, 0.1);
        }

        .floating-circle:nth-child(2) {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 15%;
          animation-delay: -2s;
          background: rgba(59, 130, 246, 0.1);
        }

        .floating-circle:nth-child(3) {
          width: 80px;
          height: 80px;
          top: 80%;
          left: 20%;
          animation-delay: -4s;
          background: rgba(96, 165, 250, 0.15);
        }

        .floating-circle:nth-child(4) {
          width: 120px;
          height: 120px;
          top: 30%;
          right: 30%;
          animation-delay: -1s;
          background: rgba(37, 99, 235, 0.1);
        }

        @keyframes floatUpDown {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          opacity: ${isVisible ? 1 : 0};
          transition: opacity 1s ease 1s;
        }

        .scroll-arrow {
          width: 30px;
          height: 30px;
          border: 2px solid rgba(147, 197, 253, 0.8);
          border-top: none;
          border-left: none;
          transform: rotate(45deg);
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: rotate(45deg) translateY(0);
          }
          40% {
            transform: rotate(45deg) translateY(-10px);
          }
          60% {
            transform: rotate(45deg) translateY(-5px);
          }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
        }

        .row {
          display: flex;
          justify-content: center;
        }

        .col-lg-8 {
          max-width: 66.666667%;
          flex: 0 0 66.666667%;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem !important;
          }

          .hero-subtitle {
            font-size: 1.1rem !important;
          }

          .floating-circle {
            opacity: 0.3;
          }

          .col-lg-8 {
            max-width: 100%;
            flex: 0 0 100%;
          }

          .hero-btn {
            padding: 10px 30px;
            font-size: 1rem;
          }
        }
      `}</style>

      <section
        id="hero"
        className="hero-section"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Floating Background Elements */}
        <div className="floating-elements">
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
        </div>

        <div className="container hero-content">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="hero-title">
                Sinhala Air Writing Character Recognition
              </h1>
              <p className="hero-subtitle">
                A Deep Learning Approach Using CNN and RNN
              </p>
              <button
                className="hero-btn"
                onClick={() => scrollToSection("about")}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
