from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
    )
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "CirqLab API"
    DEBUG: bool = False
    BACKEND_CORS_ORIGINS: list[str] = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]

settings = Settings()

