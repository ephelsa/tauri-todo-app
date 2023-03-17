pub trait Env {
    fn env_type(&self) -> EnvType;
}

pub struct Mock;
pub struct Dev;

impl Env for Mock {
    fn env_type(&self) -> EnvType {
        EnvType::Mock
    }
}

impl Env for Dev {
    fn env_type(&self) -> EnvType {
        EnvType::Dev
    }
}

#[derive(PartialEq)]
pub enum EnvType {
    Mock,
    Dev,
}

pub fn active_env() -> Box<dyn Env> {
    let active = Mock;

    return Box::new(active);
}
