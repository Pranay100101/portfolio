import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

const Skills = ({ darkMode }) => {
    return (
        <div className="job-outer-container">
            <Slide direction="left" triggerOnce>
                <div className="nbcard job-inner-container" style={{ textAlign: 'center' }}>
                    <h2 className="display-3 skill-h job-title-anim" style={{ marginBottom: '1.5rem' }}>Skills</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', marginTop: '2rem' }}>
                        {/* Frontend Skills */}
                        <div style={{ background: 'var(--bg-color)', borderRadius: '12px', boxShadow: '0 2px 12px rgba(61,169,252,0.08)', padding: '1.5rem', width: '100%', maxWidth: 500 }}>
                            <h3 style={{ color: 'var(--name)', marginBottom: '1rem', fontWeight: 600 }}>Frontend</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                                <span className="skill-pill"><FontAwesomeIcon icon={faHtml5} style={{ marginRight: 8, color: '#e34c26' }} />HTML</span>
                                <span className="skill-pill"><FontAwesomeIcon icon={faCss3Alt} style={{ marginRight: 8, color: '#1572b6' }} />CSS</span>
                                <span className="skill-pill"><FontAwesomeIcon icon={faJs} style={{ marginRight: 8, color: '#f7df1e' }} />Javascript</span>
                                <span className="skill-pill"><FontAwesomeIcon icon={faReact} style={{ marginRight: 8, color: '#61dafb' }} />React</span>
                                <span className="skill-pill"><FontAwesomeIcon icon={faCodeBranch} style={{ marginRight: 8, color: '#764abc' }} />Redux</span>
                                <span className="skill-pill">Next.js</span>
                            </div>
                        </div>
                        {/* Backend Skills */}
                        <div style={{ background: 'var(--bg-color)', borderRadius: '12px', boxShadow: '0 2px 12px rgba(61,169,252,0.08)', padding: '1.5rem', width: '100%', maxWidth: 500 }}>
                            <h3 style={{ color: 'var(--name)', marginBottom: '1rem', fontWeight: 600 }}>Backend</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                                <span className="skill-pill"><FontAwesomeIcon icon={faNodeJs} style={{ marginRight: 8, color: '#68a063' }} />Node.js (Basic)</span>
                                <span className="skill-pill"><FontAwesomeIcon icon={faCodeBranch} style={{ marginRight: 8, color: '#000' }} />Express.js (Basic)</span>
                            </div>
                        </div>
                        {/* Tools */}
                        <div style={{ background: 'var(--bg-color)', borderRadius: '12px', boxShadow: '0 2px 12px rgba(61,169,252,0.08)', padding: '1.5rem', width: '100%', maxWidth: 500 }}>
                            <h3 style={{ color: 'var(--name)', marginBottom: '1rem', fontWeight: 600 }}>Tools</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                                <span className="skill-pill"><FontAwesomeIcon icon={faGithub} style={{ marginRight: 8, color: '#333' }} />Github</span>
                                <span className="skill-pill">Postman</span>
                                <span className="skill-pill">Jest</span>
                                <span className="skill-pill">Vercel</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default Skills;
