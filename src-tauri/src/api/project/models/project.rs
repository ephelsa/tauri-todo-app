use serde::Serialize;

use crate::api::color::color::Color;

#[derive(Serialize, Debug)]
pub struct Project {
    pub id: i32,
    pub name: String,
    pub color: Color,
}
