use crate::env::Dev;

use super::{models::note::Note, repository::NoteRepository};

impl NoteRepository<Dev> for Note {
    fn fetch_notes() -> Vec<Note> {
        todo!()
    }
}
