import { memo } from 'react';
import { experience } from '../../data';
import styles from './ExperienceSection.module.css';

const ExperienceSection = memo(function ExperienceSection() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Career Journey</span>
          <h2 className={styles.title}>Work Experience</h2>
        </div>

        <div className={styles.timeline}>
          {experience.map((job, index) => (
            <div key={job.id} className={styles.item}>
              <div className={styles.marker}>
                <div className={styles.dot} />
                {index !== experience.length - 1 && <div className={styles.line} />}
              </div>
              
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.roleInfo}>
                    <h3 className={styles.role}>{job.role}</h3>
                    <p className={styles.company}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                      </svg>
                      {job.company}
                    </p>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.duration}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                      </svg>
                      {job.duration}
                    </span>
                    <span className={styles.location}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      {job.location}
                    </span>
                  </div>
                </div>

                <ul className={styles.responsibilities}>
                  {job.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className={styles.techUsed}>
                  {job.technologies.map((tech, i) => (
                    <span key={i} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ExperienceSection;
