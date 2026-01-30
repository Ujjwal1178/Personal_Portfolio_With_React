import { memo } from 'react';
import { skills, certifications } from '../../data';
import styles from './SkillsSection.module.css';

const SkillsSection = memo(function SkillsSection() {
  const categories = Object.keys(skills);

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>What I Work With</span>
          <h2 className={styles.title}>Skills & Technologies</h2>
        </div>

        <div className={styles.grid}>
          {categories.map((category) => (
            <div key={category} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <div className={styles.tags}>
                {skills[category].map((skill, index) => (
                  <span 
                    key={index} 
                    className={styles.tag}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <div className={styles.certifications}>
            <h3 className={styles.certTitle}>Certifications</h3>
            <div className={styles.certGrid}>
              {certifications.map((cert, index) => (
                <div key={index} className={styles.certCard}>
                  <div className={styles.certRibbon}>
                    <span>Verified</span>
                  </div>
                  <div className={styles.certBadge}>
                    {/* AWS Logo SVG */}
                    <svg viewBox="0 0 80 80" className={styles.certLogo}>
                      <defs>
                        <linearGradient id={`awsGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FF9900"/>
                          <stop offset="100%" stopColor="#FFB84D"/>
                        </linearGradient>
                      </defs>
                      <circle cx="40" cy="40" r="38" fill="none" stroke={`url(#awsGrad-${index})`} strokeWidth="2"/>
                      <text x="40" y="35" textAnchor="middle" fill="#FF9900" fontSize="12" fontWeight="bold">AWS</text>
                      <text x="40" y="50" textAnchor="middle" fill="var(--text-secondary)" fontSize="8">CERTIFIED</text>
                    </svg>
                  </div>
                  <div className={styles.certContent}>
                    <h4 className={styles.certName}>{cert.name}</h4>
                    <p className={styles.certIssuer}>{cert.issuer}</p>
                    <div className={styles.certMeta}>
                      <span className={styles.certDate}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                        </svg>
                        {cert.date}
                      </span>
                    </div>
                  </div>
                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.certLink}
                    >
                      <span>View Credential</span>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <path d="M19 19H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
});

export default SkillsSection;
