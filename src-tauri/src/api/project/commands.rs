use crate::{
    api::api_result::ApiResult,
    env::{active_env, Dev, EnvType, Mock},
};

use super::{models::project::Project, repository::ProjectRepository};

#[tauri::command]
pub async fn fetch_projects() -> ApiResult<Vec<Project>> {
    match active_env().env_type() {
        EnvType::Mock => <Project as ProjectRepository<Mock>>::fetch_projects(),
        EnvType::Dev => <Project as ProjectRepository<Dev>>::fetch_projects(),
    }
}
