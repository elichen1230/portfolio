import React, { useState, useEffect, useRef } from "react";
import useFadeInSection from "./UseFadeInSection";

function WorkExperience() {
  const fadeInRef = useFadeInSection();

  const jobs = [
    {
      title: "Georgia Tech VIP",
      job: "Student Researcher @ Georgia Tech VIP",
      dateRange: "August 2023 - Present",
      description: [
        "Conducting research on advanced computing technologies and their applications in various fields.",
        "Worked on creating a convolutional neural network for the use in the medical field",
      ],
      url: "https://vip.gatech.edu",
    },
    {
      title: "HotSauce Technologies",
      job: "Software Developer Intern @ HotSauce Technologies",
      dateRange: "July 2021 - December 2022",
      description: [
        "Implemented new features and enhancements in the Point of Sale (POS) software, solving complex backend problems and resolving over 400 networking issues.",
        "Reduced database response times by 15% with SQL query optimization, significantly improving POS system performance and user experience.",
        "Provided technical support to customers while exceeding service level agreements (SLAs), maintaining a 99% resolution rate of customer issues within agreed-upon time frames.",
      ],
      url: "https://www.hotsaucepos.com/",
    },
  ];

  const [selectedJobIndex, setSelectedJobIndex] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    if (barRef.current) {
      const buttonHeight = 35;
      const offset = selectedJobIndex * (buttonHeight + 10);
      barRef.current.style.transform = `translateY(${offset}px)`;
    }
  }, [selectedJobIndex]);

  const renderJobTitle = (job) => {
    const [preAt, postAt] = job.split("@");
    return (
      <>
        {preAt}@
        <a
          href={jobs[selectedJobIndex].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {postAt}
        </a>
      </>
    );
  };

  return (
    <div ref={fadeInRef} className="fade-in-section">
      <h2 className="title">Where I've Worked</h2>

      <div className="work-experience-container">
        <div className="selection-bar-container">
          <div className="selection-bar">
            <div className="highlight-bar" ref={barRef}></div>
            {jobs.map((job, index) => (
              <button
                key={index}
                className={`selection-option ${
                  index === selectedJobIndex ? "selected" : ""
                }`}
                onClick={() => setSelectedJobIndex(index)}
              >
                {job.title}
              </button>
            ))}
          </div>
        </div>
        <div className="job-details">
          <h2>{renderJobTitle(jobs[selectedJobIndex].job)}</h2>
          <h3>{jobs[selectedJobIndex].dateRange}</h3>
          {jobs[selectedJobIndex].description.map((point, index) => (
            <p key={index}>{point}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
