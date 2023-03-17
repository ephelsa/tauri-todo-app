use serde::Serialize;

#[derive(Serialize, Debug)]
pub struct Note {
    pub id: i32,
    pub title: String,
    pub content: String,
}
