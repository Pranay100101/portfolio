import React, { useState, useEffect } from 'react';
import { AttentionSeeker } from 'react-awesome-reveal';

const Home = ({ darkMode }) => {
    // Typing animation logic
    const phrase = " Am Frontend Developer";
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedText(phrase.slice(0, i));
            i++;
            if (i > phrase.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="job-outer-container">
            <AttentionSeeker shakeX>
                <div className="nbcard job-inner-container" style={{ textAlign: 'center' }}>
                    <div className="img">
                        <img
                            src={require('../media/WA_1774003046430.png')}
                            alt="Profile"
                            className="home-profile-img"
                            style={{ width: '320px', height: '320px', maxWidth: '85vw', maxHeight: '85vw', borderRadius: '50%', objectFit: 'cover', margin: '0 auto', marginTop: '60px' }}
                        />
                    </div>
                    <h1 className="display-3 hello" style={{ marginTop: '2rem', fontSize: '3rem', fontWeight: 800 }}><code> I'm Pranay Patil</code></h1>
                    <h2 className="lead" style={{ marginTop: '1rem' }}>I
                        <span className="txt-rotate">
                            {typedText}
                        </span>
                    </h2>
                </div>
            </AttentionSeeker>
        </div>
    );
};

export default Home;
