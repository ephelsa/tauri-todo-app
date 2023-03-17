import type { JSXElement } from 'solid-js';
import { Project } from '../../api/project/models/project';

import './ProjectTile.css';

interface Props {
  project: Project;
  isActive?: boolean;
  onClick: (id: number) => void; // eslint-disable-line
}

function ProjectTile(props: Props): JSXElement {
  return (
    <div
      class={`project-tile ${props.isActive ? 'active' : ''}`}
      onClick={() => props.onClick(props.project.id)}
    >
      {props.project.name} - {props.project.color}
    </div>
  );
}

export default ProjectTile;
