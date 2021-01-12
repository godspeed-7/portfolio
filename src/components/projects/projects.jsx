/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styles from './projects.module.css';
import { projects } from '../../resources/projects';

export default function Projects() {
  console.log(projects);
  const getButtonColor = (tech) => {
    switch (tech) {
      case 'HTML':
        return 'primary';
      case 'CSS':
        return 'danger';
      case 'Javascript':
        return 'warning';
      case 'React':
        return 'info';
      case 'Node':
        return 'success';
      default:
        return 'secondary';
    }
  };

  const renderTechStack = ({ techStack, githubUrl }) => {
    return [...techStack, 'See more on github'].map((tech) => {
      const color = getButtonColor(tech);
      return (
        <button
          type="button"
          className={`btn btn-${color} btn-lg ${styles.button}`}
          onClick={() => {
            return tech === 'See more on github'
              ? window.open(githubUrl, '_blank')
              : '';
          }}
        >
          {tech}
        </button>
      );
    });
  };
  const renderProjects = () => {
    return projects.map((project) => {
      return (
        <div className={styles.project}>
          <h2>{project.name}</h2>
          <div className={styles.image}>
            <img src={project.image} alt="image" />
          </div>
          <div className={styles.details}>
            {/* <h3>GitHub {project.githubUrl}</h3> */}
            <div>{renderTechStack(project)}</div>
          </div>
        </div>
      );
    });
  };
  return <div className={styles.container}>{renderProjects()}</div>;
}
