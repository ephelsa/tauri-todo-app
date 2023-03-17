use crate::{
    api::{api_error::ApiError, api_result::ApiResult},
    env::Dev,
};

use super::{
    models::{project::Project, project_creation::ProjectCreation},
    repository::ProjectRepository,
};

impl ProjectRepository<Dev> for Project {
    fn fetch_projects() -> ApiResult<Vec<Project>> {
        Ok(vec![])
    }

    fn create_project(project_creation: ProjectCreation) -> ApiResult<Project> {
        Err(ApiError::NotImplemented)
    }

    fn delete_project_by_id(id: i32) -> ApiResult<()> {
        Err(ApiError::NotImplemented)
    }
}
