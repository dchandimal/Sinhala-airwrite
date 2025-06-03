import React from "react";

const KeyFeaturesSection = () => {
  const features = [
    {
      title: "CNN + RNN Integration",
      description:
        "Advanced neural network architecture combining spatial and temporal pattern recognition",
    },
    {
      title: "Real-time Recognition",
      description:
        "Instant character recognition with minimal latency for seamless user experience",
    },
    {
      title: "Responsive Web Support",
      description:
        "Cross-platform compatibility ensuring accessibility across all devices",
    },
    {
      title: "Comprehensive Dataset",
      description:
        "10,000+ video samples ensuring robust model training and accuracy",
    },
    {
      title: "Sinhala Language Focus",
      description:
        "Specialized support for Sinhala characters and linguistic patterns",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Intuitive design making air writing accessible to users of all skill levels",
    },
  ];

  return (
    <section id="features" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">Key Features</h2>
          </div>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm feature-card">
                <div className="card-body text-center">
                  <div className="feature-icon mb-3">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="10" fill="#0d6efd" />
                      <path
                        d="M8 12l2 2 4-4"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text text-muted">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
