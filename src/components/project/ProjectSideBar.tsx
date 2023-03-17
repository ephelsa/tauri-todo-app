import { For, JSXElement } from 'solid-js';
import { Project } from '../../api/project/models/project';

import './ProjectSideBar.css';
import ProjectTile from './ProjectTile';

export interface Props {
  projects: Project[];
  activeProjectId?: number;
  onTileClick(id: number): void; // eslint-disable-line no-unused-vars
}
const Loading = (): JSXElement => {
  return <div>Loading...</div>;
};

function ProjectSideBar(props: Props): JSXElement {
  return (
    <div class="project-sidebar">
      <For each={props.projects} fallback={<Loading />}>
        {(el) => (
          <ProjectTile
            project={el}
            isActive={el.id == props.activeProjectId}
            onClick={props.onTileClick}
          />
        )}
      </For>
    </div>
  );
}

export default ProjectSideBar;
