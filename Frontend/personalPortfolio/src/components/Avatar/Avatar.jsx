import { memo, useState, useEffect, useRef, useCallback } from 'react';
import styles from './Avatar.module.css';

// Import avatar images
import avatarWave from '../../assets/avatar-wave.png';
import avatarPoint from '../../assets/avatar-point.png';
import avatarThumbsup from '../../assets/avatar-thumbsup.png';
import avatarPresenting from '../../assets/avatar-presenting.png';
import avatarThinking from '../../assets/avatar-thinking.png';
import avatarNamaste from '../../assets/avatar-namaste.png';

// Section configurations
const sectionConfig = {
  home: {
    image: avatarWave,
    side: 'left',
    message: "Hey there! 👋",
  },
  about: {
    image: avatarPoint,
    side: 'right',
    message: "That's me!",
  },
  skills: {
    image: avatarThumbsup,
    side: 'left',
    message: "My superpowers! 💪",
  },
  projects: {
    image: avatarPresenting,
    side: 'right',
    message: "Check these out!",
  },
  experience: {
    image: avatarThinking,
    side: 'left',
    message: "My journey so far...",
  },
  contact: {
    image: avatarNamaste,
    side: 'right',
    message: "Let's connect! 🙏",
  },
};

const Avatar = memo(function Avatar() {
  const [currentSection, setCurrentSection] = useState('home');
  const [displayedSection, setDisplayedSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const isAnimatingRef = useRef(false);
  const pendingSectionRef = useRef(null);

  // Detect current section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(sectionConfig);
      
      // Check if at bottom for contact section
      const scrolledToBottom = 
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      
      if (scrolledToBottom) {
        setCurrentSection('contact');
        return;
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle section transitions with proper animation
  const transitionToSection = useCallback((newSection) => {
    if (isAnimatingRef.current) {
      pendingSectionRef.current = newSection;
      return;
    }

    const currentConfig = sectionConfig[displayedSection];
    const newConfig = sectionConfig[newSection];
    const sideChanging = currentConfig.side !== newConfig.side;

    if (sideChanging) {
      // Side is changing - animate out, switch, animate in
      isAnimatingRef.current = true;
      setIsVisible(false);
      
      setTimeout(() => {
        setDisplayedSection(newSection);
        
        setTimeout(() => {
          setIsVisible(true);
          isAnimatingRef.current = false;
          
          // Check if there's a pending section change
          if (pendingSectionRef.current && pendingSectionRef.current !== newSection) {
            const pending = pendingSectionRef.current;
            pendingSectionRef.current = null;
            transitionToSection(pending);
          }
        }, 100);
      }, 400);
    } else {
      // Same side - just update content with a subtle fade
      setDisplayedSection(newSection);
    }
  }, [displayedSection]);

  // Trigger transition when section changes
  useEffect(() => {
    if (currentSection !== displayedSection) {
      transitionToSection(currentSection);
    }
  }, [currentSection, displayedSection, transitionToSection]);

  const config = sectionConfig[displayedSection] || sectionConfig.home;

  if (isHidden) return null;

  return (
    <div 
      className={`
        ${styles.avatarContainer} 
        ${styles[config.side]} 
        ${isVisible ? styles.visible : styles.hidden}
      `}
    >
      <button 
        className={styles.closeBtn}
        onClick={() => setIsHidden(true)}
        aria-label="Hide avatar"
      >
        ×
      </button>
      
      <div className={styles.avatarWrapper}>
        <img 
          src={config.image} 
          alt="Avatar" 
          className={styles.avatarImage}
        />
      </div>
      
      <div className={styles.speechBubble}>
        <span>{config.message}</span>
      </div>
    </div>
  );
});

export default Avatar;
