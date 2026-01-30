import { memo } from 'react';
import { profile } from '../../data';
import styles from './AboutSection.module.css';

const AboutSection = memo(function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Get To Know</span>
          <h2 className={styles.title}>About Me</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.highlights}>
            {profile.about.highlights.map((item, index) => (
              <div key={index} className={styles.highlightCard}>
                <h3 className={styles.highlightValue}>{item.value}</h3>
                <p className={styles.highlightLabel}>{item.label}</p>
              </div>
            ))}
          </div>

          <div className={styles.description}>
            {profile.about.description.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <a href="#contact" className={styles.ctaButton}>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
