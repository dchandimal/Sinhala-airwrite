import React from "react";

const ObjectiveSection = () => {
  const objectives = [
    "Develop a comprehensive dataset of 10,000 video samples for eight base letters and two diacritics.",
    "Design and develop a CNN+LSTM model to recognize Sinhala base letters.",
    "Design and develop a CNN+GRU model for diacritic detection.",
    "Integrate both models into a unified pipeline to recognize characters written in the air.",
    "Fully functional website for real world usage.",
  ];

  return (
    <section id="objective" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">Specific Objectives</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {objectives.map((objective, index) => (
              <div key={index} className="d-flex align-items-start mb-4">
                <div className="flex-shrink-0 me-3">
                  <div className="objective-icon">
                    <svg
                      width="24"
                      height="24"
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
                </div>
                <div className="flex-grow-1">
                  <p className="mb-0 text-muted text-start">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;
