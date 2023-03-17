use crate::env::Env;

use super::models::note::Note;

pub trait NoteRepository<T: Env> {
    fn fetch_notes() -> Vec<Note>;
}
