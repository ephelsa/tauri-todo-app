import { For, JSXElement } from 'solid-js';
import { NotePreview as NotePreviewModel } from '../../api/note/models/note-preview';
import NotePreview from './NotePreview';

export interface Props {
  notes: NotePreviewModel[];
}

function NotePreviewsContainer(props: Props): JSXElement {
  return (
    <div>
      <For each={props.notes}>{(el) => <NotePreview model={el} />}</For>
    </div>
  );
}

export default NotePreviewsContainer;
