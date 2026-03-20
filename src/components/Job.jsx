
import React from 'react';

import { Slide } from 'react-awesome-reveal';



const Job = () => {
  return (
    <div className="job-outer-container">
      <Slide direction="left" triggerOnce>
        <div className="nbcard job-card-anim job-inner-container">
          <h2 className="display-3 skill-h job-title-anim" style={{ marginBottom: '1rem' }}>Experience</h2>
          <div
            className="job-company-anim"
            style={{
              display: 'inline-block',
              background: 'rgba(61, 169, 252, 0.12)',
              border: '1px solid rgba(61, 169, 252, 0.45)',
              color: 'var(--name)',
              borderRadius: '999px',
              padding: '0.55rem 1rem',
              marginBottom: '0.85rem',
              fontSize: '1.05rem',
              fontWeight: 700,
              letterSpacing: '0.3px'
            }}
          >
            Company: Altimetrix
          </div>
          <p className="lead job-role-anim" style={{ marginBottom: 0, fontSize: '1rem' }}>
            <strong>Role:</strong> Junior Frontend Developer
          </p>
          <p className="lead job-duration-anim" style={{ fontSize: '1rem' }}>
            <strong>Duration:</strong> August 2023 - Present
          </p>
          <ul className="job-details-list">
            <li>Built modular and reusable UI components using React (buttons, cards, modals, forms) to ensure scalability and maintainability.</li>
            <li>Integrated REST APIs using fetch / axios and displayed dynamic data with proper loading and error handling.</li>
            <li>Managed application state using React hooks like <code>useState</code> and <code>useEffect</code> for efficient UI updates and data flow.</li>
            <li>Developed fully responsive web interfaces using CSS, Flexbox, and Grid.</li>
            <li>Implemented dynamic routing using React Router, including nested routes and parameter-based navigation.</li>
            <li>Used Git for version control, collaborated on codebases, and followed best practices for clean and maintainable code.</li>
          </ul>
        </div>
      </Slide>
    </div>
  );
};

export default Job;
