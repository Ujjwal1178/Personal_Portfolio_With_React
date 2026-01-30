import { memo, useState, useCallback, useEffect } from 'react';
import { projects } from '../../data';
import styles from './ProjectsSection.module.css';

const ProjectsSection = memo(function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  // Filter projects
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Open modal
  const openModal = useCallback((project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  }, []);

  // Close modal
  const closeModal = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedProject, closeModal]);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>My Work</span>
          <h2 className={styles.title}>Featured Projects</h2>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <article 
              key={project.id} 
              className={`${styles.card} ${project.featured ? styles.featured : ''}`}
              onClick={() => openModal(project)}
            >
              <div className={styles.cardImage}>
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className={styles.placeholder}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10z"/>
                    </svg>
                  </div>
                )}
                <div className={styles.overlay}>
                  <span className={styles.viewBtn}>View Details</span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.shortDescription}</p>
                <div className={styles.techStack}>
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className={styles.tech}>{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className={styles.tech}>+{project.technologies.length - 4}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeModal}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            
            <div className={styles.modalImage}>
              {selectedProject.image ? (
                <img src={selectedProject.image} alt={selectedProject.title} />
              ) : (
                <div className={styles.modalPlaceholder}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10z"/>
                  </svg>
                </div>
              )}
            </div>

            <div className={styles.modalContent}>
              <span className={styles.modalCategory}>{selectedProject.category}</span>
              <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
              <p className={styles.modalDesc}>{selectedProject.fullDescription}</p>
              
              <div className={styles.modalTech}>
                <h4>Technologies Used</h4>
                <div className={styles.modalTechList}>
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className={styles.modalTechItem}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className={styles.modalLinks}>
                {selectedProject.liveUrl && (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M19 19H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </svg>
                    Live Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
});

export default ProjectsSection;
