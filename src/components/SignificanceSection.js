import React from "react";

const SignificanceSection = () => {
  return (
    <section id="significance" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">Significance and Application</h2>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="significance-icon mb-3">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      fill="#0d6efd"
                    />
                  </svg>
                </div>
                <h5 className="card-title">Assistive Technology</h5>
                <p className="card-text text-muted">
                  Enables touchless interaction for users with mobility
                  challenges, creating more inclusive digital experiences and
                  improving accessibility for diverse user groups.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="significance-icon mb-3">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                      stroke="#0d6efd"
                      strokeWidth="2"
                      fill="none"
                    />
                    <line
                      x1="16"
                      y1="2"
                      x2="16"
                      y2="6"
                      stroke="#0d6efd"
                      strokeWidth="2"
                    />
                    <line
                      x1="8"
                      y1="2"
                      x2="8"
                      y2="6"
                      stroke="#0d6efd"
                      strokeWidth="2"
                    />
                    <line
                      x1="3"
                      y1="10"
                      x2="21"
                      y2="10"
                      stroke="#0d6efd"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h5 className="card-title">Educational Applications</h5>
                <p className="card-text text-muted">
                  Facilitates interactive learning experiences for Sinhala
                  language education, making it easier for children and adults
                  to practice character formation in digital environments.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="significance-icon mb-3">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#0d6efd"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                      stroke="#0d6efd"
                      strokeWidth="2"
                    />
                    <line
                      x1="12"
                      y1="17"
                      x2="12.01"
                      y2="17"
                      stroke="#0d6efd"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h5 className="card-title">Digital Literacy</h5>
                <p className="card-text text-muted">
                  Promotes digital literacy in rural communities by providing an
                  intuitive interface that doesn't require traditional keyboard
                  input, bridging the digital divide.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Video Section */}
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h4 className="mb-4">Project Demo Video</h4>
            <div className="video-container">
              <video
                className="img-fluid rounded shadow"
                controls
                width="100%"
                height="auto"
                poster="/videos/demo-poster.jpg" // Optional: Add a poster image
                style={{ maxWidth: "100%", height: "auto" }}
              >
                {/* Your actual demo video */}
                <source src="/videos/demo-video.mp4" type="video/mp4" />
                <source src="/videos/demo-video.webm" type="video/webm" />

                {/* Fallback message */}
                <p className="text-muted">
                  Your browser does not support the video tag.
                  <a href="/videos/demo-video.mp4" className="text-primary">
                    Download the video
                  </a>{" "}
                  instead.
                </p>
              </video>

              {/* Video description */}
              <div className="mt-3">
                <p className="text-muted small">
                  <strong>Demo:</strong> Real-time Sinhala character recognition
                  using air writing gestures. The system accurately identifies
                  hand-drawn Sinhala characters in 3D space using our CNN+RNN
                  models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignificanceSection;
