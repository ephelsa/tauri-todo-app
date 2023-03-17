use crate::env::Mock;

use super::{models::note::Note, repository::NoteRepository};

impl NoteRepository<Mock> for Note {
    fn fetch_notes() -> Vec<Note> {
        return vec![
            Note {
                id: 1,
                title: "Title 1".to_string(),
                content: "Content of my note".to_string(),
            },
            Note {
                id: 2,
                title: "Title 2".to_string(),
                content: "Content of my note".to_string(),
            },
        ];
    }
}
