import { useState, useCallback } from 'react';
import { projects } from '../../data/projects.js';
import useImageReveal from '../../hooks/useImageReveal.js';
import ProjectLightbox from './ProjectLightbox.jsx';

function ProjectCard({ project, index, onOpen }) {
  const { elementRef, isVisible } = useImageReveal();

  return (
    <article
      ref={elementRef}
      className={`project-masonry__item ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <button
        type="button"
        className="project-masonry__image"
        onClick={() => onOpen(index)}
        aria-label={`Ampliar ${project.title}`}
      >
        <img
          src={`${import.meta.env.BASE_URL}${project.image}`}
          alt={project.alt}
          loading={index < 4 ? 'eager' : 'lazy'}
          decoding="async"
        />
      </button>
    </article>
  );
}

export default function ProjectMasonry({ activeCategory }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredProjects = projects.filter((project) => {
    return activeCategory === 'all' ||
      project.category === activeCategory;
  });

  const navigate = useCallback((direction) => {
    setActiveIndex((current) => {
      if (current === null) return null;

      return (
        current + direction + filteredProjects.length
      ) % filteredProjects.length;
    });
  }, [filteredProjects.length]);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  return (
    <>
      <div className="project-masonry">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpen={setActiveIndex}
          />
        ))}
      </div>

      {activeIndex !== null && (
        <ProjectLightbox
          projects={filteredProjects}
          activeIndex={activeIndex}
          onClose={closeLightbox}
          onNavigate={navigate}
        />
      )}
    </>
  );
}