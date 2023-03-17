use serde::Serialize;

#[derive(Serialize, thiserror::Error, Debug)]
pub enum ApiError {
    #[error("not implemented yet")]
    NotImplemented, // TODO: Add progressively errors here
}
