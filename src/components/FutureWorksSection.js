import React from "react";

const FutureWorksSection = () => {
  const futureWorks = [
    "Expand dataset to include the full Sinhala alphabet and compound characters.",
    "Develop a separate mobile application for on-device inference.",
    "Implement real-time performance optimization for low-latency recognition.",
    "Integrate voice feedback for enhanced user experience.",
  ];

  return (
    <section id="future" className="py-5  bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">Future Works</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {futureWorks.map((work, index) => (
              <div
                key={index}
                className="alert alert-info d-flex align-items-center mb-3"
                role="alert"
              >
                <div className="me-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      fill="#0dcaf0"
                    />
                  </svg>
                </div>
                <div>{work}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureWorksSection;
