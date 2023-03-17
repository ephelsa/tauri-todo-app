use serde::Serialize;

use crate::api::color::color::Color;

#[derive(Serialize, Debug)]
pub struct ProjectCreation {
    name: String,
    color: Option<Color>,
}
