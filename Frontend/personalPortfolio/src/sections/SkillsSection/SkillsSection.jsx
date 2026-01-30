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
                  <div className={styles.certBadge}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.certIcon}>
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <div className={styles.certInfo}>
                    <h4 className={styles.certName}>{cert.name}</h4>
                    <p className={styles.certIssuer}>{cert.issuer}</p>
                    <p className={styles.certDate}>{cert.date}</p>
                  </div>
                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.certLink}
                    >
                      View Credential
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
