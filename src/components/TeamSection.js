import React from "react";

// Import team member images
import member1Photo from "../assets/team/member1.jpeg";
import member2Photo from "../assets/team/member2.jpeg";
import member3Photo from "../assets/team/member3.jpeg";
// Optional: import supervisor photos
import supervisorPhoto from "../assets/team/supervisor.jpg";
import coSupervisorPhoto from "../assets/team/co-supervisor.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "D.C. Ukwaththage",
      id: "ICT/20/950",
      email: "ict20950@fot.sjp.ac.lk",
      photo: member1Photo,
    },
    {
      name: "W.W.A. Hemal",
      id: "ICT/20/848",
      email: "ict20848@fot.sjp.ac.lk",
      photo: member2Photo,
    },
    {
      name: "Naveen K.D.C.",
      id: "ICT/20/891",
      email: "ict20891@fot.sjp.ac.lk",
      photo: member3Photo,
    },
  ];

  const supervisors = [
    {
      role: "Supervisor",
      name: "Dr. Nalaka Lankasena",
      email: "nalaka@sjp.ac.lk",
      photo: supervisorPhoto,
    },
    {
      role: "Co-Supervisor",
      name: "Mr. Bhathiya Seneviratne",
      email: "seneviratne.bathiya@gmail.com",
      photo: coSupervisorPhoto,
    },
  ];

  return (
    <section id="team" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">Our Team</h2>
          </div>
        </div>

        {/* Supervisors Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-9">
            <div className="card border-0 shadow">
              <div className="card-body py-4">
                <h4 className="text-center mb-4 text-primary fw-bold">
                  Project Supervisors
                </h4>
                <div className="row">
                  {supervisors.map((supervisor, index) => (
                    <div key={index} className="col-md-6 mb-3">
                      <div className="text-center">
                        <div className="supervisor-avatar mx-auto mb-3">
                          <img
                            src={supervisor.photo}
                            alt={supervisor.name}
                            className="rounded-circle"
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                              border: "2px solid #0d6efd",
                            }}
                            onError={(e) => {
                              // Fallback to initials if image fails to load
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          {/* Fallback initials circle (hidden by default) */}
                          <div
                            className="rounded-circle bg-primary d-none align-items-center justify-content-center text-white fw-bold mx-auto"
                            style={{
                              width: "100px",
                              height: "100px",
                              fontSize: "24px",
                            }}
                          >
                            {supervisor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                        </div>
                        <div>
                          <h6 className="fw-bold text-primary mb-1">
                            {supervisor.role}
                          </h6>
                          <h5 className="mb-2 fw-bold text-dark">
                            {supervisor.name}
                          </h5>
                          <p className="text-muted mb-2 small">
                            Faculty of Technology, USJ
                          </p>
                          <a
                            href={`mailto:${supervisor.email}`}
                            className="text-primary text-decoration-none small fw-semibold"
                          >
                            {supervisor.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-4">
            <h4 className="text-primary">Team Members</h4>
          </div>
        </div>
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body">
                  <div className="team-avatar mx-auto mb-3">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="rounded-circle"
                      style={{
                        width: "90px",
                        height: "90px",
                        objectFit: "cover",
                        border: "2px solid #0d6efd",
                      }}
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    {/* Fallback initials circle (hidden by default) */}
                    <div
                      className="rounded-circle bg-primary d-none align-items-center justify-content-center text-white fw-bold"
                      style={{
                        width: "90px",
                        height: "90px",
                        fontSize: "20px",
                      }}
                    >
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <h6 className="card-title fw-bold">{member.name}</h6>
                  <p className="text-muted mb-1 small">{member.id}</p>
                  <p className="text-muted mb-2 small">
                    ICT, Faculty of Technology, USJ
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-primary text-decoration-none small"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
