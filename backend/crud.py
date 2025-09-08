from sqlalchemy.orm import Session
import models

def get_projects(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Project).offset(skip).limit(limit).all()

def get_skills(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Skill).offset(skip).limit(limit).all()

def search_projects(db: Session, query: str):
    """
    Searches for projects where the technologies field contains the query string,
    case-insensitively.
    """
    search_query = f"%{query.lower()}%"
    return db.query(models.Project).filter(models.Project.technologies.ilike(search_query)).all()