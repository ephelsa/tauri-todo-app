use crate::{api::api_result::ApiResult, env::Env};

use super::models::{project::Project, project_creation::ProjectCreation};

pub trait ProjectRepository<T: Env> {
    fn fetch_projects() -> ApiResult<Vec<Project>>;
    fn create_project(project_creation: ProjectCreation) -> ApiResult<Project>;
    fn delete_project_by_id(id: i32) -> ApiResult<()>;
}
