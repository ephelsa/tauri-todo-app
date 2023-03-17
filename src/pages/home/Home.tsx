import { createSignal, JSXElement } from 'solid-js';
import { NotePreview } from '../../api/note/models/note-preview';
import { useFetchProjects } from '../../api/project/hooks/useFetchProjects';
import { ProjectRepository } from '../../api/project/project-repository';
import NotePreviewsContainer from '../../components/note/NotePreviewsContainer';
import ProjectSideBar from '../../components/project/ProjectSideBar';

import './Home.css';

export interface Props {
  projectRepository: ProjectRepository;
}

const notes: NotePreview[] = [
  { id: 1, name: 'Note 1', tags: ['Info', 'Today'] },
  { id: 2, name: 'Note 2', tags: ['Info', 'Today'] },
  { id: 3, name: 'Note 3', tags: ['Info', 'Today'] },
  { id: 4, name: 'Note 4', tags: ['Info', 'Today'] },
  { id: 5, name: 'Note 5', tags: ['Info', 'Today'] },
  { id: 6, name: 'Note 6', tags: ['Info', 'Today'] },
  { id: 7, name: 'Note 7', tags: ['Info', 'Today'] },
];

function Home(props: Props): JSXElement {
  const [activeProjectId, setActiveProject] = createSignal<
    number | undefined
  >();
  const { projects } = useFetchProjects(props.projectRepository);

  return (
    <div class="page">
      <ProjectSideBar
        projects={projects()}
        onTileClick={setActiveProject}
        activeProjectId={activeProjectId()}
      />
      <NotePreviewsContainer notes={notes} />
    </div>
  );
}

export default Home;
