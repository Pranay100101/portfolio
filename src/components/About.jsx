import React from 'react';
import { Fade } from 'react-awesome-reveal';
import resume from '../media/SushantResume.pdf';
import transcript from '../media/SushantResume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons';

const About = ({ darkMode }) => {
  return (
    <div className="job-outer-container">
      <Fade triggerOnce>
        <div className="nbcard job-inner-container" style={{ textAlign: 'center', padding: '2.5rem', borderRadius: '16px', background: 'var(--bg-color)', boxShadow: '0 4px 24px rgba(61,169,252,0.12)', maxWidth: 600, margin: '0 auto' }}>
          <h2 className="display-3 skill-h job-title-anim" style={{ marginBottom: '2rem', color: 'var(--name)', fontWeight: 700, letterSpacing: '1px' }}>About Me</h2>
          <div style={{ fontSize: '1.15rem', color: 'var(--text-color)', marginBottom: '1.2rem', lineHeight: 1.6 }}>
            <span style={{ display: 'inline-block', margin: '0.5rem 0' }}>
              <FontAwesomeIcon icon={faGoogle} style={{ marginRight: 8, color: '#ea4335', fontSize: '1.5rem', verticalAlign: 'middle' }} />
              <a href="mailto:patilpranay102001@gmail.com" style={{ color: 'var(--name)', textDecoration: 'none', fontWeight: 500 }}>patilpranay102001@gmail.com</a>
            </span><br />
            <span style={{ display: 'inline-block', margin: '0.5rem 0' }}>
              <strong style={{ color: 'var(--name)', fontWeight: 500 }}>Phone No:</strong> <span style={{ color: 'var(--text-color)' }}>9923757222</span>
            </span>
          </div>
          <div style={{ background: 'rgba(61,169,252,0.06)', borderRadius: '12px', padding: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-color)', fontSize: '1.05rem', lineHeight: 1.7, boxShadow: '0 2px 8px rgba(61,169,252,0.08)' }}>
            I am a passionate Front-End Developer with strong expertise in crafting responsive, user-friendly, and visually engaging web interfaces. Skilled in HTML, CSS, JavaScript, and modern frameworks like React, I bring ideas to life with clean, efficient, and maintainable code. My focus is on delivering seamless user experiences through intuitive design and optimized performance. I thrive in collaborative environments, adapt quickly to new technologies, and pay close attention to detail. From concept to deployment, I ensure every project reflects creativity, functionality, and precision. My goal is to build digital experiences that inspire, engage, and leave a lasting impression.
          </div>
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1.2rem' }}>
            <a className="social-icons" href="https://www.linkedin.com/in/pranay-patil-027559224/" target="_blank" rel="noreferrer noopener" style={{ color: '#0077b5', fontSize: '2.6rem', fontWeight: 'bold', textShadow: '0 2px 8px rgba(61,169,252,0.18)' }}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a className="social-icons" href="https://github.com/Pranay100101" target="_blank" rel="noreferrer noopener" style={{ color: '#333', fontSize: '2.6rem', fontWeight: 'bold', textShadow: '0 2px 8px rgba(61,169,252,0.18)' }}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default About;
