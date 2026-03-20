
import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';

// ...existing code...

const Experience = ({ darkMode }) => {
    return (
        <div className="job-outer-container">
            <Fade triggerOnce>
                <div className="nbcard job-inner-container" style={{ textAlign: 'center' }}>
                    <h2 className="display-3 skill-h job-title-anim" style={{ marginBottom: '1.5rem' }}>Projects</h2>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem', alignItems: 'stretch' }}>
                        {/* Employee Management System */}
                        <div style={{ background: 'var(--bg-color)', borderRadius: '16px', boxShadow: '0 4px 24px rgba(61,169,252,0.12)', padding: '2rem', flex: '0 0 calc(33.333% - 1rem)', minWidth: 260, display: 'flex', flexDirection: 'column' }}>
                            <a href="https://employee-management-system-gzci.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '1.2rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(61,169,252,0.10)' }}>
                                <img src={require('../media/managmentsystem.png')} alt="Employee Management System" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }} />
                            </a>
                            <h3 style={{ color: 'var(--name)', marginBottom: '0.7rem', fontWeight: 600, fontSize: '1.3rem' }}>Employee Management System</h3>
                            <ul style={{ textAlign: 'left', color: 'var(--text-color)', fontSize: '1rem', margin: '0 auto', paddingLeft: 20, marginBottom: 0 }}>
                                <li>Developed a responsive Employee Management System using React with features for adding, editing, and deleting employee records, along with real-time search and filtering.</li>
                            </ul>
                            <div style={{ marginTop: '1.2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="36" height="36" title="HTML5" />
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="36" height="36" title="CSS3" />
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="36" height="36" title="JavaScript" />
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="36" height="36" title="React" />
                            </div>
                        </div>
                        {/* E-Commerce Website */}
                        <div style={{ background: 'var(--bg-color)', borderRadius: '16px', boxShadow: '0 4px 24px rgba(61,169,252,0.12)', padding: '2rem', flex: '0 0 calc(33.333% - 1rem)', minWidth: 260, display: 'flex', flexDirection: 'column' }}>
                            <a href="https://e-commerce-website-brown-two-30.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '1.2rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(61,169,252,0.10)' }}>
                                <img src={require('../media/shopsy.png')} alt="E-Commerce Website" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }} />
                            </a>
                            <h3 style={{ color: 'var(--name)', marginBottom: '0.7rem', fontWeight: 600, fontSize: '1.3rem' }}>E-Commerce Website</h3>
                            <ul style={{ textAlign: 'left', color: 'var(--text-color)', fontSize: '1rem', margin: '0 auto', paddingLeft: 20, marginBottom: 0 }}>
                                <li>Built a responsive e-commerce interface using React.js with dynamic product rendering, add-to-cart functionality, and efficient state management using hooks like useState and useEffect.</li>
                            </ul>
                            <div style={{ marginTop: '1.2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="36" height="36" title="HTML5" />
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="36" height="36" title="CSS3" />
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="36" height="36" title="JavaScript" />
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="36" height="36" title="React" />
                            </div>
                        </div>
                        {/* Note App */}
                        <div style={{ background: 'var(--bg-color)', borderRadius: '16px', boxShadow: '0 4px 24px rgba(61,169,252,0.12)', padding: '2rem', flex: '0 0 calc(33.333% - 1rem)', minWidth: 260, display: 'flex', flexDirection: 'column' }}>
                            <a href="https://notes-app-livid-tau.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '1.2rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(61,169,252,0.10)' }}>
                                <img src={require('../media/note.png')} alt="Note App" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }} />
                            </a>
                            <h3 style={{ color: 'var(--name)', marginBottom: '0.7rem', fontWeight: 600, fontSize: '1.3rem' }}>Note App</h3>
                            <ul style={{ textAlign: 'left', color: 'var(--text-color)', fontSize: '1rem', margin: '0 auto', paddingLeft: 20, marginBottom: 0 }}>
                                <li>Developed a notes management app using React.js with full CRUD functionality, local storage persistence, and a clean responsive UI for seamless note creation and editing.</li>
                            </ul>
                            <div style={{ marginTop: '1.2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="36" height="36" title="HTML5" />
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="36" height="36" title="CSS3" />
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="36" height="36" title="JavaScript" />
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="36" height="36" title="React" />
                            </div>
                        </div>
                        {/* Food Website */}
                        <div style={{ background: 'var(--bg-color)', borderRadius: '16px', boxShadow: '0 4px 24px rgba(61,169,252,0.12)', padding: '2rem', flex: '0 0 calc(33.333% - 1rem)', minWidth: 260, display: 'flex', flexDirection: 'column' }}>
                            <a href="https://food-delivery-three-rose.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '1.2rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(61,169,252,0.10)' }}>
                                <img src={require('../media/food.png')} alt="Food Website" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }} />
                            </a>
                            <h3 style={{ color: 'var(--name)', marginBottom: '0.7rem', fontWeight: 600, fontSize: '1.3rem' }}>Food Website</h3>
                            <ul style={{ textAlign: 'left', color: 'var(--text-color)', fontSize: '1rem', margin: '0 auto', paddingLeft: 20, marginBottom: 0 }}>
                                <li>Developed a food delivery web app using React.js with interactive add-to-cart, dynamic menu browsing, and a responsive UI ensuring a seamless ordering flow from selection to checkout.</li>
                            </ul>
                            <div style={{ marginTop: '1.2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="36" height="36" title="HTML5" />
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="36" height="36" title="CSS3" />
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="36" height="36" title="JavaScript" />
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="36" height="36" title="React" />
                            </div>
                        </div>
                        {/* Quiz App */}
                        <div style={{ background: 'var(--bg-color)', borderRadius: '16px', boxShadow: '0 4px 24px rgba(61,169,252,0.12)', padding: '2rem', flex: '0 0 calc(33.333% - 1rem)', minWidth: 260, display: 'flex', flexDirection: 'column' }}>
                            <a href="https://quiz-app-chi-snowy.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '1.2rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(61,169,252,0.10)' }}>
                                <img src={require('../media/quiz.png')} alt="Quiz App" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }} />
                            </a>
                            <h3 style={{ color: 'var(--name)', marginBottom: '0.7rem', fontWeight: 600, fontSize: '1.3rem' }}>Quiz App</h3>
                            <ul style={{ textAlign: 'left', color: 'var(--text-color)', fontSize: '1rem', margin: '0 auto', paddingLeft: 20, marginBottom: 0 }}>
                                <li>Built an interactive quiz application using React.js, enabling users to answer multiple-choice questions with real-time score calculation and result display using state management.</li>
                            </ul>
                            <div style={{ marginTop: '1.2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="36" height="36" title="HTML5" />
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="36" height="36" title="CSS3" />
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="36" height="36" title="JavaScript" />
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="36" height="36" title="React" />
                            </div>
                        </div>
                        {/* Gemini Clone */}
                        <div style={{ background: 'var(--bg-color)', borderRadius: '16px', boxShadow: '0 4px 24px rgba(61,169,252,0.12)', padding: '2rem', flex: '0 0 calc(33.333% - 1rem)', minWidth: 260, display: 'flex', flexDirection: 'column' }}>
                            <a href="https://gemini-clone-chi-weld.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '1.2rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(61,169,252,0.10)' }}>
                                <img src={require('../media/gemini.png')} alt="Gemini Clone" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }} />
                            </a>
                            <h3 style={{ color: 'var(--name)', marginBottom: '0.7rem', fontWeight: 600, fontSize: '1.3rem' }}>Gemini Clone</h3>
                            <ul style={{ textAlign: 'left', color: 'var(--text-color)', fontSize: '1rem', margin: '0 auto', paddingLeft: 20, marginBottom: 0 }}>
                                <li>Developed a Gemini AI clone using React.js, integrating AI APIs to enable real-time conversational interactions with features like prompt handling, response generation, and dynamic UI updates.</li>
                            </ul>
                            <div style={{ marginTop: '1.2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="36" height="36" title="HTML5" />
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="36" height="36" title="CSS3" />
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="36" height="36" title="JavaScript" />
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="36" height="36" title="React" />
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Experience;

