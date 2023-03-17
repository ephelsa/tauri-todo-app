import { invoke } from '@tauri-apps/api';
import { Note } from './models/note';
import { NoteRepository } from './note-repository';

export class NoteRepositoryImpl implements NoteRepository {
  async fetchNotes(): Promise<Note[]> {
    return await invoke('fetch_notes');
  }
}
