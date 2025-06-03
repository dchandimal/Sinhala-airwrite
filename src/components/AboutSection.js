import React from "react";
import aboutIllustration from "../assets/project/about-illustration.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h2 className="section-title mb-4">About Our Project</h2>
            <p className="lead text-muted mb-4">
              Our innovative research project focuses on developing a deep
              learning solution for recognizing Sinhala characters written in
              the air. By combining Convolutional Neural Networks (CNN) and
              Recurrent Neural Networks (RNN), we aim to create an accessible
              and intuitive interface for digital interaction in the Sinhala
              language.
            </p>

            {/* Additional project details */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 me-3">
                    <div
                      className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 12l2 2 4-4"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-0">Deep Learning</h6>
                    <small className="text-muted">CNN + RNN Architecture</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 me-3">
                    <div
                      className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-0">Real-time Recognition</h6>
                    <small className="text-muted">Air Writing Detection</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 text-center">
            <div className="about-illustration">
              {/* Your actual project image */}
              <img
                src={aboutIllustration}
                alt="Sinhala Air Writing Character Recognition Illustration"
                className="img-fluid rounded shadow-sm"
                style={{ maxWidth: "100%", height: "auto" }}
                onError={(e) => {
                  // Fallback to SVG if image fails to load
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />

              {/* Fallback SVG illustration (hidden by default) */}
              <div style={{ display: "none" }} className="about-icon">
                <svg
                  width="280"
                  height="200"
                  viewBox="0 0 280 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Neural Network Illustration */}
                  <rect
                    x="20"
                    y="50"
                    width="60"
                    height="100"
                    rx="10"
                    fill="#e3f2fd"
                    stroke="#0d6efd"
                    strokeWidth="2"
                  />
                  <text
                    x="50"
                    y="105"
                    textAnchor="middle"
                    fill="#0d6efd"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    CNN
                  </text>

                  <rect
                    x="120"
                    y="50"
                    width="60"
                    height="100"
                    rx="10"
                    fill="#e8f5e9"
                    stroke="#4caf50"
                    strokeWidth="2"
                  />
                  <text
                    x="150"
                    y="105"
                    textAnchor="middle"
                    fill="#4caf50"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    RNN
                  </text>

                  <rect
                    x="220"
                    y="75"
                    width="40"
                    height="50"
                    rx="5"
                    fill="#fff3e0"
                    stroke="#ff9800"
                    strokeWidth="2"
                  />
                  <text
                    x="240"
                    y="105"
                    textAnchor="middle"
                    fill="#ff9800"
                    fontSize="10"
                    fontWeight="bold"
                  >
                    OUTPUT
                  </text>

                  {/* Arrows */}
                  <path
                    d="M85 100 L115 100"
                    stroke="#666"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                  />
                  <path
                    d="M185 100 L215 100"
                    stroke="#666"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                  />

                  {/* Air writing gesture */}
                  <path
                    d="M50 20 Q80 10, 110 25 T170 30"
                    stroke="#0d6efd"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                    fill="none"
                  />
                  <text
                    x="110"
                    y="15"
                    textAnchor="middle"
                    fill="#0d6efd"
                    fontSize="11"
                  >
                    Air Writing
                  </text>

                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="7"
                      refX="9"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="#666" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Optional: Add project statistics */}
            <div className="row mt-4">
              <div className="col-6">
                <div className="text-center">
                  <h5 className="text-primary mb-0">10,000+</h5>
                  <small className="text-muted">Video Samples</small>
                </div>
              </div>
              <div className="col-6">
                <div className="text-center">
                  <h5 className="text-primary mb-0">95%+</h5>
                  <small className="text-muted">Accuracy Rate</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
