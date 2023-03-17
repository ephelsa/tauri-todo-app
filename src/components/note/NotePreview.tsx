import type { JSXElement } from 'solid-js';
import { NotePreview as NotePreviewModel } from '../../api/note/models/note-preview';

export interface Props {
  model: NotePreviewModel;
}

function NotePreview(props: Props): JSXElement {
  return (
    <div>
      {props.model.name}
      {props.model.tags}
    </div>
  );
}

export default NotePreview;
