import { memo } from 'react';
import { profile } from '../../data';
import profileHero from '../../assets/profile-hero.png';
import styles from './HeroSection.module.css';

const HeroSection = memo(function HeroSection() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.greeting}>Hi, I'm</p>
          <h1 className={styles.name}>{profile.name}</h1>
          <h2 className={styles.title}>{profile.title}</h2>
          <p className={styles.tagline}>{profile.tagline}</p>
          <p className={styles.bio}>{profile.bio}</p>
          
          <div className={styles.cta}>
            <a href="#contact" className={styles.btnPrimary}>
              Get In Touch
            </a>
            <a 
              href={profile.resumeUrl} 
              className={styles.btnSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>

          <div className={styles.social}>
            {profile.social.linkedin && (
              <a 
                href={profile.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.linkedinBtn}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>Connect on LinkedIn</span>
              </a>
            )}
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img 
            src={profileHero} 
            alt={profile.name}
            className={styles.profileImage}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
