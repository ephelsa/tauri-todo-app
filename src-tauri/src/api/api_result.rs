use super::api_error::ApiError;

pub type ApiResult<T> = Result<T, ApiError>;
