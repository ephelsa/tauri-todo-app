import { invoke } from '@tauri-apps/api';
import type { Project } from './models/project';
import type { ProjectRepository } from './project_repository';

export class ProjectRepositoryImpl implements ProjectRepository {
  async fetchProjects(): Promise<Project[]> {
    return await invoke('fetch_projects');
  }
}
