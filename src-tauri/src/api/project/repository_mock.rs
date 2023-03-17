use core::time;
use std::thread;

use crate::{
    api::{api_error::ApiError, api_result::ApiResult, color::color::Color},
    env::Mock,
};

use super::{
    models::{project::Project, project_creation::ProjectCreation},
    repository::ProjectRepository,
};

impl ProjectRepository<Mock> for Project {
    fn fetch_projects() -> ApiResult<Vec<Project>> {
        let result: Vec<Project> = vec![
            Project {
                id: 1,
                name: "Project Z".to_string(),
                color: Color(1),
            },
            Project {
                id: 2,
                name: "Project X".to_string(),
                color: Color(2),
            },
        ];

        thread::sleep(time::Duration::from_millis(5_000));

        return Ok(result);
    }

    fn create_project(project_creation: ProjectCreation) -> ApiResult<Project> {
        Err(ApiError::NotImplemented)
    }

    fn delete_project_by_id(id: i32) -> ApiResult<()> {
        Err(ApiError::NotImplemented)
    }
}
