import { Project } from './models/project';

export interface ProjectRepository {
  fetchProjects(): Promise<Project[]>;
}
