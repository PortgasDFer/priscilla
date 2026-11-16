import { projectCategories } from '../../data/projects.js';

export default function ProjectFilters({ activeCategory, onCategoryChange }) {
  return (
    <nav className="project-filters" aria-label="Filtrar proyectos">
      <span className="project-filters__caption">EXPLORAR POR DISCIPLINA</span>

      <div className="project-filters__list">
        {projectCategories.map((category, index) => (
          <button
            key={category.id}
            type="button"
            className={`project-filters__item ${
              activeCategory === category.id ? 'is-active' : ''
            }`}
            onClick={() => onCategoryChange(category.id)}
            aria-pressed={activeCategory === category.id}
          >
            <span className="project-filters__number">
              0{index + 1}
            </span>

            <span className="project-filters__label">
              {category.label}
            </span>

            <span className="project-filters__indicator" />
          </button>
        ))}
      </div>
    </nav>
  );
}