import { useEffect } from 'react';

export default function ProjectLightbox({
  projects,
  activeIndex,
  onClose,
  onNavigate
}) {
  const project = projects[activeIndex];

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();

      if (event.key === 'ArrowRight') {
        onNavigate(1);
      }

      if (event.key === 'ArrowLeft') {
        onNavigate(-1);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onNavigate]);

  if (!project) return null;

  return (
    <div
      className="project-lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Vista ampliada del proyecto"
    >
      <button
        className="project-lightbox__close"
        onClick={onClose}
        aria-label="Cerrar imagen"
      >
        ×
      </button>

      <button
        className="project-lightbox__arrow project-lightbox__arrow--prev"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate(-1);
        }}
        aria-label="Imagen anterior"
      >
        ‹
      </button>

      <div
        className="project-lightbox__content"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={`${import.meta.env.BASE_URL}${project.image}`}
          alt={project.alt}
        />

        <div className="project-lightbox__caption">
          <span>{project.title}</span>

          <span>
            {String(activeIndex + 1).padStart(2, '0')} /{' '}
            {String(projects.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      <button
        className="project-lightbox__arrow project-lightbox__arrow--next"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate(1);
        }}
        aria-label="Imagen siguiente"
      >
        ›
      </button>
    </div>
  );
}