/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styles from './projects.module.css';
import { projects } from '../../resources/projects';
import { backgrounds } from '../../assets/backgrounds';

export default function Projects() {
  console.log(projects);
  console.log(backgrounds);
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
          className={`btn btn-${color} btn-sm ${styles.button}`}
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
          <div className={styles.image}>
            <img src={project.image} alt="image" />
            <h4 className={styles.projectName}>{project.name}</h4>
          </div>
          <div className={styles.details}>
            {/* <h3>GitHub {project.githubUrl}</h3> */}
            <div>{renderTechStack(project)}</div>
          </div>
        </div>
      );
    });
  };
  return (
    <React.Fragment>
      <div className={styles.moviecontainer}>{renderProjects()}</div>
    </React.Fragment>
  );
}
