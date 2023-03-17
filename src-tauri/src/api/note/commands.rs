use crate::env::{active_env, Dev, EnvType, Mock};

use super::{models::note::Note, repository::NoteRepository};

#[tauri::command]
pub fn fetch_notes() -> Vec<Note> {
    match active_env().env_type() {
        EnvType::Mock => <Note as NoteRepository<Mock>>::fetch_notes(),
        EnvType::Dev => <Note as NoteRepository<Dev>>::fetch_notes(),
    }
}
