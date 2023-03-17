import { Note } from './models/note';

export interface NoteRepository {
  fetchNotes(): Promise<Array<Note>>;
}
