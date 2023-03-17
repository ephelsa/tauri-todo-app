import { createEffect, createSignal, untrack } from 'solid-js';
import { Project } from '../models/project';
import { ProjectRepository } from '../project_repository';

export const useFetchProjects = (projectRepository: ProjectRepository) => {
  const [projects, setProjects] = createSignal<Array<Project>>([]);
  // TODO: Define errors. Return from API Result<....>
  const [errors, setErrors] = createSignal();

  createEffect(() => {
    untrack(projects);
    untrack(errors);

    projectRepository
      .fetchProjects()
      .then((result) => {
        console.log('Projects => ', result);
        setProjects(result);
        console.log('Projects => ', projects());
      })
      .catch((err) => {
        setErrors(err);
      });
  });

  return { projects, errors };
};
