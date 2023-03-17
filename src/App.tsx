import type { JSXElement } from 'solid-js';
import { ProjectRepositoryImpl } from './api/project/project-repository-impl';
import './App.css';
import Home from './pages/home/Home';

function App(): JSXElement {
  const projectRepository = new ProjectRepositoryImpl();

  return (
    <>
      <Home projectRepository={projectRepository} />
    </>
  );
}

export default App;
