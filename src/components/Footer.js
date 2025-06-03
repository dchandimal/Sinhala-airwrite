import React from "react";

// Import university logo
import usjLogo from "../assets/logos/usj-logo.png";
// Optional: Faculty logo
// import facultyLogo from '../assets/logos/faculty-logo.png';

const Footer = () => {
  return (
    <footer id="footer" className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="d-flex align-items-center mb-2 mb-md-0">
              {/* University Logo */}
              <div className="me-3">
                <img
                  src={usjLogo}
                  alt="University of Sri Jayewardenepura Logo"
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                  className="bg-white rounded p-1"
                  onError={(e) => {
                    // Fallback to SVG if logo fails to load
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                {/* Fallback SVG (hidden by default) */}
              </div>
              <div>
                <p className="mb-0 small">
                  © 2024 ICT Department, Faculty of Technology
                  <br />
                  <strong>University of Sri Jayewardenepura</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-md-end">
            <p className="mb-0 small">
              <strong>Developed by:</strong>
              <br />
              Group 18
            </p>
            {/* Optional: Add social links or contact */}
            <div className="mt-2">
              <a
                href="dinushachandimal186@gmail.com"
                className="text-light me-3"
                style={{ textDecoration: "none" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <polyline
                    points="22,6 12,13 2,6"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </a>
              <a
                href="https://www.sjp.ac.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
                style={{ textDecoration: "none" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
