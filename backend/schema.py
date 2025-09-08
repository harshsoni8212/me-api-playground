# backend/schemas.py

from pydantic import BaseModel
from typing import List

# --- Skill Schemas ---
class SkillBase(BaseModel):
    name: str
    category: str

class Skill(SkillBase):
    id: int

    class Config:
        from_attributes = True

# --- Project Schemas ---
class ProjectBase(BaseModel):
    title: str
    description: str | None = None
    technologies: str

class Project(ProjectBase):
    id: int

    class Config:
        from_attributes = True